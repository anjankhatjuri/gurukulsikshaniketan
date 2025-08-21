import React from 'react';

function Academics() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Academics</h1>
      <div className="space-y-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Primary (Nursery – Class V)</h2>
          <p className="text-gray-700">Focus on foundational learning, creativity, and moral values.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Middle (Class VI – VIII)</h2>
          <p className="text-gray-700">Integrated curriculum with emphasis on logic, language, and skills.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Secondary (Class IX – XII)</h2>
          <p className="text-gray-700">Specialization in Science, Commerce, and Arts with board exam preparation.</p>
        </div>
      </div>
    </div>
  );
}

export default Academics;
