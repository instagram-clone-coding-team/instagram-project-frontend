import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

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