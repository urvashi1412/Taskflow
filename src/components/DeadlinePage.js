// src/components/DeadlinePage.jsx
import React from 'react';
import { Plus, Trash2, AlertTriangle } from 'lucide-react';

const DeadlinePage = ({ deadlines, setDeadlines, newDeadline, setNewDeadline, addDeadline, getDaysUntil, setCurrentPage, pageTitle }) => (
  <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{pageTitle}</h1>
        <button onClick={() => setCurrentPage('home')} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Back to Home
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Deadline</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Deadline title..."
            value={newDeadline.title}
            onChange={(e) => setNewDeadline({...newDeadline, title: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            value={newDeadline.date}
            onChange={(e) => setNewDeadline({...newDeadline, date: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Description (optional)..."
            value={newDeadline.description}
            onChange={(e) => setNewDeadline({...newDeadline, description: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
          />
          <button onClick={addDeadline} className="px-6 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Deadline
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {deadlines.map(deadline => {
          const daysUntil = getDaysUntil(deadline.date);
          return (
            <div key={deadline.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{deadline.title}</h3>
                  {deadline.description && <p className="text-gray-600 mb-2">{deadline.description}</p>}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">Due: {new Date(deadline.date).toLocaleDateString()}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      daysUntil < 0 ? 'bg-red-100 text-red-600' :
                      daysUntil <= 3 ? 'bg-orange-100 text-orange-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {daysUntil < 0 ? `${Math.abs(daysUntil)} days overdue` :
                        daysUntil === 0 ? 'Due today' :
                        `${daysUntil} days left`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {daysUntil <= 3 && daysUntil >= 0 && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                  <button onClick={() => setDeadlines(deadlines.filter(d => d.id !== deadline.id))} className="text-red-500 hover:text-red-700 p-2">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {deadlines.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No deadlines yet. Add your first deadline above!
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DeadlinePage;
