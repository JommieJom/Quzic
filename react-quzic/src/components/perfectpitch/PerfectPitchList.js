import React from 'react';
import ListItem from '../ListItem';
import '../ListLearnMenu.css';


function PerfectPitchList() {
    return (
        <div className="list_learn">
            <h1>PerfectPitch</h1>
            <div className="list_learn_container">
                <div className="list_learn_wrapper">
                <ul className="list_learn_items">
                    <ListItem
                        src=""
                        text="Play note"
                        path='/'
                    />
                </ul>
                <ul className="list_learn_items">
                    <ListItem
                        src=""
                        text="A"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="A#/Bb"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="B"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="C"
                        path='/'
                    />
                </ul>
                <ul className="list_learn_items">
                    <ListItem
                        src=""
                        text="C#/Db"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="D"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="D#/Eb"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="E"
                        path='/'
                    />
                </ul>
                <ul className="list_learn_items">
                    <ListItem
                        src=""
                        text="F"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="F#/Gb"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="G"
                        path='/'
                    />
                    <ListItem
                        src=""
                        text="G#/Ab"
                        path='/'
                    />
                </ul>

            </div>
        </div>
        </div >
    )
}

export default PerfectPitchList;
