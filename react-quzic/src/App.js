import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import Quiz from './components/pages/Quiz';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import QuizOn from './components/pages/QuizOn';
import ReadingMusicMenu from './components/pages/ReadingMusicMenu';
import RythmMusicMenu from './components/pages/RythmMusicMenu';
<<<<<<< HEAD
import UserProfile from './components/pages/UserProfile';
=======
import Learn1_1 from './components/pages/learnpages/LearnPage1_1';
>>>>>>> 9e6dd836c893c143b9cfd92da12ba0920855d984

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/learn-up' component={Learn} />
          <Route path='/quiz-up' component={Quiz} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/quiz-on' component={QuizOn} />
          <Route path='/reading-menu' component={ReadingMusicMenu} />
          <Route path='/rythm-menu' component={RythmMusicMenu} />
<<<<<<< HEAD
          <Route path='/user-profile' component={UserProfile} />
=======
          <Route path='/learn1-1' component={Learn1_1} />
>>>>>>> 9e6dd836c893c143b9cfd92da12ba0920855d984
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
