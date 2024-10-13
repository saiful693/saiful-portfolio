import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HireMe = () => {
  return (
    <div className="bg-[#252734] py-16 px-6 lg:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Why Hire Me?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Expert in MERN Stack</h3>
          <p className="text-gray-400">
            I specialize in building dynamic, full-stack web applications using
            MongoDB, Express, React, and Node.js. I deliver scalable and
            efficient solutions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Responsive Design</h3>
          <p className="text-gray-400">
            I create responsive and user-friendly interfaces that adapt to any
            device, providing an optimal user experience across all platforms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Clean & Efficient Code</h3>
          <p className="text-gray-400">
            My coding style follows best practices, ensuring clean,
            maintainable, and efficient code that is easy to scale and debug.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Team Collaboration</h3>
          <p className="text-gray-400">
            I thrive in collaborative environments and communicate effectively
            with team members to meet project goals and deadlines.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Problem Solving</h3>
          <p className="text-gray-400">
            I excel at identifying challenges and providing innovative solutions
            to technical issues, ensuring seamless functionality.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaCheckCircle className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
          <p className="text-gray-400">
            I'm committed to staying updated with the latest technologies and
            trends to deliver cutting-edge web development solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
