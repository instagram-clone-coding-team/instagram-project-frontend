import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JoinPage from './component/page/JoinPage';
import LoginPage from './component/page/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JoinPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
