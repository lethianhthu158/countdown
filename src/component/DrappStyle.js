import React from 'react';
import "./DrappStyle.scss"

const DrappStyle = (props) => {
    return (
        <div className={`container-content ${props.styleAnimation}`}>
            <div className='time-count'> {props.countdown} </div>
            <div className='label-time'><span className='label'>{props.content}</span></div>
        </div>
    );
};

export default DrappStyle;