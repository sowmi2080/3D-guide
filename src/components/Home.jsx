import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Fitness Track</h1>
      <div className="nav-buttons">
        <button onClick={() => navigate('/exercise')}>3D Exercise Guide</button>
        <button onClick={() => navigate('/calculator')}>Fitness Calculator</button>
      </div>
    </div>
  );
}

export default Home;
