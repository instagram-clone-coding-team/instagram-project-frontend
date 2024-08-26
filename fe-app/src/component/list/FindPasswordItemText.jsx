import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

function FindPasswordItemText({ formValues, onChange }) {
  const items = [
    ['text', '이메일, 전화번호, 사용자 이름', 'id'],
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

export default FindPasswordItemText;