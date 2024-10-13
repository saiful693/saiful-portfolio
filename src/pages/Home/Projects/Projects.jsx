import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import niqah1 from "../../../assets/niqah1.png";
import niqah2 from "../../../assets/niqah2.png";
import niqah3 from "../../../assets/niqah3.jpg";
import job1 from "../../../assets/job1.jpg"
import job2 from "../../../assets/job2.jpg"
import job3 from "../../../assets/job3.jpg"
import bistro1 from "../../../assets/bistroo1.jpg"
import bistro2 from "../../../assets/bistroo2.jpg"
import bistro3 from "../../../assets/bistroo3.jpg"
import SectionTitle from "../../../components/SectionTitle";

const Projects = () => {
  return (
    <div className="my-10">
      <SectionTitle subHeading="My work" mainHeading="Projects"></SectionTitle>

      <p className="my-2 ml-10">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      {/* 1st project */}
      <div className="card bg-gray-900 shadow-xl rounded-lg p-6 m-4">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-4">Niqah</h3>

        {/* Image Portfolio Section */}
        <div className="image-portfolio grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Project Screenshot 1 */}
          <div className="relative">
            <img
              src={niqah1}
              alt="Project Screenshot 1"
              className="rounded-lg"
            />
          </div>
          {/* Project Screenshot 2 */}
          <div className="relative">
            <img
              src={niqah2}
              alt="Project Screenshot 2"
              className="rounded-lg"
            />
          </div>
          {/* Project Screenshot 3 */}
          <div className="relative">
            <img
              src={niqah3}
              alt="Project Screenshot 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 mt-4">
          Niqah is a MERN stack matrimony platform connecting users seeking
          marriage. It includes user and admin dashboards, profile management,
          biodata sorting, premium membership options, and a secure system for
          requesting and approving contact details via admin.
        </p>

        {/* Key Features Section */}
        <div className="key-features mt-4">
          <h4 className="text-white font-bold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>User profile creation and management</li>
            <li>Advanced search filters for partner selection</li>
            <li>Secure chat and messaging system</li>
            <li>Multi-step registration and user verification</li>
            <li>Responsive design with mobile support</li>
          </ul>
        </div>

        {/* Technologies Used */}
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

        {/* Links to Live Project and GitHub */}
        <div className="flex justify-between mt-6">
          {/* Live Link */}
          <a
            href="https://wedding-matrimony-e7eed.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:underline"
          >
            <FiExternalLink className="text-blue-400" />
            <span>Live Project</span>
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/saiful693/wedding-matrimony-client"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:underline"
          >
            <FaGithub className="text-white" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>

      {/* 2nd project */}
      <div className="card bg-gray-900 shadow-xl rounded-lg p-6 m-4">
  {/* Project Title */}
  <h3 className="text-2xl font-bold text-white mb-4">Job Finder</h3>

  {/* Image Portfolio Section */}
  <div className="image-portfolio grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {/* Project Screenshot 1 */}
    <div className="relative">
      <img
        src={job1}
        alt="Project Screenshot 1"
        className="rounded-lg"
      />
    </div>
    {/* Project Screenshot 2 */}
    <div className="relative">
      <img
        src={job2}
        alt="Project Screenshot 2"
        className="rounded-lg"
      />
    </div>
    {/* Project Screenshot 3 */}
    <div className="relative">
      <img
        src={job3}
        alt="Project Screenshot 3"
        className="rounded-lg"
      />
    </div>
  </div>

  {/* Project Description */}
  <p className="text-gray-300 mt-4">
    Job Finder is a platform built with the MERN stack that helps users find
    suitable job opportunities. It features job postings, filtering options,
    and allows users to apply for jobs directly through the platform.
  </p>

  {/* Key Features Section */}
  <div className="key-features mt-4">
    <h4 className="text-white font-bold mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-gray-300">
      <li>Search for jobs with advanced filters</li>
      <li>Save jobs to favorites</li>
      <li>Apply for jobs directly through the platform</li>
      <li>User profile and resume management</li>
      <li>Responsive design with mobile support</li>
    </ul>
  </div>

  {/* Technologies Used */}
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

  {/* Links to Live Project and GitHub */}
  <div className="flex justify-between mt-6">
    {/* Live Link */}
    <a
      href="https://job-finder-7b3f1.web.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white hover:underline"
    >
      <FiExternalLink className="text-blue-400" />
      <span>Live Project</span>
    </a>
    {/* GitHub Link */}
    <a
      href="https://github.com/saiful693/job-finder-client"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white hover:underline"
    >
      <FaGithub className="text-white" />
      <span>GitHub Repository</span>
    </a>
  </div>
</div>

{/* project 3 */}
<div className="card bg-gray-900 shadow-xl rounded-lg p-6 m-4">
  {/* Project Title */}
  <h3 className="text-2xl font-bold text-white mb-4">Bistro Boss</h3>

  {/* Image Portfolio Section */}
  <div className="image-portfolio grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {/* Project Screenshot 1 */}
    <div className="relative">
      <img
        src={bistro1}
        alt="Project Screenshot 1"
        className="rounded-lg"
      />
    </div>
    {/* Project Screenshot 2 */}
    <div className="relative">
      <img
        src={bistro2}
        alt="Project Screenshot 2"
        className="rounded-lg"
      />
    </div>
    {/* Project Screenshot 3 */}
    <div className="relative">
      <img
        src={bistro3}
        alt="Project Screenshot 3"
        className="rounded-lg"
      />
    </div>
  </div>

  {/* Project Description */}
  <p className="text-gray-300 mt-4">
    Bistro Boss is a restaurant management system built with the MERN stack. It
    offers an intuitive interface for managing menus, orders, and customer
    feedback, making it easy for restaurant owners to streamline their
    operations.
  </p>

  {/* Key Features Section */}
  <div className="key-features mt-4">
    <h4 className="text-white font-bold mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-gray-300">
      <li>Menu management with easy updates</li>
      <li>Order tracking and processing</li>
      <li>Customer feedback and review system</li>
      <li>Admin dashboard with insights and analytics</li>
      <li>Responsive design for all devices</li>
    </ul>
  </div>

  {/* Technologies Used */}
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

  {/* Links to Live Project and GitHub */}
  <div className="flex justify-between mt-6">
    {/* Live Link */}
    <a
      href="https://bistro-boss-9a098.web.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white hover:underline"
    >
      <FiExternalLink className="text-blue-400" />
      <span>Live Project</span>
    </a>
    {/* GitHub Link */}
    <a
      href="https://github.com/your-repo"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white hover:underline"
    >
      <FaGithub className="text-white" />
      <span>GitHub Repository</span>
    </a>
  </div>
</div>

    </div>
  );
};

export default Projects;
