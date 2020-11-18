import React from 'react';
import '../App.css';
import { Button } from './Button';
import './WelcomeQuiz.css';
import { Link } from 'react-router-dom';

function WelcomeQuiz() {
    return (
        <div className='hero-container'>
            <video src='/videos/welcomequiz.mp4' autoPlay loop muted />
            <h1>Welcome To Quiz</h1>
            <p>Let's test your music theory strength</p>
            <div className="hero-btns">
                <Link to='/quiz-on' className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Start!</Button>
                </Link>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>LEARN MORE</Button>
            </div>
        </div>
    )
}

export default WelcomeQuiz
