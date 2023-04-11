import { useState } from 'react';
import GameDescription from './components/GameDescription'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import GameMetaData from './components/GameMetaData';
import ShareModal from './components/ShareModal';
import "./styles/App.css"

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
  const [showShareModal, setShowShareModal] = useState(false);
  const handleShareClick = () => {
    setShowShareModal(true);
  }
  const handleCloseShareModal = () => {
    setShowShareModal(false);
  }

  return (
    <div className="background">
      <div className="picture">
        <Header />
        <div className="app">
          <div>
            
            <div className="carousel-and-content">
              <ImageCarousel images={images} />
            <div className="game-description-wrapper">
              <GameDescription />
            </div>
            </div>
            <GameMetaData setShare={handleShareClick}/>
          </div>
          {showShareModal && <ShareModal onClose={handleCloseShareModal} />}
        </div>
      </div>
    </div>
  );
}


export default App
