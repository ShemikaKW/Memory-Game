import React from "react";
import BackgroundImg from "../Img/background.png";
import './Jumbotron.css'

const JumbotronBackground = { 
    backgroundImage: `url(${BackgroundImg})`
};

const Jumbotron = (pros) => (
    <div className="jumbotron jumbotron-fluid" style = {JumbotronBackground}>
        <div className="container text-center">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead display-5">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
)

export default Jumbotron;

