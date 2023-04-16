import React, {useContext} from 'react';
import BundleContext from "../../../context/BundleContext";
import '../styles/PurchaseBundle1.css'

function PurchaseBundle1() {
    const {showGame, handleMouseEnter, handleMouseExit} = useContext(BundleContext);
    return (

        <>
        <div className='game_bundle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>Bundle 1</div>
        {showGame && <div className='game-bundle'>Game Shows Up</div>}
        </>
    )
}

export default PurchaseBundle1;

