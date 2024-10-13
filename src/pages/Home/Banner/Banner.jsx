import React, { useState } from "react";
import bannerImg from "../../../assets/edited1.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
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
    <div className="hero bg-[#252734] min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center w-full max-w-6xl">
        <div className="flex-1 text-center lg:text-left lg:pl-8">
          <h1 className="text-5xl font-bold text-white">
            Hello! I’m <span className="text-blue-400">Saiful Islam</span>
          </h1>
          <p className="py-6 text-gray-300">
            I'm a passionate MERN stack developer, building modern web
            applications with React, Node.js, MongoDB, and Express. Let's work
            together to create intuitive and responsive solutions.
          </p>
          <div className="flex items-center gap-8 mt-4">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="flex items-center gap-2 border-2 border-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
            >
              Get Resume <MdOutlineFileDownload className="text-xl" />
            </button>

            <button
              onClick={handleOpenModal}
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              <CiPlay1 className="text-xl" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        <div className="relative flex-1 max-w-sm lg:max-w-md flex flex-col items-center">
          {/* Circle behind the image */}
          <div className="relative">
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-blue-500 flex items-center justify-center">
              {/* Profile Image */}
              <img
                src={bannerImg}
                className="w-3/4 h-3/4 object-cover rounded-full shadow-2xl"
                alt="Banner"
              />

              {/* Social Links on Circular Line */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 text-3xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={videoSrc}
      />
    </div>
  );
};

export default Banner;