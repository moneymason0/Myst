import React, { useContext } from 'react';
import GameDescriptionArea from '../left-game-description-column/left-game-descrip-area/GameDescriptionArea';
import AboutThisGame from './AboutThisGame';
import CommunityMods from './CommunityMods';
import ContentForThisGame from './ContentForThisGame';
import FranchiseHighlight from './FranchiseHighlight';
import MoreFromHalfLife from './MoreFromHalfLife';
import MoreLikeThis from './MoreLikeThis';
import SystemRequirements from './SystemRequirements';
import WhatCuratorsSay from './WhatCuratorsSay';

function LeftGameDescripColumn() {
    return (
        <div>
            Hello Left Side
            <FranchiseHighlight />
            <GameDescriptionArea />
            <ContentForThisGame />
            <AboutThisGame />
            <SystemRequirements />
            <CommunityMods />
            <MoreFromHalfLife />
            <MoreLikeThis />
            <WhatCuratorsSay />
        </div>
    )
}

export default LeftGameDescripColumn;