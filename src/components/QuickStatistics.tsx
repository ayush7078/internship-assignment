"use client";

import { useState } from "react";

export default function QuickStatistics({ rank, percentile, score }: { rank: string, percentile: string, score: string }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Quick Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">
          <h3 className="font-bold">Your Rank</h3>
          <p>{rank}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h3 className="font-bold">Your Percentile</h3>
          <p>{percentile}</p>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded">
          <h3 className="font-bold">Your Score</h3>
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
}
