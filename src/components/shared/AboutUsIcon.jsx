import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUsIcon = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30}></FaQuestion>
      </Link>
    </div>
  );
};

export default AboutUsIcon;
