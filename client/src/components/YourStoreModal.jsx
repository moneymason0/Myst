import React, {useContext} from "react";
import ModalContext from "../context/ModalContext";
import "../styles/YourStoreModal.css";


function YourStoreModal() {
    const yourStore= ['Home','Community Reccomendations','Recently Viewed','Steam Curators']
    const {handleYourStoreMouseExit} = useContext(ModalContext);
    const {handleYourStoreMouseOver} = useContext(ModalContext)
    
    return(
        <div className="popUpContainerStore" onMouseEnter={handleYourStoreMouseOver}>
            <a className="item" href="https://store.steampowered.com/">Home</a>
            <a className="item" href="https://store.steampowered.com/communityrecommendations/">Community Recomendations</a>
            <a className="item" href="https://store.steampowered.com/recommended/">Recently Viewed</a>
            <a className="item" href="https://store.steampowered.com/curators/">Steam Curators</a>
        </div>
    )  
}

export default YourStoreModal