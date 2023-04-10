import GameDescription from './components/GameDescription'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import GameMetaData from './components/GameMetaData';

const images = [
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002348.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002354.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002343.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002342.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002351.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002350.600x338.jpg?t=1666824272'

];

function App() {

  return (
    <div >
      <Header />
      <div>
      <ImageCarousel images={images}/>
      </div>
      <GameDescription />
      <GameMetaData />
    </div>

  )
}

export default App
