import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  return (
    <div className="app-container">
      <Sidebar 
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <main className="main-content">
        {activeMenuItem === 'dashboard' && <Dashboard />}
        {/* Add other views here based on menu selection */}
      </main>
    </div>
  );
}

export default App;