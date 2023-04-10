import React from "react";
import ShareModal from "./ShareModal";
import EmbedModal from "./EmbedModal";
import ReportModal from "./ReportModal";
import "/src/styles/ShareLink.css"

function ShareLink(){
    return(
        <div className="linkRow">
            <a className="linkbtn" href="">
                <span className="linkText">Share</span> 
            </a>
            <a className="linkbtn" href="">
                <span className="linkText">Embed</span>
            </a>
            <a className="linkbtn" href="">
                <span className="replinkText">
                    <i className="linkIcon"></i>
                </span>
            </a>
        </div>
    )
}
export default ShareLink;