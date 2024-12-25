import React, { useState, useEffect, useRef } from 'react';
import "./FeedbackModal.css";
import H1 from '../h1/H1';

const FeedbackModal = ({ show, handleClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const modalRef = useRef(null);
    let from;
    if (typeof window !== 'undefined') {
        from = window.location.hash;
    }
    
    const minutesToWait = 15;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const lastSent = localStorage.getItem("contactLastSentMin");
        if (lastSent && Math.round((new Date() - new Date(lastSent)) / 60000) < minutesToWait) {
            setErrorMessage("You need to wait some time before you can send an email again.");
            return;
        }

        const formData = new FormData(event.target);
        formData.set('entry.599192843', from);

        const formAction = "https://docs.google.com/forms/d/199XGBJpGUvv6za8yPYybuYdf6qHqTaWjpjuNyX-wsfY/formResponse";

        try {
            await fetch(formAction, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });
            setIsSubmitted(true);
            localStorage.setItem("contactLastSentMin", new Date().toString());
            setTimeout(() => {
                handleClose();
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("There was a problem submitting your form.");
        }
    };

    const handleClickOutside = (event) => {
        /*if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }*/
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [show]);

    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content" ref={modalRef}>
                <H1>Let us know</H1>
                <p className="modal-description">Have you encountered an error or missing information on this page? Please fill out the form below. Leave us an email if you want a response.</p>
                {isSubmitted && <p className="modal-description message-success">Successfully sent. I will get to your email soon.</p>}
                {errorMessage && <p className="modal-description message-error">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="entry.599192843" value={from} />
                    <div className="form-group">
                        <label htmlFor="email" className="modal-description">Email:</label>
                        <input type="email" id="email" name="entry.1694799912" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="modal-description">Message: *</label>
                        <textarea id="message" name="entry.1554266932" required></textarea>
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn-close" onClick={handleClose}>Close</button>
                        <button type="submit" className="btn-submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;
