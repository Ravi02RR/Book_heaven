// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Model = ({ previewLink, closeModal }) => {
    return (
        <>
            <div className="modal">
                <div className="modal-box">
                    <button className="btn btn-clear float-right" aria-label="Close" onClick={closeModal}></button>
                    <h3 className="font-bold text-lg">Book Preview</h3>
                    <iframe title="Book Preview" src={previewLink} width="100%" height="500" frameBorder="0"></iframe>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;
