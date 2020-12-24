import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import ListItem from '../ListItem';

function LearnSection1_3(props) {
    return (
        <div className="learn">
            <h1>Reading Music : Note Value</h1>

            <img src='images/learnimages/1-3.png' />

            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="<< Reading Music"
                            path='/reading-menu'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default LearnSection1_3;
