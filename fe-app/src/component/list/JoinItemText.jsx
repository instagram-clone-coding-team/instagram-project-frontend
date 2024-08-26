import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

function JoinItemText({ formValues, onChange }) {
  const items = [
    ['text', '휴대폰 번호 또는 이메일 주소', 'id'],
    ['text', '성명', 'fullName'],
    ['text', '사용자 이름', 'username'],
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

export default JoinItemText;