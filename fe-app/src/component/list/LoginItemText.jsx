import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

function LoginItemText({ formValues, onChange }) {
  const items = [
    ['text', '전화번호, 사용자 이름 또는 이메일', 'id'],
    ['password', '비밀번호', 'password'],
  ];
  
  return (
    <TextBox>
      {items.map(([type, placeholder, field], index) => (
        <TextInput
          key={index}
          type={type}
          placeholder={placeholder}
          value={formValues[field]}
          onChange={(e) => onChange(field, e.target.value)}
        />
      ))}
    </TextBox>
  )
}

export default LoginItemText;