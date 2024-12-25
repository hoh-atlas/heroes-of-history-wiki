import React, { useState } from "react";
import "./CustomizationPreview.css";
import H1 from "../h1/H1";
import "../feedback-modal/FeedbackModal.css";
import CustomizationDetails from "./CustomizationDetails";

const CustomizationPreview = (props) => {

    const customization = props.customization;

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
                src={customization.img} 
                alt="Customization" 
                className="customization-image" 
                onClick={handleOpenModal} 
                style={{ maxHeight: '24px', cursor: 'pointer', verticalAlign: 'bottom' }} 
            />

            {showModal && (
                <div className="modal-backdrop" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <H1>{customization.name}</H1>
                        <CustomizationDetails customization={customization} />
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

export default CustomizationPreview;
