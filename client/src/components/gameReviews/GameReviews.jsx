import React from "react";
import Header from "./Header";
import "/src/components/gameReviews/styles/GameReviews.css"
import ReviewNavBar from "./ReviewNavBar";
import { UseReviewData } from "../../hooks/UseReviewData";

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate.toUpperCase();
}

function GameReviews(){
    const { reviewsArray } = UseReviewData()
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);

    const filteredReviews = reviewsArray.filter(review => {
        const reviewDate = new Date(review.created_at);
        return reviewDate >= thirtyDaysAgo && reviewDate <= currentDate;
    });

    const sortedReviews = filteredReviews.sort((a, b) => b.helpfulcount - a.helpfulcount);

    const topTenReviews = sortedReviews.slice(0, 10);
    console.log(reviewsArray);
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
                        {topTenReviews.map((review, index) => (
                    
                        <div key={index }className="reviewBox">
                            <div className="rmTopBar"></div>
                            <div className="reviewContents">
                                <div className="reviewer">
                                    <div className="reviewerAvatar">
                                        <a href="" className="revPic">
                                            <div className="revPicBoarder">
                                                <img className="revActualPic" src={review.image}></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="reviewerName">
                                        <a href="" className="revName">{review.name}</a>
                                    </div>
                                    <div className="reviewerOwnedGames">
                                        <a href="" className="revOwnedGames">{review.gamesowned} games owned</a>
                                    </div>
                                    <div className="reviewerReviewCount">
                                        <a href="" className="revReviewCount">{review.reviewcount} reviews!</a>
                                    </div>
                                </div>
                                <div className="reviewersReview">
                                    <a href="" className="revToolTip">
                                        <div className="thumb">
                                            <img className="thumbsUp" src={review.recommended ? "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" : "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png"} />
                                            <img className="activedBy" src=""></img>
                                        </div><div className="reviewStatusTitle">{review.recommended ? "Recomended" : "Not Recomended"}</div>
                                        <div className="reviewHoursOnRecord">{review.hours_played} hours played</div>
                                        
                                    </a>
                                    <div></div>
                                    <div className="dateOfReview">POSTED {formatDate(review.created_at)}</div>
                                    <div className="theActualReview">{review.review}</div>
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
                                        {review.helpfulcount} people found this review helpful
                                        <br></br>
                                        {review.funnycount} people found this review funny
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}    
                    </div>
                </div>            
                <div className="browseAllRevs">
                    <a href="https://steamcommunity.com/app/70/reviews/?browsefilter=toprated&snr=1_5_100010_" className="browsingSpan">
                        Browse all {reviewsArray.length} reviews
                    </a>
                </div>
            </div>

        </div>
       
    )
}

export default GameReviews