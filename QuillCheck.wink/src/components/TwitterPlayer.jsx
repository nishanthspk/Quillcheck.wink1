// src/components/TwitterPlayer.jsx
import React from 'react';

const TwitterPlayer = () => {
    return (
        <div className="responsive-iframe">
            <iframe
                src="https://quillcheck-wink1.vercel.app/"
                title="Twitter Player"
                allowFullScreen
                frameBorder="0"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default TwitterPlayer;
