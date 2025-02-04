import React from "react";

export default function SubTitleContent() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sub Title</h2>
      <div className="space-y-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Add New Sub Title
        </button>
      </div>
    </div>
  );
}
