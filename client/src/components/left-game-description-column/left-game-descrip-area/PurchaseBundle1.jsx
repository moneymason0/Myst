import React, {useContext} from 'react';
import BundleContext from "../../../context/BundleContext";

function PurchaseBundle1() {
    const {showGame, handleMouseEnter, handleMouseExit} = useContext(BundleContext);
    return (

        <>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>Bundle 1</div>
        {showGame && <div className='game-bundle'>Game Shows Up</div>}
        </>
    )
}

export default PurchaseBundle1;

