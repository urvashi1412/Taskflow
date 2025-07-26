import React, { useState } from 'react';

const ActiveRecall = ({ setCurrentPage }) => {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showAnswers, setShowAnswers] = useState({});

  const addCard = () => {
    if (!question.trim() || !answer.trim()) return;
    setCards([...cards, { id: Date.now(), question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-green-800">📖 Active Recall Practice</h1>
          <button
            onClick={() => setCurrentPage('study')}
            className="px-4 py-2 bg-green-200 hover:bg-green-300 text-green-900 rounded-lg"
          >
            ⬅ Back
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Add Study Card</h2>
          <input
            type="text"
            placeholder="Enter a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg mb-3"
          />
          <textarea
            placeholder="Enter the answer..."
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
              {showAnswers[card.id] ? (
                <p className="text-green-700">A: {card.answer}</p>
              ) : (
                <button
                  onClick={() => toggleAnswer(card.id)}
                  className="text-sm text-green-600 underline"
                >
                  Show Answer
                </button>
              )}
            </div>
          ))}
          {cards.length === 0 && (
            <p className="text-center text-green-500">🧠 No cards yet. Start practicing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveRecall;
