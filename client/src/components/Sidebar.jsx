import React from 'react';

const Sidebar = ({ activeMenuItem, setActiveMenuItem }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', text: 'Dashboard' },
    { id: 'history', icon: 'fas fa-history', text: 'History' },
    { id: 'tutorials', icon: 'fas fa-book', text: 'Tutorials' },
    { id: 'playground', icon: 'fas fa-code', text: 'Playground' },
    { id: 'settings', icon: 'fas fa-cog', text: 'Settings' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-robot"></i>
        </div>
        <div className="logo-text">Code Mentor AI</div>
      </div>
      
      <div className="sidebar-menu">
        {menuItems.map(item => (
          <div 
            key={item.id}
            className={`menu-item ${activeMenuItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenuItem(item.id)}
          >
            <i className={item.icon}></i>
            <span className="menu-text">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <p>Code Mentor AI v2.0</p>
        <p>Powered by Gemini API</p>
      </div>
    </div>
  );
};

export default Sidebar;