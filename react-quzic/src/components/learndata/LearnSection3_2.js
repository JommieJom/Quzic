import React from 'react';
import './LearnSection.css';
import ReactPlayer from 'react-player';
import LearnDataItem from './LearnDataItem';

function LearnSection3_2(props) {

    return (
        <div className="learn">

            <div>
                <br />
                <h1>Scales : Whole and Half Steps in Scales</h1>
                <p>Major scales have the following sequence of whole and half steps:
                </p>
                <br />

                <img className='imageGif' src='images/learnimages/scale3-2img.gif' />
                <p>We can build a major scale starting on any note if we keep the same sequence of whole and half steps.<br />
                    Below we build another major scale but this time starting on a D. We say this is the D major scale:</p><br />
                <img className='imageGif' src='images/learnimages/scale3-2img2.gif' /><br />

                <p>Why do we write accidentals at the beginning of the staff? These accidentals are called key signatures.
                In the previous and following examples, the key signature using F and C sharp implies that every F and C are sharp. See Key Signatures for more information.
                    Beethoven used this scale to write his Ode to Joy in the last movement of his 9th Symphony: </p><br />
                <ReactPlayer url='https://www.youtube.com/watch?v=D6uPo3MIKPU&t=363s' />


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

export default LearnSection3_2;
