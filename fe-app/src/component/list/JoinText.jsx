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

function JoinText(props) {
  return (
    <TextBox>
      <TextInput
        placeholder="휴대폰 번호 또는 이메일 주소"
      />
      <TextInput
         placeholder="성명"
      />
      <TextInput
        placeholder="사용자 이름"
      />
      <TextInput
        placeholder="비밀번호"
      />
    </TextBox>
  )
}

export default JoinText;