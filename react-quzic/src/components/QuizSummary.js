import React from 'react';
import { Link } from 'react-router-dom';

function QuizSummary(props) {
    return (
        <>
        <h1>Score Summary{props.value}</h1>

        <li className="learn_item">
            <Link className="learn_item_link" to={props.path}>
                <figure className="learn_item_pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="learn Image" className="learn_item_img" />
                </figure>
                <div className="learn_item_info">
                    <h5 className="learn_item_text">{props.text}</h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default QuizSummary;
