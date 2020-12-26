import React from 'react';
import QuizChoicesItem from './QuizChoicesItem';
import './QuizChoices.css';

function QuizChoices() {
    return (
        <div className="choice">
            <h1>Question 1</h1>
            <div className="choice_container">
                <div className="choice_wrapper">

                    <ul className="question_items">
                        <QuizChoicesItem
                            src="images/question1.jpg"
                            text="The scale shown is known in classical music theory as the “octatonic” scale. But what is it known as in jazz theory?"
                            label='Question1'
                        />
                    </ul>

                    <ul className="choice_items">
                        <QuizChoicesItem
                            src=""
                            text="Phrygian scale"
                        />
                        <QuizChoicesItem
                            src=""
                            text="Diminished scale"
                        />
                    </ul>

                    <ul className="choice_items">

                        <QuizChoicesItem
                            src=""
                            text="Brbop scale"
                        />
                        <QuizChoicesItem
                            src=""
                            text="Altered Scale"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QuizChoices;
