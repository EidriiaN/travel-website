import React from "react";

export default function Card(props){

    return(

        <div className="card">
            <div className="card--img">

                <img src={props.item.img} alt="asfa" />

            </div>
            
            <div className="card--2">
                
                <div className="card--location">
                    
                    <span> <i class="fa-solid fa-location-dot"></i>{props.item.location}</span>
                    <a className="card--google" href={props.item.google_maps} target="_blank" rel="noreferrer">Visit on Google Maps</a>
                </div>
                    <h2 className="card--title">{props.item.title}</h2>
                <div className="card--content">
                    <p className="card--content-1">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--content-2">{props.item.description}</p>
                </div>

            </div>
        </div>
    )
}