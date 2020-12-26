import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import LearnDataItem from './LearnDataItem';

function LearnSection2_1(props) {
    return (
        <div className="learn">

            <div>
                <br />
                <h1>Intervals : Name of Intervals</h1>
                <p>We count the degrees to find the interval. That is why it is crucial to know the order of the notes.
                </p>

                <br />

                <img className='imageOrder' src='images/learnimages/order.gif' />
                <p>Some examples:</p><br/>
                <img className='imageOrderL' src='images/learnimages/order2.gif' /><br/>
                <img className='imageOrderL' src='images/learnimages/order3.gif' /><br/>
                <img className='imageOrderL' src='images/learnimages/order4.gif' />
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

export default LearnSection2_1;
