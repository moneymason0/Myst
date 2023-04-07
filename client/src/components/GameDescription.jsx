import React, {useState, useEffect} from "react";
import pic from '/src/assets/game-description-image.png';
import UserDefinedTags from "./UserDefinedTags";

function GameDescription(){
    return(
        <div>
            <div>
                <img src={pic}/>
            </div>
            
            <div>
                Named Game of the Year by over 50 publications, 
                Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. 
                Also includes an exciting multiplayer mode that allows you to play against friends and enemies
                
            </div>
            <div>
                Recent Reviews: <span>Overwelmingly Possive 1,666</span>
            </div>
            <div>
                All Reviews: <span>Overwelmingly Positive 70,356</span>
            </div>
            <div>
                <div>Release Date:</div> <div>Nov 8, 1998</div>
            </div>
            <div>
                <div>Developer:</div> <a href="https://store.steampowered.com/developer/valve">Valve</a>
                
            </div>
            <div>
                <div>Publisher:</div><a href="https://store.steampowered.com/developer/valve">Valve</a>
            </div>
            <div>
                <p>Popular user-defined tags for this product:</p>
                <UserDefinedTags />
            </div>
        </div>
        
    )
}

export default GameDescription;