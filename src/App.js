import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutUs from './pages/AboutUs';
import AboutUsIcon from './components/shared/AboutUsIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI'></Header>
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList></FeedbackList>
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          </Routes>
          <AboutUsIcon></AboutUsIcon>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
