"use client";  // This line tells Next.js that this is a Client Component

import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const QuestionAnalysis = () => {
  // Example: Number of correct answers out of 15
  const correctAnswers = 12;
  const totalQuestions = 15;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="question-analysis p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Question Analysis</h2>
      <div className="flex items-center justify-center relative">
        <div className="w-32 h-32">
          <ProgressBar
            completed={percentage}
            height="10px"
            bgColor={percentage > 75 ? "#4CAF50" : percentage > 50 ? "#FFEB3B" : "#F44336"}
            width="100%"
//            style={{ borderRadius: "50%" }}
          />
          {/* Custom label inside the circle */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ fontSize: "16px", color: "#333" }}
          >
            {`${correctAnswers} / ${totalQuestions}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
