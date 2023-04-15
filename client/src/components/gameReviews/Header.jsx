import React from "react";
import "/src/components/gameReviews/styles/Header.css"
function Header(){
    return(
        <>
            <h2 className="headerH2">CUSTOMER REVIEWS</h2>
            <div className="grAtGlace">
                <div className="overAllReviews">
                    <div className="sumBar">
                        <div className="sumSection">
                            <div className="overallTitle">
                                Overall Reviews:
                            </div>
                            <span className="overallSpan">
                                Overwhelmingly Positive
                            </span>
                            <span className="overallAmount">
                                (70,586 reviews)
                            </span>
                            <a className="overallToolTip">
                                <img className="oatooltipimg" src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="recentReviews">
                    <div className="rrsumBar">
                        <div className="rrsumSection">
                            <div className="overallTitle">
                                Recent Reviews:
                            </div>
                            <span className="overallSpan">
                                Overwhelmingly Positive
                            </span>
                            <span className="overallAmount">
                                (1686 reviews)
                            </span>
                            <a className="overallToolTip">
                                <img className="oatooltipimg" src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header