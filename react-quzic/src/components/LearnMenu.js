import React from 'react';
import LearnItem from './LearnItem';
import './LearnMenu.css';

function LearnMenu() {
    return (
        <div className="learn">
            <h1>Learning!</h1>
            <div className="learn_container">
                <div className="learn_wrapper"> 
                    <ul className="learn_items">
                        <LearnItem 
                        src="images/sightReading2.jpg" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Music Note Sight Reading'
                        path='/' 
                        />
                        <LearnItem 
                        src="images/slogan3.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Rythm'
                        path='/' 
                        />
                    </ul>
            
                    <ul className="learn_items">
            
                        <LearnItem 
                        src="images/Chords2.jpg" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Chord Theory'
                        path='/' 
                        />
                        <LearnItem 
                        src="images/perfectPitch3.jpg" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Perfect Pitch'
                        path='/' 
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default LearnMenu;
