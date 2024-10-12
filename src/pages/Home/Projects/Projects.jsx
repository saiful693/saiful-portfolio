import React from "react";
import SectionTitle from "../../../components/SectionTitle";

const Projects = () => {
  return (
    <div className="my-10">
      <SectionTitle subHeading="My work" mainHeading="Projects"></SectionTitle>

      <p>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      {/* 1st project */}
      <div className="card bg-gray-900 shadow-xl rounded-lg p-6 m-4">
        <div className="relative">
          <img
            src="https://example.com/project-image.jpg" // Replace with your project image
            alt="Niqah Project"
            className="rounded-lg"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            {/* Live Link */}
            <a
              href="https://example.com/live-project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              title="Live Project"
            >
              <i className="fas fa-external-link-alt text-white"></i>
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              title="GitHub Repository"
            >
              <i className="fab fa-github text-white"></i>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-white">Niqah</h3>
          <p className="text-gray-300 mt-2">
            Niqah is a platform designed to streamline the matchmaking process
            for Muslim communities. Users can create profiles, search for
            partners, and connect with each other while adhering to cultural and
            religious values.
          </p>
          <p className="text-gray-300 mt-2">
            Key Features: Profile creation, advanced search filters, chat
            functionality, and secure authentication.
          </p>
          <div className="mt-4">
            <p className="text-white font-bold">Technologies Used:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full">
                Express
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
