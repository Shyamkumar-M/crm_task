// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CombinedForm from './CombinedForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CombinedForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
