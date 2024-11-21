import React from "react";

const SyllabusAnalysis = () => {
  return (
    <div className="syllabus-analysis p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
      
      {/* HTML Tools, Forms, History */}
      <div className="syllabus-section mb-4">
        <h3 className="font-semibold text-lg">1. HTML Tools, Forms, History</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
        </div>
      </div>

      {/* Tags and References in HTML */}
      <div className="syllabus-section mb-4">
        <h3 className="font-semibold text-lg">2. Tags and References in HTML</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* Tables and References in HTML */}
      <div className="syllabus-section mb-4">
        <h3 className="font-semibold text-lg">3. Tables and References in HTML</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "24%" }}></div>
        </div>
      </div>

      {/* CSS Basics */}
      <div className="syllabus-section mb-4">
        <h3 className="font-semibold text-lg">4. CSS Basics</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "96%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
