import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Configuration from '../src/students/Configuration';
import Ranking from '../src/students/Ranking';
import Calendar from '../src/students/Calendar';
import Results from '../src/students/Results';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={< Dashboard />} />
        <Route path="configuration" element={<Configuration/>} />
        <Route path="ranking" element={<Ranking/>} />
        <Route path="calendar" element={<Calendar/>} />
        <Route path="results" element={<Results/>} />
        
      </Routes>
    </>
  );
}

export default App;
