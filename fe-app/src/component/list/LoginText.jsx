import React from "react";
import styled from "styled-components";
import TextInput from "../ui/TextInput";

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  width: 100%;
`;

function LoginText(props) {
  return (
    <TextBox>
      <TextInput
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <TextInput
        placeholder="비밀번호"
      />
    </TextBox>
  )
}

export default LoginText;