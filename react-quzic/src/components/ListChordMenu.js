import React from 'react';
import ListItem from './ListItem';
import './ListLearnMenu.css';


function ListChordMenu() {
    return (
        <div className="list_learn">
            <h1>Chords</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Chord Construction"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Major Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Minor Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Diminished Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Augmented Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Chord Symbols"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Inversions"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Seventh Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Use of Chords"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Chord Constructor"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Geometric Chord Constructor"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListChordMenu;
