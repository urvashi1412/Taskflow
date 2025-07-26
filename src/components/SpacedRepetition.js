import React, { useState } from 'react';

const levels = ['Today', 'Tomorrow', 'Later'];

const SpacedRepetition = ({ setCurrentPage }) => {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addCard = () => {
    if (!question.trim() || !answer.trim()) return;
    setCards([...cards, { id: Date.now(), question, answer, level: 0 }]);
    setQuestion('');
    setAnswer('');
  };

  const promoteCard = (id) => {
    setCards(cards.map(card =>
      card.id === id
        ? { ...card, level: Math.min(card.level + 1, levels.length - 1) }
        : card
    ));
  };

  const resetCard = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, level: 0 } : card
    ));
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-800">📅 Spaced Repetition Practice</h1>
          <button
            onClick={() => setCurrentPage('study')}
            className="px-4 py-2 bg-green-200 hover:bg-green-300 text-green-900 rounded-lg"
          >
            ⬅ Back
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Add New Card</h2>
          <input
            type="text"
            placeholder="Enter question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg mb-3"
          />
          <textarea
            placeholder="Enter answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg mb-4"
          />
          <button
            onClick={addCard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            ➕ Add Card
          </button>
        </div>

        <div className="grid gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-green-300">
              <p className="font-semibold text-green-800 mb-2">Q: {card.question}</p>
              <p className="text-green-700 mb-2">A: {card.answer}</p>
              <p className="text-sm text-green-600 mb-2">📌 Level: <strong>{levels[card.level]}</strong></p>
              <div className="flex gap-2">
                <button
                  onClick={() => promoteCard(card.id)}
                  className="bg-emerald-400 text-white px-3 py-1 rounded hover:bg-emerald-500"
                >
                  ✅ Remembered
                </button>
                <button
                  onClick={() => resetCard(card.id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  ❌ Forgot
                </button>
              </div>
            </div>
          ))}
          {cards.length === 0 && (
            <p className="text-center text-green-500">🧠 No cards yet. Start adding!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpacedRepetition;
