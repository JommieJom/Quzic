import React from 'react';
import ListItem from './ListItem';
import './ListLearnMenu.css';


function ListScaleMenu() {
    return (
        <div className="list_learn">
            <h1>Scales</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Major and Minor Scales"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Whole and Half Steps in Scales"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Relative Scales"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Minor Scales"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Other Scales"
                            path='/'
                        />
                    </ul>
                    <ul className="list_learn_items">
                        <ListItem
                            src=""
                            text="Scale Constructor"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListScaleMenu;
