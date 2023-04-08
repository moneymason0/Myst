import React,{useEffect, useState} from "react";
import "/src/styles/GameDescription.css"

function TagModal({onClose}){

    return(
        <div className="modal">
            <div className="modalTopBar">
                <div className="modalTopText">
                    VIEW AND EDIT TAGS FOR THIS PRODUCT
                </div>
                <div onClick={onClose} className="modalCloseHead">X</div>
            </div>
            <div className="modalContent">
                <div>
                    <div className="modalDisplay">
                        <div className="modalTagContent">
                            <div className="modalTagSeperator"></div>
                            <div className="modalTagLeft">
                                <h2>Popular user-defined tags for this product:<span className="modalToolTip">?</span></h2>
                                <div className="modalTagList">
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/FPS/">FPS</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Sci-fi/">Sci-fi</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/1990's/">1990's</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Multiplayer/">Multiplayer</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Classic/">Classic</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Singleplayer/">Singleplayer</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Action/">Action</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Shooter/">Shooter</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/First-Person/">First-Person</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Aliens/">Aliens</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Silent%20Protagonist/">Silent Protagonist</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Story%20Rich/">Story Rich</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Atmospheric/">Atmospheric</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Moddable/">Modable</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Adventure/">Adventure</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Retro/">Retro</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Gore/">Gore</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Action-Adventure/">Action-Adventure</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Difficult/">Difficult</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/PvP/">PvP</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modalTagRight">
                                <h2>Sign In</h2>
                                <p>Sign in to add your own tags to this product.</p>
                                <p>
                                    <a className="modalSingIn" href="https://store.steampowered.com/login/?redir=app/70">
                                        <span>Sign In</span>
                                    </a>
                                </p>
                            </div>
                            <div classname="modalTagBottomSeperator"></div>
                        </div>
                    </div>
                </div>
                <div className="modalFooter">
                    <div onClick={onClose} className="modalCloseFoot">
                        <span>Close</span>
                    </div>
                </div>
            </div>
        </div> 
    )

}
export default TagModal;