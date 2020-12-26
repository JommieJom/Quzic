import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import LearnDataItem from './LearnDataItem';

function LearnSection2_2(props) {
    return (
        <div className="learn">

            <div>
                <br />
                <h1>Intervals : Interval Quality</h1>
                <p>Not all intervals of the same numerical classification are of the same size. 
                    That is why we need to specify the quality by finding the exact number of whole and half steps in the interval.<br/>
                    From any piano key to the next, we have a half step:
                </p>
                <br />

                <img className='imageOrderL' src='images/learnimages/semitones.gif' />
                <p>Some seconds have two half steps or a whole step and some seconds have one half step.<br/> 
                    In the following example, the second from C to D has a whole step while the one from B to C has only a half step:</p><br/>
                <img className='imageOrderL' src='images/learnimages/major-minor-2.gif' /><br/>
                
                <div className="list_learn_container">
                    <div className="list_learn_wrapper">
                        <ul className="list_learn_items">
                            <LearnDataItem
                                src=""
                                text="<< Rythm and Meter Menu"
                                path='/rythm-menu'
                            />
                        </ul>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default LearnSection2_2;
