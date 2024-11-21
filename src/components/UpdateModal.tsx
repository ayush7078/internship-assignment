"use client";

import { useState } from "react";
import { FaHtml5, FaChartLine, FaMedal } from "react-icons/fa";

export default function UpdateModal({
  onClose,
  onSave,
  defaultRank,
  defaultPercentile,
  defaultScore,
}: {
  onClose: () => void;
  onSave: (rank: string, percentile: string, score: string) => void;
  defaultRank: string;
  defaultPercentile: string;
  defaultScore: string;
}) {
  const [rank, setRank] = useState(defaultRank);
  const [percentile, setPercentile] = useState(defaultPercentile);
  const [score, setScore] = useState(defaultScore);

  const handleSave = () => {
    if (!rank || !percentile || !score) {
      alert("All fields are required!");
      return;
    }
    onSave(rank, percentile, score);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3 relative">
        <FaHtml5 className="text-red-600 text-3xl absolute top-4 right-4" />
        <h2 className="text-xl font-bold mb-4">Update Scores</h2>
        <div>
          <label className="block mb-2">Update Your Rank:</label>
          <div className="flex items-center mb-2">
            <FaMedal className="text-yellow-500 mr-2" />
            <input
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Update Your Percentile:</label>
          <div className="flex items-center mb-2">
            <FaChartLine className="text-green-500 mr-2" />
            <input
              type="text"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Update Your Current Score (out of 15):</label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
