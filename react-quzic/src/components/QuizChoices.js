import React from 'react';
import LearnItem from './QuizChoicesItem';
import './QuizChoices.css';

function QuizChoices() {
    return (
        <div className="choice">
            <h1>Question1</h1>
            <div className="choice_container">
                <div className="choice_wrapper">

                    <ul className="question_items">
                        <LearnItem
                            src="images/question1.jpg"
                            text="The scale shown is known in classical music theory as the “octatonic” scale. But what is it known as in jazz theory?"
                            label='Question1'
                            path='/'
                        />
                    </ul>

                    <ul className="choice_items">
                        <LearnItem
                            src=""
                            text="Phrygian scale"
                            label='A'
                            path='/'
                        />
                        <LearnItem
                            src=""
                            text="Diminished scale"
                            label='B'
                            path='/'
                        />
                    </ul>

                    <ul className="choice_items">

                        <LearnItem
                            src=""
                            text="Brbop scale"
                            label='C'
                            path='/'
                        />
                        <LearnItem
                            src="images/perfectPitch3.jpg"
                            text="Altered Scale"
                            label='D'
                            path='/'
                        />
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default QuizChoices;
