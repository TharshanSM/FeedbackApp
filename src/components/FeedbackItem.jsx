import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { onDeleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>

      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple'></FaEdit>
      </button>

      <button onClick={() => onDeleteFeedback(item.id)} className='close'>
        <FaTimes color='purple'></FaTimes>
      </button>

      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
