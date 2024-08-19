import React from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';

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