import React, { useContext } from 'react';
import BundleContext from "../../../context/BundleContext";
import '../styles/PurchaseBundle.css'

function PurchaseBundle1() {
    const { showGame, handleMouseEnter, handleMouseExit } = useContext(BundleContext);

    return (
        <div className="game_bundle_wrapper game_bundle">

            <form name="add_bundle_to_cart_232">
            </form>
            <div className="game_bundle_area_purchase_platform">
                <span className='bundle1_platform_img win'></span>
                <span className='bundle1_platform_img mac'></span>
            </div>
            <h1 className='bundle1_h1'>Buy Valve Complete Pack
            <span className='bundle_label' tooltip-text="Bundles are a special discount on a set of products.  If you already own some of the products contained in the bundle, purchasing the bundle will allow you to 'complete the set', paying only for the products you don't already own while still receiving the full bundle discount on each of those products.">BUNDLE</span>
            <span className='bundle_label_tooltip' >(?)</span>
            </h1>
            <p>
                <div className='bundle_contents_preview collapsed'>
                    <div className='bundle_contents_preview_position'>
                        <a>
                            <img className='first_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='second_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='third_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='fourth_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='fifth_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='sixth_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='seventh_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='eighth_game_inside_bundle' />
                        </a>
                        <a>
                            <img className='first_game_inside_bundle' />
                        </a>
                    </div>
                </div>
            </p>
            <div className="bundle1_purchase_action_bg">
                <div className="bundle1_price">$65.70</div>
                <div className="bundle1_add_to_cart">
                    <button type="bundle1_submit" className="bundle1_btn_green_steamui">Add to Cart</button>
                </div>
            </div>

        </div>
    );
}

export default PurchaseBundle1;