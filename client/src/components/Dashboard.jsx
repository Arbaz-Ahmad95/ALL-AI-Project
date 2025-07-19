import React, { useState } from 'react';
import StatsCards from './StatsCards';
import InputSection from './InputSection';
import OutputSection from './OutputSection';

const Dashboard = () => {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResponse = (response, error = null) => {
    setIsLoading(false);
    if (error) {
      setError(error);
      setOutput('');
    } else {
      setError(null);
      setOutput(response);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Coding Instructor AI</h1>
        <div className="user-controls">
          <button className="btn">
            <i className="fas fa-moon"></i>
            <span>Dark Mode</span>
          </button>
          <button className="btn">
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </button>
        </div>
      </div>
      
      <div className="dashboard">
        <StatsCards />
        
        <InputSection 
          onResponse={handleResponse}
          setIsLoading={setIsLoading}
        />
        
        <OutputSection 
          output={output}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Dashboard;