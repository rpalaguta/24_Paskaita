import React from "react";

const Service = ({ title, description, icon }) => {
    return (
        <div className="serviceCard">
            <i class={icon}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Service;