import React from "react";
import servicesCollection from "../../collections/servicesCollection";
import './Home.css'
import Service from "./Service";

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1 className="heroTitle">One Page Bootstrap Website Template</h1>
                <h4 className="heroDescription">We are team of talented designers</h4>
                <a className="heroBtn" href="#">Get Started</a>
            </div>
            <div className="services">
                {
                    servicesCollection.map(service => (
                        <Service icon={service.icon} title={service.title} description={service.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;

// <i class="fa-solid fa-fingerprint"></i>
// <i class=""></i>