import React, { useState } from 'react';
import './App.css';
import Background from './Components/Background';
import Cac from './Components/Cac';
import Sidebar from './Components/SideBar';
function App() {
  const [visibleIds, setVisibleIds] = useState([]);

  const handleInView = (id) => {
    setVisibleIds(prevIds => {
      if (!prevIds.includes(id)) {
        return [...prevIds, id];
      }
      return prevIds;
    });
  };
  return (
    <div>
<img src='Cac_logo.png' alt='abc' className='image' />
<Sidebar visibleIds={visibleIds} />
<Cac id="About" onInView={handleInView} />
      <Background />
    </div>

  );
}

export default App;
