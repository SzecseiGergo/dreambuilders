import React from 'react';

export default function Card({ imgClassName, cardTitle, cardContent }) {
    return (
        <div className="cardItem card col-12 col-sm-3 text-center">
            <i className={`${imgClassName} fs-3 pt-3  text-success icon`} ></i>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardContent}</p>
            </div>
        </div>
    )
}