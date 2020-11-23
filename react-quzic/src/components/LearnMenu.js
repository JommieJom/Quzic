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
                            src="images/reading.png"
                            text="The system of music notation allows us to specify two of the main characteristics of music: the note to be played and its duration. The following pages show the essential aspects of music reading"
                            label='Reading music'
                            path='/reading-menu'
                        />
                        <LearnItem
                            src="images/intervals.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            label='Rythm and meter'
                            path='/'
                        />

                    </ul>

                    <ul className="learn_items">
                        <LearnItem
                            src="images/scales.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            label='Scales'
                            path='/'
                        />
                        <LearnItem
                            src="images/learnchords.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit."
                            label='Chord Theory'
                            path='/'
                        />


                    </ul>



                    <ul className="learn_items">

                        <LearnItem
                            src="images/learnharmonics.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit."
                            label='Harmonic Functions'
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
