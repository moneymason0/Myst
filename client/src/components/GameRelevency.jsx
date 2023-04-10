import React from "react";
import "/src/styles/GameRelevency.css"

function GameRelevency(){
    return(
    <>
        <div className="title">
            Is this game relevent to you?
        </div>
        <div>
            <p>
                Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.
            </p>
            <br></br>
                <a href="https://store.steampowered.com/login/?redir=app/70">
                <span>Sign In</span>
            </a>

            or
                <a href="steam://store/70">
                <span>Open in Steam</span>
            </a>    
        </div>
    </>

    )
}
export default GameRelevency;