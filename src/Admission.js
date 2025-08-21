import React from 'react';

function Admission() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admissions Open 2025–26</h1>
      <p className="text-gray-700 mb-4">
        We welcome applications for Nursery to Class XII. Admission is based on merit and interaction.
      </p>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Admission Process</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fill online/offline admission form.</li>
          <li>Submit required documents.</li>
          <li>Attend interaction/test (if applicable).</li>
          <li>Confirm admission by paying fees.</li>
        </ul>
      </div>
    </div>
  );
}

export default Admission;
