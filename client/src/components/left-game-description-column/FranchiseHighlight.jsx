import React, { useContext } from "react";

function FranchiseHighlight() {
    const imageStyle = {
        position: "relative",
        width: "600px",
        height: "50px",
        backgroundImage:
            "url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/33078398/4762deceb71043238f877995e02f33206af3ae4e.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "600px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.29)",
    };

    const linkStyle = {
        textDecoration: "none",
    };

    const franchiseStyle = {
        position: "absolute",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        color: "white",
        textDecoration: "none",
        fontFamily: "Arial"
    };

    return (
        <a
            className="franchise_notice"
            href="https://store.steampowered.com/franchise/Half-Life?snr=1_5_9__2001"
            style={linkStyle}
        >
            <div className="background_image" style={imageStyle}>
                <div style={overlayStyle}></div>
                <div className="franchise_name" style={franchiseStyle}>
                    Check out the entire Half-Life franchise on Steam
                </div>
            </div>
            <div className="franchise_highlight"></div>
        </a>
    );
}

export default FranchiseHighlight;
