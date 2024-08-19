import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0 12%;
  vertical-align: baseline;
  gap: 15px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Line = styled.hr`
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgb(219, 219, 219);
`;

const DividerText = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: rgb(115, 115, 115);

  background: rgb(255, 255, 255);
  padding: 0 20px; 
  z-index: 1;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  width: 100%;
`;

export { Container, Div, LineWrapper, Line, DividerText, TextBox };