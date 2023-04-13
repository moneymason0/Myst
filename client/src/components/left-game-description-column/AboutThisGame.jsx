import React from "react";
import { UseGameData } from "../../hooks/UseGameData";
import "./styles/AboutThisGame.css"

function AboutThisGame(){
    const aboutGame= UseGameData(13)
    console.log(aboutGame)
    return(
        <div className="abContainer">
            <div className="dataPanel">
                <h2 className="abH2">About this game</h2>
                {aboutGame}
            </div>
        </div>
    )
}
export default AboutThisGame