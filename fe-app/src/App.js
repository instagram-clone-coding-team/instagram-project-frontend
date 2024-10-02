import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FindPasswordPage from "./component/page/FindPasswordPage";
import JoinPage from "./component/page/JoinPage";
import LandingPage from "./component/page/LandingPage";
import LoginPage from "./component/page/LoginPage";

import axios from "axios"; // 통신 테스트
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  
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
    <>
      {/* 서버에서 받은 데이터가 있다면 출력 */}
      {data && <div>서버에서 받은 데이터: {JSON.stringify(data)}</div>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find/password" element={<FindPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
