import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 268.67px;
`;

const TextInputFont = css`
  color: black;
  font-size: 12.3px;
  user-select: none;
`;

const StyledText = styled.input`
  ${TextInputFont}

  width: 100%;
  height: 37.33px;
  padding: ${(props) => (props.hasText ? '14px 0px 2px 8px' : '14px 0px 14px 8px')};

  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: rgb(168, 168, 168);
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-15px);
    font-size: 10px;
    color: rgb(115, 115, 115);
  }
`;

const Placeholder = styled.label`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: rgb(115, 115, 115);
  pointer-events: none;
  transition: all 0.3s ease;
`;

function TextInput({ placeholder }) {
  const [value, setValue] = useState('');

  return (
    <Container>
      <StyledText
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        hasText={value.length > 0}
        placeholder=""
      />
      <Placeholder>{placeholder}</Placeholder>
    </Container>
  );
}

export default TextInput;