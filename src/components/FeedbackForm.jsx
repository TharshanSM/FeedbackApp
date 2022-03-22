import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { onAddFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === ' ') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== ' ' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, { text, rating });
      } else {
        onAddFeedback({ text, rating });
      }
      setRating(10);
      setBtnDisabled(true);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate your service with us?</h4>
        <RatingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        ></RatingSelect>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} version='primary'>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
