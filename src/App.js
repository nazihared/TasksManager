
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import TimelinePage from './pages/TimelinePage';
import { TaskProvider } from './context/TaskContext';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
