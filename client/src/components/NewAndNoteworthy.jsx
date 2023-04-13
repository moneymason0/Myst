import React, {useContext} from "react";
import "../styles/NewAndNoteWorthy.css";
import ModalContext from "../context/ModalContext";

const newAndNoteWorthy= ['Steam replay 2022', 'Top Sellers','Most Played','New & Trending', 'Special Offers', 'Recently Updated','Popular Incoming']


function NewAndNoteWorthy() {
    const {handleNewAndNoteworthyMouseExit} = useContext(ModalContext) 
    
    return(
        <div className="popUpContainer" onMouseLeave={handleNewAndNoteworthyMouseExit}>
            <a className="item" href="https://store.steampowered.com/login/?redir=replay%3Fsrc%3D7%26snr%3D1_5_9__12&redir_ssl=1&snr=1_5_9__12">Steam Replay 2022</a>
            <a className="item" href="https://store.steampowered.com/charts/topselling/?snr=1_5_9__12">Top Sellers</a>
            <a className="item" href="https://store.steampowered.com/charts/mostplayed/?snr=1_5_9__12">Most Played</a>
            <a className="item" href="https://store.steampowered.com/explore/new/?snr=1_5_9__12">New & Trending</a>
            <a className="item" href="https://store.steampowered.com/specials/?snr=1_5_9__12">Special Offers</a>
            <a className="item" href="https://store.steampowered.com/newshub/?snr=1_5_9__12">Recently Updated</a>
            <a className="item" href="https://store.steampowered.com/explore/upcoming/?snr=1_5_9__12">Popular Incoming</a>
        </div>)
}
export default NewAndNoteWorthy