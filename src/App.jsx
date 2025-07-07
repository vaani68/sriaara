import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Home from './Home';
import Sarees from './pages/Sarees';
import Dresses from './pages/Dresses';
import Sale from './pages/Sale';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    showSplash ? <Splash /> :
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </Router>
  );
}

export default App;
