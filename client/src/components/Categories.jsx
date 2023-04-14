import React, { useContext } from "react";
import "../styles/Categories.css";
import ModalContext from "../context/ModalContext";



function Categories() {
  return (
    <div className="popUpContainerCategories">
      <div className="category-group">    SPECIAL SECTIONS
        <a href="#" className="category-title">
        </a>
        <div>
          <a href="#" className="category-item">
            Free to play
          </a>
          <a href="#" className="category-item">
            Demos
          </a>
          <a href="#" className="category-item">
            Early Access
          </a>
          <a href="#" className="category-item">
            Controller Friendly
          </a>
          <a href="#" className="category-item">
            Remote Play
          </a>
          <a href="#" className="category-item">
            Software
          </a>
          <a href="#" className="category-item">
            Soundtracks
          </a>
          <a href="#" className="category-item">
            VR Titles
          </a>
          <a href="#" className="category-item">
            VR Hardware
          </a>
          <a href="#" className="category-item">
            Steam Deck
          </a>
          <a href="#" className="category-item">
            Great on Deck
          </a>
          <a href="#" className="category-item">
            macOS
          </a>
          <a href="#" className="category-item">
            SteamOS + Linux
          </a>
          <a href="#" className="category-item">
            For PC Cafes
          </a>
        </div>
      </div>

      <div className="category-group"> GENRES
        <a href="#" className="category-title">
          ACTION
        </a>
        <div>
          <a href="#" className="category-item">
            Arcade & Rythym
          </a>
          <a href="#" className="category-item">
            Fighting & Martial Arts
          </a>
          <a href="#" className="category-item">
            First-Person Shooter
          </a>
          <a href="#" className="category-item">
            Hack & Slash
          </a>
          <a href="#" className="category-item">
            Platformer & Runner
          </a>
          <a href="#" className="category-item">
            Third-Person Shooter
          </a>
          <a href="#" className="category-item">
            shmup
          </a>
        </div>
      </div>

      <div className="category-group">
        <a href="#" className="category-title">
          Adventure
        </a>
        <div>
          <a href="#" className="category-item">
            Adventure RPG
          </a>
          <a href="#" className="category-item">
            Casual
          </a>
          <a href="#" className="category-item">
            Hidden Object
          </a>
          <a href="#" className="category-item">
            Metroidvania
          </a>
          <a href="#" className="category-item">
            Puzzle
          </a>
          <a href="#" className="category-item">
            Story-Rich
          </a>
          <a href="#" className="category-item">
            Visual Novel
          </a>
        </div>
      </div>

      <div className="category-group">
        <a href="#" className="category-title">
          Role-Playing
        </a>
        <div>
          <a href="#" className="category-item">
            Action RPG
          </a>
          <a href="#" className="category-item">
            Adventure RPG
          </a>
          <a href="#" className="category-item">
            JRPG
          </a>
          <a href="#" className="category-item">
            Party-Based
          </a>
          <a href="#" className="category-item">
            Rogue-Like
          </a>
          <a href="#" className="category-item">
            Strategy RPG
          </a>
          <a href="#" className="category-item">
            Turn-Based
          </a>
        </div>
      </div>

      <div className="category-group">
        <a href="#" className="category-title">
          Simulation
        </a>
        <div>
          <a href="#" className="category-item">
            Building & Animation
          </a>
          <a href="#" className="category-item">
            Dating
          </a>
          <a href="#" className="category-item">
            Farming & Crafting
          </a>
          <a href="#" className="category-item">
            Hobby & Job
          </a>
          <a href="#" className="category-item">
            Life & Immersive
          </a>
          <a href="#" className="category-item">
            Sandbox & Physics
          </a>
          <a href="#" className="category-item">
            Space & Flight
          </a>
        </div>
      </div>

      <div className="category-group">
        <a href="#" className="category-title">
          Strategy
        </a>
        <div>
          <a href="#" className="category-item">
            Card & Board
          </a>
          <a href="#" className="category-item">
            City & Settlement
          </a>
          <a href="#" className="category-item">
            Grand & 4X
          </a>
          <a href="#" className="category-item">
            Military
          </a>
          <a href="#" className="category-item">
            Real-Time Strategy
          </a>
          <a href="#" className="category-item">
            Tower Defense
          </a>
          <a href="#" className="category-item">
            Turn-Based Strategy
          </a>
        </div>
      </div>

      <div className="category-group">
        <a href="#" className="category-title">
          Sports & Racing
        </a>
        <div>
          <a href="#" className="category-item">
            All Sports
          </a>
          <a href="#" className="category-item">
            Fishing & Hunting
          </a>
          <a href="#" className="category-item">
            Individual Sports
          </a>
          <a href="#" className="category-item">
            Racing
          </a>
          <a href="#" className="category-item">
            Racing Sim
          </a>
          <a href="#" className="category-item">
            Sports Sim
          </a>
          <a href="#" className="category-item">
            Team Sports
          </a>
        </div>
      </div>

      <div className="category-group">THEMES
        <a href="#" className="category-title">
        </a>
        <div>
          <a href="#" className="category-item">
            Anime
          </a>
          <a href="#" className="category-item">
            Horror
          </a>
          <a href="#" className="category-item">
            Mystery & Detective
          </a>
          <a href="#" className="category-item">
            Open World
          </a>
          <a href="#" className="category-item">
            Sci-Fi & Cyberpunk
          </a>
          <a href="#" className="category-item">
            Space
          </a>
          <a href="#" className="category-item">
            Survival
          </a>
        </div>
      </div>

      <div className="category-group">PLAYER SUPPORT
        <a href="#" className="category-title">
        </a>
        <div>
          <a href="#" className="category-item">
            Co-Operative
          </a>
          <a href="#" className="category-item">
            LAN
          </a>
          <a href="#" className="category-item">
            Local & Party
          </a>
          <a href="#" className="category-item">
            MMO
          </a>
          <a href="#" className="category-item">
            Multiplayer
          </a>
          <a href="#" className="category-item">
            Online Competitive
          </a>
          <a href="#" className="category-item">
            Singleplayer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
