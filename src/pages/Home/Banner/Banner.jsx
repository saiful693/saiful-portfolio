import React, { useState } from "react"; // Import useState
import bannerImg from "../../../assets/edited1.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import VideoModal from "../../VideoModal/VideoModal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoSrc =
    "https://drive.google.com/drive/u/1/folders/1jnU6DrQASHV-AY8zZYHTe9FFBQ8LPyjg";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" hero bg-[#252734] min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="flex gap-4 justify-between items-center  w-full max-w-6xl">
        <div className="flex-1 w-2/5 text-center lg:text-left lg:pl-8">
          <h1 className="text-5xl font-bold text-white">
            Hello! I’m <span>Saiful Islam</span>
          </h1>
          <p className="py-6 text-white">
            I'm a passionate MERN stack developer, building modern web
            applications with React, Node.js, MongoDB, and Express. Let's work
            together to create intuitive and responsive solutions.
          </p>
          <div className="flex items-center gap-8">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="btn btn-outline px-3 text-white font-semibold rounded-2xl"
            >
              Get Resume <MdOutlineFileDownload className="text-xl" />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={handleOpenModal} // Open modal on click
                className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <CiPlay1 className="text-xl transition-transform duration-300 transform hover:scale-125" />
                <span className="transition-transform duration-300 transform hover:scale-110">
                  Watch Video
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex-1 lg:max-w-md max-w-xs h-[300px] lg:h-[400px]">
          <div className="absolute bottom-[-50px] left-0 right-0">
            <img
              src={bannerImg}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              alt="Banner"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={videoSrc} // Pass the video source
      />
    </div>
  );
};

export default Banner;
