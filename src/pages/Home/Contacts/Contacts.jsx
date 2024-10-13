import React from "react";
import SectionTitle from "../../../components/SectionTitle";

const Contacts = () => {
  return (
    <div className="mt-10">
      <SectionTitle
        subHeading="Get in touch"
        mainHeading=""
      ></SectionTitle>

      {/*  */}

      <div className="bg-gray-800 py-16 px-8 md:px-16 lg:px-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-gray-300 text-lg mb-10">
            I’d love to hear from you! Whether you have a question or just want
            to say hello, feel free to get in touch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Phone Number */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center hover:bg-blue-900 transition-all duration-300">
            <div className="text-white text-2xl font-semibold mb-4">Phone</div>
            <a
              href="tel:+1234567890"
              className="text-blue-400 text-lg hover:underline"
            >
              +8801883024024
            </a>
          </div>

          {/* Email */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center hover:bg-green-900 transition-all duration-300">
            <div className="text-white text-2xl font-semibold mb-4">Email</div>
            <a
              href="mailto:youremail@example.com"
              className="text-green-400 text-lg hover:underline"
            >
              bdsaiful770@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center hover:bg-indigo-900 transition-all duration-300">
            <div className="text-white text-2xl font-semibold mb-4">
              LinkedIn
            </div>
            <a
              href="www.linkedin.com/in/saiful-islam-735b2620b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 text-lg hover:underline"
            >
              www.linkedin.com/in/saiful-islam-735b2620b
            </a>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 text-center">
          <div className="inline-block h-1 w-40 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
