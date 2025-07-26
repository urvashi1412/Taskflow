// src/components/DrawingTool.jsx
import React, { useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const canvasStyles = {
  border: '2px dashed #94d3ac',
  borderRadius: '12px',
  width: '100%',
  height: '400px',
};

const DrawingTool = ({ setCurrentPage }) => {
  const canvasRef = useRef(null);

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleRedo = () => {
    canvasRef.current.redo();
  };

  const handleExportImage = async () => {
    const dataUrl = await canvasRef.current.exportImage('png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'drawing.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-6 font-[Comic Sans MS,'Patrick Hand',cursive]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-emerald-800">🎨 Drawing Board</h1>
          <button
            onClick={() => setCurrentPage('study')}
            className="bg-emerald-300 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg"
          >
            ⬅ Back
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <ReactSketchCanvas
            ref={canvasRef}
            style={canvasStyles}
            strokeWidth={4}
            strokeColor="#10b981" // Emerald green
          />

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <button
              onClick={handleUndo}
              className="px-4 py-2 bg-emerald-200 hover:bg-emerald-300 text-emerald-800 rounded-lg"
            >
              🔄 Undo
            </button>
            <button
              onClick={handleRedo}
              className="px-4 py-2 bg-emerald-200 hover:bg-emerald-300 text-emerald-800 rounded-lg"
            >
              🔁 Redo
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-200 hover:bg-red-300 text-red-700 rounded-lg"
            >
              🧹 Clear
            </button>
            <button
              onClick={handleExportImage}
              className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-800 rounded-lg"
            >
              💾 Save Drawing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingTool;
