import GameDescription from './components/GameDescription'
import ImageCarousel from './components/ImageCarousel'

const images = [
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002348.600x338.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002354.116x65.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002343.116x65.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002342.116x65.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002351.116x65.jpg?t=1666824272',
  'https://cdn.akamai.steamstatic.com/steam/apps/70/0000002350.116x65.jpg?t=1666824272'

];

function App() {

  return (
    <div >
      <ImageCarousel images={images}/>
      <GameDescription />
    </div>
  )
}

export default App
