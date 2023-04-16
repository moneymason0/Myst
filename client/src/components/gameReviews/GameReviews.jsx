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
                    <div className="leftReviewColumn">
                        <div className="leftReviewHeader">
                            Most Helpful Reviews
                            <span className="leftReviewHeaderSpan">In the past 30 Days</span>
                        </div>
                        <span className="reviewBox">
                            <div className="rmTopBar"></div>
                            <div className="reviewContents">
                                <div className="reviewer">
                                    <div className="reviewerAvatar">
                                        <a href="" className="revPic">
                                            <div className="revPicBoarder">
                                                <img className="revActualPic" src=""></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="reviewerName">
                                        <a href="" className="revName">Ash</a>
                                    </div>
                                    <div className="reviewerOwnedGames">
                                        <a href="" className="revOwnedGames">20</a>
                                    </div>
                                    <div className="reviewerReviewCount">
                                        <a href="" className="revReviewCount">20 reviews!</a>
                                    </div>
                                </div>
                                <div className="reviewersReview">
                                    <a href="" className="revToolTip">
                                        <div className="thumb">
                                            <img className="thumbsUp" src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"></img>
                                            <img className="activedBy" src=""></img>
                                        </div><div className="reviewStatusTitle">Recomended</div>
                                        <div className="reviewHoursOnRecord">1.6 hours on record</div>
                                        
                                    </a>
                                    <div></div>
                                    <div className="dateOfReview">POSTED MARCH 22</div>
                                    <div className="theActualReview">i would like to thank my ex for the free game!</div>
                                    <div className="reviewGradiant"></div>
                                    <div className="reviewHr"></div>
                                    <div className="reviewControls">
                                        <span className="controllerSpan">Was this review helpful?</span>
                                        <div className="votingContainer">
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="yesI"></i>
                                                     Yes
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="noI"></i>
                                                     No
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="funnyI"></i>
                                                     Funny
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <img className="awardI" src="https://store.akamai.steamstatic.com/public/shared/images//award_icon.svg"></img>
                                                     Award
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="votingInfo">
                                        60 people found this review helpful
                                        <br></br>
                                        37 people found this review funny
                                    </div>
                                </div>
                            </div>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default GameReviews