import React from "react";

const LiveMatchCard = ({ matchId, teamA, teamB, scoreA, scoreB, time }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">Match #{matchId}</span>
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
          Live
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{teamA} vs {teamB}</h3>
      <p className="text-sm text-gray-400 mb-4">{time}</p>
      <div className="flex justify-between text-lg font-bold">
        <span>{teamA}</span>
        <span className="text-yellow-400">{scoreA}</span>
        <span className="mx-2">:</span>
        <span className="text-yellow-400">{scoreB}</span>
        <span>{teamB}</span>
      </div>
    </div>
  );
};

export default LiveMatchCard;
