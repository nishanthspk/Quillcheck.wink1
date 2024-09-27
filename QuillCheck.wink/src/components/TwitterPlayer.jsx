// src/components/TwitterPlayer.jsx
import React from 'react';

const TwitterPlayer = () => {
    return (
        <div className="relative w-full pb-[56.25%]"> {/* Tailwind classes for responsive iframe */}
            <iframe
                src="https://quillcheck-wink1.vercel.app/"
                title="Twitter Player"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default TwitterPlayer;
