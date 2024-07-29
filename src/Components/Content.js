// App.js or your main component
import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './SideBar';

const Content = () => {
  const [visibleIds, setVisibleIds] = useState([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            setVisibleIds(prevIds => [...new Set([...prevIds, id])]);
          } else {
            setVisibleIds(prevIds => prevIds.filter(visibleId => visibleId !== id));
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Sidebar visibleIds={visibleIds} />
    </div>
  );
};

export default Content;
