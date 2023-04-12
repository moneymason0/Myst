import { useState, createContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showEmbedModal, setShowEmbedModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
    const handleReportClick = () => {
        setShowReportModal(true);
    }
    const handleCloseReportModal = () => {
        setShowReportModal(false);
    }
    const handleClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return( <ModalContext.Provider value={{
        showShareModal,
        showEmbedModal,
        handleShareClick,
        handleCloseShareModal,
        handleEmbedClick,
        handleCloseEmbedModal,
        showReportModal,
        handleReportClick,
        handleCloseReportModal,
        showModal,
        handleClick,
        handleCloseModal
    }}>
        {children}
    </ModalContext.Provider>
    )
}
export default ModalContext