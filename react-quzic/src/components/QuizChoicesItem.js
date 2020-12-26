import React from 'react';
import { Link } from 'react-router-dom';

function QuizChoicesItem(props) {
    return (
        <>
        <li className="choice_item">
            <Link className="choice_item_link" onClick={props.onClick}>
                <figure className="choice_item_pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="choice Image" className="choice_item_img" />
                </figure>
                <div className="choice_item_info">
                    <h5 className="choice_item_text">{props.text}</h5>
                </div>

            </Link>
        </li>
        </>
    )
}

export default QuizChoicesItem;
