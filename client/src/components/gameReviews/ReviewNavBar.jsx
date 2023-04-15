import React from "react";
import "/src/components/gameReviews/styles/ReviewNavBar.css"
import { UseReviewData } from "../../hooks/UseReviewData";

function ReviewNavBar(){
    const { reviewsArray, numOfReviews, decendingTimeReviews, acendingTimeReviews } = UseReviewData();



    return(
        <div className="navContainer">
            <div className="reviewFilter">
                <div className="revFilterTitle">REVIEW TYPE</div>

            </div>
            <div className="reviewFilter">
                <div className="revFilterTitle">PURCHASE TYPE</div>

            </div>
            <div className="reviewFilter">
                <div className="revFilterTitle">LANGUAGE</div>

            </div>
            <div className="reviewFilter">
                <div className="revFilterTitle">DATE RANGE</div>

            </div>
            <div className="reviewFilter">
                <div className="revFilterTitle">PLAYTIME</div>

            </div>
            <div className="reviewDisplayAs">
                <span className="reviewDisplaySpan">DISPLAY AS:</span>
                <select className="reviewContext">
                    <option className="revOptions">Summary</option>
                    <option className="revOptions">Most Helpful</option>
                    <option className="revOptions">Recent</option>
                    <option className="revOptions">Funny</option>
                </select> 

            </div>                
            <div className="showGraphContainer">
                <span className="showGraphBtn" >
                    <span className="showGraphBtnText" >Show graph</span>
                    <div className="showGraphIcon"></div>
                </span>
            </div>
        </div>
    )
}
export default ReviewNavBar