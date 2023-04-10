import React from "react";
import GameRelevency from "./GameRelevency";
import GameCapabilities from "./GameCapabilities";
import ShareLink from "./ShareLink";
import "/src/styles/GameMetaData.css"

function GameMetaData(){
    return (
        <div className="column">
            <GameRelevency />
            <GameCapabilities /> 
            <ShareLink />  
        </div>
        
    )
}

export default GameMetaData;