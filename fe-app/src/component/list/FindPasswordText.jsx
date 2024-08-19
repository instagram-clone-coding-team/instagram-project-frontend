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

function FindPasswordText(props) {
  const items = [
    ['text', '이메일, 전화번호, 사용자 이름'],
  ]
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

export default FindPasswordText;