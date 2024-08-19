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
  const items = [
    ['text', '전화번호, 사용자 이름 또는 이메일'],
    ['password', '비밀번호'],
  ];
  
  return (
    <TextBox>
      {items.map(([type, placeholder], index) => (
        <TextInput
          type={type}
          placeholder={placeholder}
        />
      ))}
    </TextBox>
  )
}

export default LoginText;