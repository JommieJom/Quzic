import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import ListItem from '../ListItem';

function LearnSection1_1(props) {
    return (
        <div className="learn">

            <div>
                <h1>Reading Music : Beats and Measures</h1>
                <p>The following examples illustrate these two concepts. <br />
                Beats - in each example, you can hear a series of steady clicks, each one being a beat or a pulsation.<br />
                Measures - the beats or pulsations are are very often grouped in numbers of two, three and four.
                </p>
                <ReactPlayer url='https://www.youtube.com/watch?v=G7it4pSNjk4' />

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

            <div>
                <h1>Reading Music : Beats and Measures</h1>
                <img src='images/learnimages/1-2.png' />

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





        </div>
    )
}

export default LearnSection1_1;
