// VideoModal.jsx
import React from "react";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  console.log("data", videoSrc);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative w-full max-w-2xl p-4">
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          &times; {/* Close icon */}
        </button>
        <video className="w-full rounded-lg" src={videoSrc} controls autoPlay />
      </div>
    </div>
  );
};

export default VideoModal;
