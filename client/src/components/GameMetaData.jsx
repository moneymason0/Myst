import React from "react";
import GameRelevency from "./GameRelevency";
import GameCapabilities from "./GameCapabilities";
import ShareLink from "./ShareLink";
import "/src/styles/GameMetaData.css"

function GameMetaData({setShare}){
    return (
        <div className="column">
            <GameRelevency />
            <GameCapabilities /> 
            <ShareLink setShare={setShare}/>  
        </div>
        
    )
}

export default GameMetaData;