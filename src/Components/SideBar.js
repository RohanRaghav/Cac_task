// Sidebar.js
import React from 'react';

const Sidebar = ({ visibleIds }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        {visibleIds.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
