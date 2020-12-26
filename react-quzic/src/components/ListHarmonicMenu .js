import React from 'react';
import ListItem from './ListItem';
import './ListLearnMenu.css';


function ListHarmonicMenu() {
    return (
        <div className="list_learn">
            <h1>Harmonic Functions</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Basic Harmonic Functions"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="The Tonic"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="The Dominant and Subdominant"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="An example using I, IV and V"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Identifying the I, IV and V degrees"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="The II and VII Degrees"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="The III and VI Degrees"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Harmonic Functions in Minor Keys"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Harmonic Analysis"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListHarmonicMenu;
