import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ModalProvider } from './context/ModalContext'
import { GameLanguagesContextProvider } from './context/GameLanguagesContext'
import { GameDataContextProvider } from './context/GameDataContext'
import { BundleProvider } from './context/BundleContext'
import { SRProvider } from './context/SRContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BundleProvider>
    <SRProvider>
    <GameDataContextProvider>
      <GameLanguagesContextProvider>
        <ModalProvider>
          <App />
        </ModalProvider> 
      </GameLanguagesContextProvider>
    </GameDataContextProvider>
    </SRProvider>
    </BundleProvider>
  </React.StrictMode>,
)
