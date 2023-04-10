import React from "react";
import GameRelevency from "./GameRelevency";
import GameCapabilities from "./GameCapabilities";
import "/src/styles/GameMetaData.css"

function GameMetaData(){
    return (
        <div className="column">
            <GameRelevency />
            <GameCapabilities />   
        </div>
        
    )
}

export default GameMetaData;