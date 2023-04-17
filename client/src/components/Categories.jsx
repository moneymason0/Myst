import React, { useContext } from "react";
import "../styles/Categories.css";
import ModalContext from "../context/ModalContext";

function Categories() {
  const { handleCategoriesMouseOver } = useContext(ModalContext);
  const { handleCategoriesMouseExit } = useContext(ModalContext);

  return (
    <div
      className="popUpContainerCategories"
      onMouseEnter={handleCategoriesMouseOver}
    >
      
      <div className="special-column">
      <div className="category-group"> SPECIAL SECTIONS </div>
        <a href="#" className="special-item">
          Free to play
        </a>
        <a href="#" className="special-item">
          Demos
        </a>
        <a href="#" className="special-item">
          Early Access
        </a>
        <a href="#" className="special-item">
          Controller Friendly
        </a>
        <a href="#" className="special-item">
          Remote Play
        </a>
        <a href="#" className="special-item">
          Software
        </a>
        <a href="#" className="special-item">
          Soundtracks
        </a>
        <a href="#" className="special-item">
          VR Titles
        </a>
        <a href="#" className="special-item">
          VR Hardware
        </a>
        <a href="#" className="special-item">
          Steam Deck
        </a>
        <a href="#" className="special-item">
          Great on Deck
        </a>
        <a href="#" className="special-item">
          macOS
        </a>
        <a href="#" className="special-item">
          SteamOS + Linux
        </a>
        <a href="#" className="special-item">
          For PC Cafes
        </a>
      </div>

      
      <div className="genre-column">
      <div className="category-group"> GENRES </div>
        <a href="#" className="sub-genre">
          ACTION{" "}
        </a>
        <div>
          <a href="#" className="action-item">
            Arcade & Rythym
          </a>
          <a href="#" className="action-item">
            Fighting & Martial Arts
          </a>
          <a href="#" className="action-item">
            First-Person Shooter
          </a>
          <a href="#" className="action-item">
            Hack & Slash
          </a>
          <a href="#" className="action-item">
            Platformer & Runner
          </a>
          <a href="#" className="action-item">
            Third-Person Shooter
          </a>
          <a href="#" className="action-item">
            shmup
          </a>
        </div>

        <a href="#" className="sub-genre">
          Adventure
        </a>
        <div>
          <a href="#" className="adventure-item">
            Adventure RPG
          </a>
          <a href="#" className="adventure-item">
            Casual
          </a>
          <a href="#" className="adventure-item">
            Hidden Object
          </a>
          <a href="#" className="adventure-item">
            Metroidvania
          </a>
          <a href="#" className="adventure-item">
            Puzzle
          </a>
          <a href="#" className="adventure-item">
            Story-Rich
          </a>
          <a href="#" className="adventure-item">
            Visual Novel
          </a>
        </div>

        <a href="#" className="sub-genre">
          Role-Playing
        </a>
        <div>
          <a href="#" className="role-playing-item">
            Action RPG
          </a>
          <a href="#" className="role-playing-item">
            Adventure RPG
          </a>
          <a href="#" className="role-playing-item">
            JRPG
          </a>
          <a href="#" className="role-playing-item">
            Party-Based
          </a>
          <a href="#" className="role-playing-item">
            Rogue-Like
          </a>
          <a href="#" className="role-playing-item">
            Strategy RPG
          </a>
          <a href="#" className="role-playing-item">
            Turn-Based
          </a>
        </div>

        <a href="#" className="sub-genre">
          Simulation
        </a>
        <div>
          <a href="#" className="simulation-item">
            Building & Animation
          </a>
          <a href="#" className="simulation-item">
            Dating
          </a>
          <a href="#" className="simulation-item">
            Farming & Crafting
          </a>
          <a href="#" className="simulation-item">
            Hobby & Job
          </a>
          <a href="#" className="simulation-item">
            Life & Immersive
          </a>
          <a href="#" className="simulation-item">
            Sandbox & Physics
          </a>
          <a href="#" className="simulation-item">
            Space & Flight
          </a>
        </div>

        <a href="#" className="sub-genre">
          Strategy
        </a>
        <div>
          <a href="#" className="strategy-item">
            Card & Board
          </a>
          <a href="#" className="strategy-item">
            City & Settlement
          </a>
          <a href="#" className="strategy-item">
            Grand & 4X
          </a>
          <a href="#" className="strategy-item">
            Military
          </a>
          <a href="#" className="strategy-item">
            Real-Time Strategy
          </a>
          <a href="#" className="strategy-item">
            Tower Defense
          </a>
          <a href="#" className="strategy-item">
            Turn-Based Strategy
          </a>
        </div>

        <a href="#" className="sub-genre">
          Sports & Racing
        </a>
        <div>
          <a href="#" className="sports-item">
            All Sports
          </a>
          <a href="#" className="sports-item">
            Fishing & Hunting
          </a>
          <a href="#" className="sports-item">
            Individual Sports
          </a>
          <a href="#" className="sports-item">
            Racing
          </a>
          <a href="#" className="sports-item">
            Racing Sim
          </a>
          <a href="#" className="sports-item">
            Sports Sim
          </a>
          <a href="#" className="sports-item">
            Team Sports
          </a>
        </div>
      </div>

      
      <div className="support-theme-column">
      <div className="category-group">THEMES </div>
        <a href="#" className="theme-item">
          Anime
        </a>
        <a href="#" className="theme-item">
          Horror
        </a>
        <a href="#" className="theme-item">
          Mystery & Detective
        </a>
        <a href="#" className="theme-item">
          Open World
        </a>
        <a href="#" className="theme-item">
          Sci-Fi & Cyberpunk
        </a>
        <a href="#" className="theme-item">
          Space
        </a>
        <a href="#" className="theme-item">
          Survival
        </a>

      
      <div className="category-group">PLAYER SUPPORT </div>
        <a href="#" className="support-item">
          Co-Operative
        </a>
        <a href="#" className="support-item">
          LAN
        </a>
        <a href="#" className="support-item">
          Local & Party
        </a>
        <a href="#" className="support-item">
          MMO
        </a>
        <a href="#" className="support-item">
          Multiplayer
        </a>
        <a href="#" className="support-item">
          Online Competitive
        </a>
        <a href="#" className="support-item">
          Singleplayer
        </a>
      </div>
    </div>
  );
}

export default Categories;
