import React from "react";
import Header from "./Header";
import "/src/components/gameReviews/styles/GameReviews.css"
import ReviewNavBar from "./ReviewNavBar";

function GameReviews(){
    return(
        <div className="grPage">
            <div className="grPageContent">
                <div className="grContainer">
                    <Header />
                    <ReviewNavBar />
                </div>
            </div>
        </div>
    )
}

export default GameReviews