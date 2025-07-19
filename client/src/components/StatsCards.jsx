import React from 'react';

const StatsCards = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="stats">
            <div className="stat-card">
              <i className="fas fa-code-branch fa-2x" style={{ color: '#7e6fff' }}></i>
              <div className="stat-value">1,248</div>
              <div className="stat-label">Questions Solved</div>
            </div>
            <div className="stat-card">
              <i className="fas fa-language fa-2x" style={{ color: '#00d4ff' }}></i>
              <div className="stat-value">24</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2><i className="fas fa-fire" style={{ color: '#f59e0b' }}></i> Popular Topics</h2>
        </div>
        <div className="card-body">
          <ul style={{ listStyleType: 'none', lineHeight: '2.2' }}>
            <li><i className="fas fa-chevron-right" style={{ color: '#7e6fff', marginRight: '10px' }}></i> JavaScript Closures</li>
            <li><i className="fas fa-chevron-right" style={{ color: '#7e6fff', marginRight: '10px' }}></i> Python Decorators</li>
            <li><i className="fas fa-chevron-right" style={{ color: '#7e6fff', marginRight: '10px' }}></i> React Hooks</li>
            <li><i className="fas fa-chevron-right" style={{ color: '#7e6fff', marginRight: '10px' }}></i> Recursion Patterns</li>
            <li><i className="fas fa-chevron-right" style={{ color: '#7e6fff', marginRight: '10px' }}></i> Async/Await</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StatsCards;