import React from 'react';
import ListItem from './ListItem';
import './ListLearnMenu.css';


function ListRythmMenu() {
    return (
        <div className="list_learn">
            <h1>Rythm and Meter</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Name of Intervals"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Time Interval Quality"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Seconds"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Thirds"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Fourths"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Fifths"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Sixths"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Sevenths"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Interval Constructor"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Identification and Construction"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Geometric Interval Constructor"
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListRythmMenu;
