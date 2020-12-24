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
                            text="An interval measures the distance between two notes. We have to know how to identify intervals to be able to identify chords and scales."
                            label='Rythm and meter'
                            path='/rythm-menu'
                        />

                    </ul>

                    <ul className="learn_items">
                        <LearnItem
                            src="images/scales.png"
                            text="In our musical system, octaves are divided into twelve notes. A scale is a series of notes selected among these twelve notes. Composers write melodies and build chords to harmonize melodies using scale notes."
                            label='Scales'
                            path='/'
                        />
                        <LearnItem
                            src="images/learnchords.png"
                            text="Three or more notes simultaneously sounded form a chord."
                            label='Chord Theory'
                            path='/'
                        />


                    </ul>



                    <ul className="learn_items">

                        <LearnItem
                            src="images/learnharmonics.png"
                            text="Harmonic functions explain the relationship between chords. They are essential in the development of concepts such as tonality and key."
                            label='Harmonic Functions'
                            path='/'
                        />
                        <LearnItem
                            src="images/perfectPitch3.jpg"
                            text="In this exercise, you will hear a single note. Your goal is to identify the name of the note. For best results, practice a little bit every day."
                            label='Perfect Pitch'
                            path='/perfectpitch'
                        />
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default LearnMenu;
