import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trash2 } from 'lucide-react';

const ToDoPage = ({ tasks, setTasks, newTask, setNewTask, addTask, toggleTaskDone, deleteTask, setCurrentPage, pageTitle }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.done;
    if (filter === 'pending') return !task.done;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') return a.priority.localeCompare(b.priority);
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  const progress = tasks.length ? (tasks.filter(t => t.done).length / tasks.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-surface font-modern p-10">
      <div className="max-w-5xl mx-auto">
        {/* Sober Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">{pageTitle}</h1>
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center bg-surface border border-border text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition text-base font-semibold"
          >
            Home
          </button>
        </div>
        {/* Sober Add Task */}
        <div className="bg-card border border-border shadow-sm rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Add a New Task</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newTask.title || ''}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="p-3 border border-border rounded"
            />
            <input
              type="date"
              value={newTask.dueDate || ''}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              className="p-3 border border-border rounded"
            />
            <select
              value={newTask.priority || 'Low'}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              className="p-3 border border-border rounded"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              value={newTask.description || ''}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="p-3 border border-border rounded"
            />
          </div>
          <button
            onClick={() => {
              if (newTask.title && newTask.dueDate) {
                addTask();
              }
            }}
            className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark text-base font-semibold"
          >
            Add Task
          </button>
        </div>
        {/* Sober Filter + Sort */}
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2 text-sm">
            <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-primary text-white' : 'bg-surface text-primary'} border border-border`}>All</button>
            <button onClick={() => setFilter('pending')} className={`px-3 py-1 rounded ${filter === 'pending' ? 'bg-accent text-white' : 'bg-surface text-accent'} border border-border`}>Pending</button>
            <button onClick={() => setFilter('done')} className={`px-3 py-1 rounded ${filter === 'done' ? 'bg-secondary text-white' : 'bg-surface text-secondary'} border border-border`}>Completed</button>
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-border p-2 rounded text-sm">
            <option value="date">Sort by Due Date</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>
        {/* Sober Progress */}
        <div className="mb-4">
          <p className="text-sm text-primary mb-1">Progress: {Math.round(progress)}%</p>
          <div className="w-full h-2 bg-surface rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        {/* Sober Task List */}
        <div className="space-y-4">
          {sortedTasks.map(task => (
            <div key={task.id} className="bg-card border border-border rounded shadow-sm p-4 flex justify-between items-start">
              <div>
                <h3 className={`text-lg font-semibold ${task.done ? 'line-through text-text-light' : 'text-text'}`}>{task.title}</h3>
                <p className="text-sm text-text-light">{task.description}</p>
                <p className="text-sm mt-1 text-secondary">Due: {task.dueDate}</p>
                <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium border border-border
                  ${task.priority === 'High' ? 'bg-primary text-white' :
                    task.priority === 'Medium' ? 'bg-accent text-white' :
                      'bg-surface text-primary'}`}>
                  {task.priority} Priority
                </span>
              </div>
              <div className="space-x-2 flex-shrink-0">
                <button onClick={() => toggleTaskDone(task.id)} className="text-accent hover:text-primary">{task.done ? '↩️' : '✔️'}</button>
                <button onClick={() => deleteTask(task.id)} className="text-primary-dark hover:text-primary">🗑️</button>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="text-center text-text-light italic mt-6">No tasks added yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
