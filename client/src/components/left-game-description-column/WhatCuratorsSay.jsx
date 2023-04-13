import { useContext } from "react";
import '/src/styles/WhatCuratorsSay.css'

function Curator() {
    return (
      <div className="curator-box">
        <div>
          <div>
            <a className="game_description_column-view-all" href="">
              View All
            </a>
          </div>
          <h2 className="what-curators-say" >What curators say</h2>
          <div className="curator-review" >
            1,599 Curators have reviewed this product. Click
            <a href=""> here </a>
            to see them
          </div>
        </div>
      </div>
    );
}

export default Curator;