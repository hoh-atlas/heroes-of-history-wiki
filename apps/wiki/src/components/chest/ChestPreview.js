import React, { useState } from "react";
import "./ChestPreview.css";
import H1 from "../h1/H1";
import "../feedback-modal/FeedbackModal.css";
import ChestDetails from "./ChestDetails";

const ChestPreview = (props) => {

    const chest = props.chest;

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <img 
                src={chest.img} 
                alt="Chest" 
                className="chest-image" 
                onClick={handleOpenModal} 
                style={{ maxHeight: '24px', cursor: 'pointer', verticalAlign: 'bottom' }} 
            />

            {showModal && (
                <div className="modal-backdrop" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <H1>{chest.name}</H1>
                        <ChestDetails chest={chest} />
                        <div className="modal-actions">
                            <button className="btn-close" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChestPreview;
