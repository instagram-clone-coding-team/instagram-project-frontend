import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

function JoinText(props) {
  const items = [
    ['text', '휴대폰 번호 또는 이메일 주소'],
    ['text', '성명'],
    ['text', '사용자 이름'],
    ['password', '비밀번호'],
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

export default JoinText;