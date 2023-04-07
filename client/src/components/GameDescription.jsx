import React, {useState, useEffect} from "react";
import pic from '/src/assets/game-description-image.png';
import UserDefinedTags from "./UserDefinedTags";

function GameDescription(){
    return(
        <div>
            <img src={pic}/>
            <div>
                <p>Named Game of the Year by over 50 publications, 
                    Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. 
                    Also includes an exciting multiplayer mode that allows you to play against friends and enemies
                </p>
            </div>
            <div>
                <button>Recent Reviews: Overwelmingly Possive 1,666</button>
            </div>
            <div>
                <button>All Reviews: Overwelmingly Positive 70,356</button>
            </div>
            <div>
                <p>Release Date: Nov 8, 1998</p>
            </div>
            <div>
                <p>Developer: <button>Valve</button></p>
                <p>Publisher: <button>Valve</button></p>
            </div>
            <div>
                <p>Popular user-defined tags for this product:</p>
                <UserDefinedTags />
            </div>
        </div>
        
    )
}

export default GameDescription;