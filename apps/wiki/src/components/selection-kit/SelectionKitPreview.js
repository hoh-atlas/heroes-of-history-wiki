import React, { useState } from "react";
import "./SelectionKitPreview.css";
import H1 from "../h1/H1";
import "../feedback-modal/FeedbackModal.css";
import SelectionKitDetails from "./SelectionKitDetails";
import selectionKitsImages from "@/src/shared-resources/data/selectionKitsImages";

const SelectionKitPreview = (props) => {

    const selectionKit = props.selectionKit;

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
                src={selectionKitsImages[selectionKit.assetId]} 
                alt="Selection Kit" 
                className="selection-kit-image" 
                onClick={handleOpenModal} 
                style={{ maxHeight: '24px', cursor: 'pointer', verticalAlign: 'bottom' }} 
            />

            {showModal && (
                <div className="modal-backdrop" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <H1>{selectionKit.name}</H1>
                        <SelectionKitDetails selectionKit={selectionKit} />
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

export default SelectionKitPreview;
