import { useState, createContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showEmbedModal, setShowEmbedModal] = useState(false);

    const handleShareClick = () => {
        setShowShareModal(true);
    }
    const handleCloseShareModal = () => {
        setShowShareModal(false);
    }
    const handleEmbedClick = () => {
        setShowEmbedModal(true);
    }
    const handleCloseEmbedModal = () => {
        setShowEmbedModal(false);
    }

    return( <ModalContext.Provider value={{
        showShareModal,
        showEmbedModal,
        handleShareClick,
        handleCloseShareModal,
        handleEmbedClick,
        handleCloseEmbedModal
    }}>
        {children}
    </ModalContext.Provider>
    )
}
export default ModalContext