import React, { useContext } from 'react';

function FranchiseHighlight() {

    const imageStyle = {
        backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/33078398/4762deceb71043238f877995e02f33206af3ae4e.jpg')"
    }

    return (
        <a className='franchise_noitice' href='https://store.steampowered.com/franchise/Half-Life?snr=1_5_9__2001'>
            <div
                className='background_image'
                style={imageStyle}>
            </div>
            <div className='franchise_name'>
                Check out the entire Half-Life franchise on Steam
            </div>
            <div className='franchise_highlight'></div>
        </a>
    )
}

export default FranchiseHighlight;