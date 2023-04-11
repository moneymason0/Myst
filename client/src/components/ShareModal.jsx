import React from "react";
import "/src/styles/ShareModal.css"

function ShareModal(){
    <div className="smContainer">
        <div className="smTopBar"></div>
        <div className="smHeaderBoarder">
            <div className="smHeader">
                <div className="smX"></div>
                <div className="smText">Share</div>
            </div>
        </div>
        <div className="smContentBoarder">
            <div className="smContentContainer">
                <div>
                    <div className="smContent">
                        <div className="smDialog">
                            <a className="smIconTag" href="" title="">
                                <img className="smIcon" src=""></img>
                            </a>
                            <a className="smIconTag" href="" title="">
                                <img className="smIcon" src=""></img>
                            </a>
                            <a className="smIconTag" href="" title="">
                                <img className="smIcon" src=""></img>
                            </a>
                            <div className="smLink">
                                <label></label>
                                <textArea className="smTextBox"></textArea>
                            </div>
                            <div className="smResult"></div>
                        </div>
                        <div className="smFooter">
                            <div className="smBtn">
                                <span className="smBtnLabel">OK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ShareModal;