// src/components/StudyPage.jsx
import React from 'react';

const StudyPage = ({ setCurrentPage, studyTechniques, pageTitle }) => {
  return (
    <div className="min-h-screen bg-surface font-modern p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">{pageTitle}</h1>
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center bg-surface border border-border text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition text-base font-semibold"
          >
            Home
          </button>
        </div>

        <div className="space-y-6">
          {studyTechniques.map((technique, index) => (
            <div key={index} className="bg-card border border-border shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{technique.name}</h2>
              <p className="text-text-light mb-3">{technique.description}</p>
              <ol className="list-decimal list-inside text-text space-y-1 mb-4">
                {technique.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              {technique.name === 'Pomodoro Technique' && (
                <button
                    onClick={() => setCurrentPage('pomodoro')}
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark text-sm font-semibold"
                >
                    Try Pomodoro Timer →
                </button>
                )}
            
            {technique.name === 'Active Recall' && (
                <button
                    onClick={() => setCurrentPage('recall')}
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark text-sm font-semibold"
                >
                    Try Active Recall →
                </button>
                )}

            {technique.name === 'Spaced Repetition' && (
                    <button
                        onClick={() => setCurrentPage('repetition')}
                        className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark text-sm font-semibold"
                    >
                        Practice Spaced Repetition →
                    </button>
                    )}
                    {technique.name === 'Mind Mapping' && (
                    <button
                        onClick={() => setCurrentPage('draw')}
                        className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark text-sm font-semibold"
                    >
                        Open Drawing Canvas ✏️
                    </button>
                    )}
                    {technique.name === 'Eisenhower Matrix' && (
  <button
    onClick={() => setCurrentPage('eisenhower')}
    className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark text-sm font-semibold"
  >
    Try Eisenhower Matrix →
  </button>
)}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
