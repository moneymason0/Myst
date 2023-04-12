import React from "react";
import GameRelevency from "./GameRelevency";
import GameCapabilities from "./GameCapabilities";
import ShareLink from "./ShareLink";
import SupportedLanguages from "./SupportedLanguages";
import SteamDeck from "./SteamDeck";
import "/src/styles/GameMetaData.css"

function GameMetaData(){
    return (
        <div className="column">
            <GameRelevency />
            <GameCapabilities /> 
            <SupportedLanguages />
            <SteamDeck />
            <ShareLink />  
        </div>
        
    )
}

export default GameMetaData;