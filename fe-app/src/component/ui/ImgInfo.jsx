import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  line-height: 0;
`;

const StyledImg = styled.img`
  width: ${(props) => props.size}px;
  display: inline-block;
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`

function Img(props) {
  const { src, size, alt, link } = props;

  if (link) {
    return (
      <StyledLink href={link}>
        <StyledImg src={src} size={size} alt={alt || "image"} /> 
      </StyledLink>
    );
  } else {
    return (
      <StyledImg src={src} size={size} alt={alt || "image"} />
    );
  }
}

export default Img;