import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import Quiz from './components/pages/Quiz';
import ScoreSumPage from './components/pages/ScoreSumPage';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import QuizOn from './components/pages/QuizOn';
import ReadingMusicMenu from './components/pages/ReadingMusicMenu';
import RythmMusicMenu from './components/pages/RythmMusicMenu';
import ScaleMusicMenu from './components/pages/ScaleMusicMenu';
import ChordMusicMenu from './components/pages/ChordMusicMenu';
import HarmonicMusicMenu from './components/pages/HarmonicMusicMenu';
import UserProfile from './components/pages/UserProfile';
import Learn1_1 from './components/pages/learnpages/LearnPage1_1';
import Learn1_2 from './components/pages/learnpages/LearnPage1_2';
import Learn1_3 from './components/pages/learnpages/LearnPage1_3';
import Learn2_1 from './components/pages/learnpages/LearnPage2_1';
import Learn2_2 from './components/pages/learnpages/LearnPage2_2';
import Learn3_1 from './components/pages/learnpages/LearnPage3_1';
import Learn3_2 from './components/pages/learnpages/LearnPage3_2';
import PerfectPitch from './components/pages/learnpages/PerfectPitchPage';

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
          <Route path='/score-sum' component={ScoreSumPage} />
          <Route path='/reading-menu' component={ReadingMusicMenu} />
          <Route path='/rythm-menu' component={RythmMusicMenu} />
          <Route path='/scale-menu' component={ScaleMusicMenu} />
          <Route path='/chord-menu' component={ChordMusicMenu} />
          <Route path='/harmonic-menu' component={HarmonicMusicMenu} />
          <Route path='/user-profile' component={UserProfile} />
          <Route path='/learn1-1' component={Learn1_1} />
          <Route path='/learn1-2' component={Learn1_2} />
          <Route path='/learn1-3' component={Learn1_3} />
          <Route path='/learn2-1' component={Learn2_1} />
          <Route path='/learn2-2' component={Learn2_2} />
          <Route path='/learn3-1' component={Learn3_1} />
          <Route path='/learn3-2' component={Learn3_2} />
          <Route path='/perfectpitch' component={PerfectPitch} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
