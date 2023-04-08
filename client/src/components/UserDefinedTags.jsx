import React, {useState, useEffect} from "react";
import "/src/styles/GameDescription.css"
import TagModal from "./TagModal";

function UserDefinedTags(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return(
        <div>
            <a className="tag" href="https://store.steampowered.com/tags/en/FPS/">
                FPS
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Sci-fi/">
                Sci-fi
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/1990%27s/">
                1990's
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Multiplayer/">
                Multiplayer
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Classic/">
                Classic
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Gore/">
                Gore
            </a>
            <div onClick={handleClick}className="tagBtn">
                +
            </div>
            {showModal && <TagModal onClose={handleCloseModal} />}
        </div>
    )
}
export default UserDefinedTags;