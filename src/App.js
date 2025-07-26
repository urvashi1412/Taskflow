import React, { useState } from 'react';
import ToDoPage from './components/ToDoPage';
import StudyPage from './components/StudyPage';
import DeadlinePage from './components/DeadlinePage';
import Pomodoro from './components/Pomodoro';
import ActiveRecall from './components/ActiveRecall';
import SpacedRepetition from './components/SpacedRepetition';
import DrawingTool from './components/DrawingTool';
import EisenhowerPage from './components/EisenhowerPage';

function HomeButton({ setCurrentPage }) {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-card border border-primary text-primary rounded-full shadow-md p-4 transition-all text-xl hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      onClick={() => setCurrentPage('home')}
      aria-label="Go to Home"
    >
      🏠
    </button>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // To-Do states
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
  if (!newTask.title || newTask.title.trim() === '') return;

  setTasks([...tasks, { ...newTask, id: Date.now(), done: false }]);

  setNewTask({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });
};



  const toggleTaskDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Study techniques data
  const studyTechniques = [
    {
      name: 'Pomodoro Technique',
      description: 'Break work into focused 25-min sessions separated by short breaks.',
      steps: [
        'Pick a task to work on.',
        'Set a timer for 25 minutes.',
        'Work until the timer rings.',
        'Take a 5-minute break.',
        'Every 4 sessions, take a longer break.'
      ]
    },
    {
      name: 'Active Recall',
      description: 'Actively retrieve information to strengthen memory.',
      steps: [
        'Read a topic briefly.',
        'Hide the material.',
        'Write/say what you remember.',
        'Check for accuracy.',
        'Repeat periodically.'
      ]
    },
    {
      name: 'Spaced Repetition',
      description: 'Review material at increasing intervals to retain longer.',
      steps: [
        'Study a topic.',
        'Review the next day.',
        'Review after 3 days, 1 week, 2 weeks...',
        'Use a spaced repetition app or cards.',
        'Stick to a schedule.'
      ]
    },
    {
      name: 'Mind Mapping',
      description: 'Visualize ideas and connections in a tree structure.',
      steps: [
        'Start with a central idea.',
        'Branch sub-topics outward.',
        'Add keywords/images.',
        'Use colors to group related ideas.',
        'Review the whole map.'
      ]
    },
    {
      name: 'Eisenhower Matrix',
      description: 'The Eisenhower Matrix helps you decide on and prioritize tasks by urgency and importance, sorting out less urgent and important tasks which you should either delegate or not do at all.',
      steps: [
        'List all your tasks.',
        'Identify whether each task is urgent or not, and important or not.',
        'Place each task into one of the four quadrants:',
        '1. Urgent & Important → Do First',
        '2. Not Urgent but Important → Schedule It',
        '3. Urgent but Not Important → Delegate It',
        '4. Not Urgent & Not Important → Eliminate It',
        'Review the matrix daily or weekly and update tasks accordingly.'
      ]
    },
    {
      name: 'Feynman Technique',
      description: 'Teach concepts simply to understand deeply.',
      steps: [
        'Pick a topic.',
        'Explain it in simple terms.',
        'Find knowledge gaps.',
        'Re-learn and simplify again.',
        'Use analogies if needed.'
      ]
    },
    {
      name: 'Blurting',
      description: 'Recall everything you remember on a topic freely.',
      steps: [
        'Read a chapter/topic.',
        'Close the book.',
        'Write down everything you remember.',
        'Compare with notes.',
        'Repeat after some time.'
      ]
    },
    {
      name: 'SQ3R',
      description: 'Survey, Question, Read, Recite, Review method.',
      steps: [
        'Survey the material (titles, headings).',
        'Turn headings into questions.',
        'Read to find answers.',
        'Recite key points aloud.',
        'Review after a while.'
      ]
    },
    {
      name: 'Leitner System',
      description: 'Use flashcards with spaced repetition and boxes.',
      steps: [
        'Make flashcards.',
        'Start in Box 1 (review daily).',
        'Correct ones go to Box 2 (every 3 days), then Box 3 (weekly).',
        'Wrong ones move back to Box 1.',
        'Repeat regularly.'
      ]
    },
    {
      name: 'Interleaved Practice',
      description: 'Mix different topics while studying.',
      steps: [
        'Don’t study one subject too long.',
        'Switch between topics regularly.',
        'Compare and contrast ideas.',
        'Improve adaptability.',
        'Helps deeper understanding.'
      ]
    },
    {
      name: 'Cornell Notes',
      description: 'Divide page into cues, notes, and summary.',
      steps: [
        'Take notes in main section.',
        'Add questions in cue column.',
        'Summarize in the bottom section.',
        'Review using cues.',
        'Great for revision.'
      ]
    },
    {
      name: 'Visualization',
      description: 'Create mental images to understand topics.',
      steps: [
        'Read the material.',
        'Draw diagrams or mind pictures.',
        'Close eyes and imagine process or flow.',
        'Explain image to yourself.',
        'Enhances long-term memory.'
      ]
    }
  ];

  // Deadline states
  const [deadlines, setDeadlines] = useState([]);
  const [newDeadline, setNewDeadline] = useState({ title: '', date: '', description: '' });

  const addDeadline = () => {
    if (!newDeadline.title || !newDeadline.date) return;
    const newItem = {
      id: Date.now(),
      ...newDeadline
    };
    setDeadlines([...deadlines, newItem]);
    setNewDeadline({ title: '', date: '', description: '' });
  };

  const getDaysUntil = (date) => {
    const target = new Date(date);
    const now = new Date();
    return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  };

  // Home Page UI
  const HomePage = () => (
  <div className="min-h-screen bg-surface font-modern p-10 flex flex-col items-center justify-center">
    {/* Sober Title */}
    <h1 className="text-4xl font-bold text-primary mb-2 tracking-tight">TaskFlow</h1>
    <p className="text-lg text-text-light mb-10">Organize, focus, and achieve with clarity</p>
    {/* Sober Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
      <div
        className="bg-card border border-border shadow-sm p-6 rounded-lg hover:shadow-md transition cursor-pointer flex flex-col items-center"
        onClick={() => setCurrentPage('todo')}
      >
        <span className="text-2xl mb-2">📝</span>
        <h2 className="text-lg font-semibold text-primary mb-1">To-Do List</h2>
        <p className="text-sm text-text-light">Stay on top of your tasks</p>
      </div>
      <div
        className="bg-card border border-border shadow-sm p-6 rounded-lg hover:shadow-md transition cursor-pointer flex flex-col items-center"
        onClick={() => setCurrentPage('study')}
      >
        <span className="text-2xl mb-2">📚</span>
        <h2 className="text-lg font-semibold text-accent mb-1">Study Tricks</h2>
        <p className="text-sm text-text-light">Boost your learning</p>
      </div>
      <div
        className="bg-card border border-border shadow-sm p-6 rounded-lg hover:shadow-md transition cursor-pointer flex flex-col items-center"
        onClick={() => setCurrentPage('deadline')}
      >
        <span className="text-2xl mb-2">⏰</span>
        <h2 className="text-lg font-semibold text-secondary mb-1">Deadlines</h2>
        <p className="text-sm text-text-light">Never miss a due date</p>
      </div>
    </div>
    {/* Sober Footer */}
    <p className="mt-12 text-xs text-text-light">Productivity, beautifully done.</p>
  </div>
);

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'todo':
        return (
          <>
            <ToDoPage
              tasks={tasks}
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
              toggleTaskDone={toggleTaskDone}
              deleteTask={deleteTask}
              setCurrentPage={setCurrentPage}
              pageTitle="To-Do List"
            />
            <HomeButton setCurrentPage={setCurrentPage} />
          </>
        );
      case 'study':
        return (
          <>
            <StudyPage
              studyTechniques={studyTechniques}
              setCurrentPage={setCurrentPage}
              pageTitle="Study Tricks"
            />
            <HomeButton setCurrentPage={setCurrentPage} />
          </>
        );
      case 'deadline':
        return (
          <>
            <DeadlinePage
              deadlines={deadlines}
              newDeadline={newDeadline}
              setNewDeadline={setNewDeadline}
              addDeadline={addDeadline}
              getDaysUntil={getDaysUntil}
              setCurrentPage={setCurrentPage}
              setDeadlines={setDeadlines}
              pageTitle="Deadlines"
            />
            <HomeButton setCurrentPage={setCurrentPage} />
          </>
        );
        case 'pomodoro':
          return <><Pomodoro setCurrentPage={setCurrentPage} pageTitle="Pomodoro Timer" /><HomeButton setCurrentPage={setCurrentPage} /></>;

        case 'recall':
          return <><ActiveRecall setCurrentPage={setCurrentPage} pageTitle="Active Recall" /><HomeButton setCurrentPage={setCurrentPage} /></>;

          case 'repetition':
            return <><SpacedRepetition setCurrentPage={setCurrentPage} pageTitle="Spaced Repetition" /><HomeButton setCurrentPage={setCurrentPage} /></>;

          case 'draw':
  return <><DrawingTool setCurrentPage={setCurrentPage} pageTitle="Drawing Tool" /><HomeButton setCurrentPage={setCurrentPage} /></>;

          case 'eisenhower':
  return <><EisenhowerPage setCurrentPage={setCurrentPage} pageTitle="Eisenhower Matrix" /><HomeButton setCurrentPage={setCurrentPage} /></>;
          
                default:
                  return <HomePage />;
              }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;
