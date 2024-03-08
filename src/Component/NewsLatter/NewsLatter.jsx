import React from 'react';
import './NewsLater.css'


const NewsLatter = () => {
    return (
        <div className='newslatter'>
            <h1>Get Exclusive Offer On Your Mail</h1>
            <p>Subscribe to our newlatter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email ID' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLatter;