import React, { useState } from 'react';
import './LayoutsBook.css';
import ImageViewer from 'react-simple-image-viewer';
import H1 from '@/src/components/h1/H1';

const LayoutsBook = ({ images, header }) => {
  const [showModal, setShowModal] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="btn-layouts-container">
        <button className="btn-layouts" onClick={handleOpenModal}>
          {header} - Images
        </button>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content layouts-modal">
            <div className="modal-header">
              <H1>{header}</H1>
            </div>

            <div className="layouts-gallery">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => openImageViewer(index)}
                >
                  <img src={image} alt={`Sector ${index + 1}`} />
                  <p>{`Sector ${index + 1}`}</p>
                </div>
              ))}
            </div>

            <div className="modal-actions">
              <button className="btn-close-modal" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isViewerOpen && (
        <ImageViewer
          src={images.map((image) => image)}
          currentIndex={currentImageIndex}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: 'rgba(62,123,173,0.9)',
            zIndex: 3000,
          }}
        />
      )}
    </>
  );
};

export default LayoutsBook;
