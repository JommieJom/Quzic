import React from 'react';
import ListItem from './ListItem';
import './ListLearnMenu.css';


function ListReadingMusic() {
    return (
        <div className="list_learn">
            <h1>Reading Music</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Beats and measure"
                            path='/learn1-1'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Time Signature"
                            path='/learn1-2'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Note Value"
                            path='/learn1-3'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Dotted Notes and the Tie"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Rests"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Values Shorter Than a Beat"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Eighth and Sixteenth Notes"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Eighth-Note and Sixteenth-Note Rests"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Triplets"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Beat Unit"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Simple and Compound Meters"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Reading Musical Notes"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="An Example"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Accidentals"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Key Signatures"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Keyboard Notes"
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListReadingMusic;
