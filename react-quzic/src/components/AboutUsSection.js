import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutUsSection.css';

function AboutUsSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/bears.mp4'autoPlay loop muted />
            <h1>About Quzic Studio</h1>
            <p>Learning Music with the best interactions web</p>
        </div>
    )
}

export default AboutUsSection
