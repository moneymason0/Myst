import { useState, createContext } from 'react';

const BundleContext = createContext();

export const BundleProvider = ({ children }) => {
    const [showGame, setShowGame] = useState(false);

    const handleMouseEnter = () => {
        setShowGame(true);
    }

    const handleMouseExit = () => {
        setShowGame(false);
    }

    return (<BundleContext.Provider value={{
        showGame,
        handleMouseEnter,
        handleMouseExit,
    }}>
        {children}
    </BundleContext.Provider>
    )
}

export default BundleContext;