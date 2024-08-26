import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import JoinPage from './component/page/JoinPage';
import LoginPage from './component/page/LoginPage';
import FindPasswordPage from './component/page/FindPasswordPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/find/password" element={<FindPasswordPage />} />
    </Routes>
  );
}

export default App;
