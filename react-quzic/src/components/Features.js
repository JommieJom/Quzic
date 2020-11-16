import React from 'react';
import FeatureItem from './FeatureItem';
import './Features.css';

function Features() {
    return (
        <div className="features">
            <h1>Features!</h1>
            <div className="features_container">
                <div className="features_wrapper"> 
                    <ul className="features_items">
                        <FeatureItem 
                        src="images/slogan1.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Learn Music'
                        path='/' 
                        />
                        <FeatureItem 
                        src="images/slogan4.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Quiz Yourself'
                        path='/' 
                        />
                    </ul>

                    <ul className="features_items">
                        <FeatureItem 
                        src="images/slogan2.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Achievement!'
                        path='/' 
                        />
                        <FeatureItem 
                        src="images/slogan3.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        label='Build your own piece'
                        path='/' 
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Features;
