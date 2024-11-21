"use client";

import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import UpdateModal from "./UpdateModal";
import QuickStatistics from "./QuickStatistics";

export default function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("1"); // Default Rank
  const [percentile, setPercentile] = useState("30"); // Default Percentile
  const [score, setScore] = useState("12/15"); // Default Score

  const handleSave = (updatedRank: string, updatedPercentile: string, updatedScore: string) => {
    setRank(updatedRank);
    setPercentile(updatedPercentile);
    setScore(updatedScore);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaHtml5 className="text-red-600 text-3xl mr-2" />
          <h2 className="text-xl font-bold">HTML Test Score</h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>
      <span style={{ marginLeft: "10px" }}>
        Question: 10 | Duration: 30 mins | Submitted on 5 June 2021
      </span>
      {isModalOpen && (
        <UpdateModal
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
          defaultRank={rank}
          defaultPercentile={percentile}
          defaultScore={score}
        />
      )}
      <QuickStatistics rank={rank} percentile={percentile} score={score} />
    </div>
  );
}
