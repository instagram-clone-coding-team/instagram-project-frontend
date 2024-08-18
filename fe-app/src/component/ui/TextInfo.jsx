import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  width: 100%;
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color || 'rgb(115, 115, 115)'};
  text-align: center;
  word-break: break-all;
`;

const StyledA = styled.a`
  width: 100%;
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color || 'rgb(115, 115, 115)'};
  text-align: center;
  text-decoration: none;
  word-break: break-all;
  cursor: pointer;

  &:active {
    color: ${(props) => props.activeColor || 'rgb(115, 115, 115)'};
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color || 'rgb(115, 115, 115)'};
  text-align: center;
  word-break: break-all;
`;

function TextInfo(props) {
  const { type, size, weight, color, activeColor, info, link, children } = props;

  if (type === "span"){
    return (
      <StyledSpan size={size} weight={weight} color={color}>
        {info}
        {children}
      </StyledSpan>
    );
  } else if (type === "a") {
    return (
      <StyledA size={size} weight={weight} color={color} activeColor={activeColor} href={link}>
        {info}
      </StyledA>
    );
  } else {
    return (
      <StyledDiv size={size} weight={weight} color={color}>
        {info}
        {children}
      </StyledDiv>
    );
  }
}

export default TextInfo;