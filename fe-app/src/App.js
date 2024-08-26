import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./component/page/LandingPage";
import JoinPage from "./component/page/JoinPage";
import LoginPage from "./component/page/LoginPage";
import FindPasswordPage from "./component/page/FindPasswordPage";

import { useEffect } from "react";
import axios from "axios"; // 통신 테스트

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/signup")
      .then((response) => {
        console.log("연결완료" + response.data);
      })
      .catch((e) => {
        console.error("에러발생. 에러발생.", e);
      });
  }, []);

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
