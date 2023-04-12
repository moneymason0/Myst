import { useState, useContext } from 'react';
import GameDescription from './components/GameDescription'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import GameMetaData from './components/GameMetaData';
import ShareModal from './components/ShareModal';
import EmbedModal from './components/EmbedModal';
import ModalContext from './context/ModalContext';
import LeftGameDescripColumn from './components/left-game-description-column/LeftGameDescripColumn';
import "./styles/App.css"
import ReportModal from './components/ReportModal';
import TagModal from "./components/TagModal";
import DropDowns from './components/Nav-bar';

const images = [
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002348.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002354.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002343.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002342.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002351.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002350.600x338.jpg?t=1666824272'
];

function App() {
  //used to handle state of the Share modal
  const {showShareModal, showEmbedModal, showReportModal, showModal} = useContext(ModalContext)
  
  return (
    <div className="background">
      <div className="picture">
        <Header />
        <div className="app">
        <NavBar />
          <div>

            <div className="carousel-and-content">
              <ImageCarousel images={images} />
              <div className="game-description-wrapper">
                <GameDescription />
              </div>
              <LeftGameDescripColumn />
            </div>
            <GameMetaData />
          </div>
            {showShareModal && <ShareModal />}
            {showEmbedModal && <EmbedModal />}
            {showReportModal && <ReportModal />}
            {showModal && <TagModal />}
        </div>
      </div>
    </div>
  );
}


export default App
