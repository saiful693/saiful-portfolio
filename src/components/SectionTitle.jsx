import React from "react";

const SectionTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="ml-10">
      <div className="flex gap-3 items-center">
        <div className="flex  gap-1">
          <div className="h-4 w-0.5 bg-gray-300"></div>
          <div className="h-4 w-0.5 bg-gray-300"></div>
        </div>
        <h4 className="text-gray-300 text-xl font-medium">{subHeading}</h4>
      </div>
      <div>
        <h1 className="mt-4 text-4xl font-semibold">{mainHeading}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
