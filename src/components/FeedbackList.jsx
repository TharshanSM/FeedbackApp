import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </div>
  );
};

export default FeedbackList;
