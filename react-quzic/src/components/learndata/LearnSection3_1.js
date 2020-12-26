import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import LearnDataItem from './LearnDataItem';

function LearnSection3_1(props) {
    return (
        <div className="learn">

            <div>
                <br />
                <h1>Scales : Major and Minor Scales</h1>
                <p>Most of the music written since the XVII century uses two types of scales: the major scale and the minor scale.<br/>
                    We can build a major scale using the white keys on the piano keyboard starting with C:
                </p>
                <br />

                <img className='imageGif' src='images/learnimages/do-mayor.gif' />
                <p>Major scales have a major third interval between the first and third note.<br/>
                    We can build a minor scale using the white keys but starting in A:</p><br/>
                <img className='imageGif' src='images/learnimages/la-menor.gif' /><br/>

                <p>Minor scales have a minor third interval between the first and third note.<br/>
                    But what defines the type of scale is not its first note, but the intervals used to create it.<br/>
                    We can build a minor scale using the white keys but starting in A:</p><br/>
                
                <div className="list_learn_container">
                    <div className="list_learn_wrapper">
                        <ul className="list_learn_items">
                            <LearnDataItem
                                src=""
                                text="<< Scale Menu"
                                path='/scale-menu'
                            />
                        </ul>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default LearnSection3_1;
