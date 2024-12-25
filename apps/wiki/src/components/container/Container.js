"use client";
import React, { useState } from 'react';
import "./Container.css";
import Tabs from '../tabs/Tabs';
import FeedbackModal from '../feedback-modal/FeedbackModal';

const Container = ({ children, basePath, tabs, selectedTab, pageName, selectBox }) => {
    const [showModal, setShowModal] = useState(false);

    const handleIconClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return <>
        <Tabs basePath={basePath} tabs={tabs} selectedTab={selectedTab} />
        <section className="section-header">
            <div className={`header-left ${!selectBox ? 'empty-selectbox' : ''}`}>{pageName}</div>
            <div className={`header-center ${!selectBox ? 'empty' : ''}`}>{selectBox}</div>
            <div className="header-right">
                <img src={"/shared/i_icon.webp"} alt="Info Icon" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
            </div>
        </section>
        <section className="section-body">
            <div className="content-section">{children}</div>
        </section>
        <FeedbackModal show={showModal} handleClose={handleCloseModal} />
    </>
}

export default Container;
