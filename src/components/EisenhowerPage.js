// src/components/EisenhowerPage.jsx
import React, { useState } from 'react';

const quadrants = [
  { title: "Do First", description: "Urgent & Important", key: "do" },
  { title: "Schedule", description: "Not Urgent & Important", key: "schedule" },
  { title: "Delegate", description: "Urgent & Not Important", key: "delegate" },
  { title: "Eliminate", description: "Not Urgent & Not Important", key: "eliminate" },
];

const EisenhowerPage = ({ setCurrentPage }) => {
  const [tasks, setTasks] = useState({
    do: [],
    schedule: [],
    delegate: [],
    eliminate: []
  });

  const [newTask, setNewTask] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState('do');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks({
      ...tasks,
      [selectedQuadrant]: [...tasks[selectedQuadrant], newTask]
    });
    setNewTask('');
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-6 font-[Comic Sans MS, 'Patrick Hand', cursive]">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-700">🧠 Eisenhower Matrix</h1>
          <button
            onClick={() => setCurrentPage('study')}
            className="px-4 py-2 bg-emerald-300 text-white rounded-lg hover:bg-emerald-400"
          >
            Back
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-emerald-600">Add a Task</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Task description"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 px-4 py-2 border border-emerald-300 rounded-lg"
            />
            <select
              value={selectedQuadrant}
              onChange={(e) => setSelectedQuadrant(e.target.value)}
              className="px-3 py-2 border border-emerald-300 rounded-lg"
            >
              {quadrants.map((q) => (
                <option value={q.key} key={q.key}>{q.title}</option>
              ))}
            </select>
            <button
              onClick={addTask}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quadrants.map((q) => (
            <div key={q.key} className="bg-emerald-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">{q.title}</h3>
              <p className="text-sm text-emerald-700 italic mb-3">{q.description}</p>
              <ul className="list-disc list-inside text-emerald-900 space-y-1">
                {tasks[q.key].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EisenhowerPage;
