import { useState, useContext } from 'react';
import GameDescription from './components/GameDescription'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import GameMetaData from './components/GameMetaData';
import ShareModal from './components/ShareModal';
import EmbedModal from './components/EmbedModal';
import ModalContext from './context/ModalContext';
import LeftGameDescripColumn from './components/left-game-description-column/LeftGameDescripColumn'
import Footer from './components/Footer';
import "./styles/App.css"
import ReportModal from './components/ReportModal';
import TagModal from "./components/TagModal";
// import NavBar from './components/Nav-bar';
import NavBarBM from './components/NavBarBM';
import YourStoreModal from './components/YourStoreModal';
import NewAndNoteWorthy from './components/NewAndNoteworthy';
import Categories from './components/Categories'
import GameReviews from './components/gameReviews/GameReviews';

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
  const { showShareModal, showEmbedModal, showReportModal, showModal, showYourStore, showNewAndNoteWorthy, showCategories} = useContext(ModalContext)

  return (
  <>  
    <div className="background">
     
      <div>
       
      </div>
      
      <div className="picture">
         <Header />
          <NavBarBM />
        
        <div className="app">
        
          <div>
           
            <div className="carousel-and-content">
              <ImageCarousel images={images} />
              <div className="game-description-wrapper">
                <GameDescription />
              </div>
            </div>
          </div>
          <div className="page_content">
            <GameMetaData />
            <LeftGameDescripColumn />
          </div>
          
          {showShareModal && <ShareModal />}
          {showEmbedModal && <EmbedModal />}
          {showReportModal && <ReportModal />}
          {showModal && <TagModal />}
          {showYourStore && <YourStoreModal />}
          {showNewAndNoteWorthy && <NewAndNoteWorthy />}
          {showCategories && <Categories/>}
         
        </div>
        <GameReviews /> 
        <div>
          <Footer />
          
        </div>
      </div>
    </div>
  </>
  );
}


export default App
