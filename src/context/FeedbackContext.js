import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const onAddFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();

        setFeedback([data, ...feedback]);
    };

    const onDeleteFeedback = async (id) => {
        await fetch(`/feedback/${id}`, { method: "DELETE" });
        setFeedback(feedback.filter((item) => item.id !== id));
    };

    const updateFeedback = async (id, currentItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentItem),
        });

        const data = await response.json();

        setFeedback(
            feedback.map((item) => {
                return item.id === id ? { ...item, ...data } : item;
            })
        );
    };

    const editFeedback = (item) => {
        setFeedbackEdit({ item: item, edit: true });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                onDeleteFeedback,
                onAddFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
