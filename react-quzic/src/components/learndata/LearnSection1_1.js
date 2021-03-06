import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import LearnDataItem from './LearnDataItem';

function LearnSection1_1(props) {
    return (
        <div className="learn">

            <div>
                <br />
                <h1>Reading Music : Beats and Measures</h1>
                <p>The following examples illustrate these two concepts. <br />
                Beats - in each example, you can hear a series of steady clicks, each one being a beat or a pulsation.<br />
                Measures - the beats or pulsations are are very often grouped in numbers of two, three and four.
                </p>

                <br />
                <ReactPlayer url='https://www.youtube.com/watch?v=G7it4pSNjk4' />

                <div className="list_learn_container">
                    <div className="list_learn_wrapper">
                        <ul className="list_learn_items">
                            <LearnDataItem
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
