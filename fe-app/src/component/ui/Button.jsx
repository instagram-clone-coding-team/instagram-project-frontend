import React from "react";
import styled, { css } from "styled-components";

const Icon = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  margin-right: 8px;
`;

const ButtonFont = css`
  color: ${(props) => props.fontColor || "white"};
  font: normal 600 14px "Arial", sans-serif;
  user-select: none;
`;

const StyledButton = styled.button`
  ${ButtonFont}

  background-color: ${(props) => props.backgroundColor || "rgb(0, 149, 246)"};

  width: 100%;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: 7.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledActiveButton = styled(StyledButton)`
  cursor: pointer;
  transition: background-color 0.1s ease;
  ${(props) =>
    props.isHover &&
    `
    &:hover {
      background-color: ${props.hoverColor || "rgb(24, 119, 242)"};
    }
  `}
`;

const StyledDeactiveButton = styled(StyledButton)`
  opacity: ${(props) => props.opacity || 1};
  pointer-events: none;
  cursor: not-allowed;
`;

function Button(props) {
  const {
    title, link, active,
    fontColor, backgroundColor, opacity,
    isHover, hoverColor,
    icon, iconWidth, iconHeight
  } = props;
  
  if (active || 0) {
    const handleClick = () => {
      window.location.href = link;
    };
  
    return (
      <StyledActiveButton
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        isHover={isHover}
        hoverColor={hoverColor}
        onClick={handleClick}
      >
        {icon && <Icon src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
        {title || "button"}
      </StyledActiveButton>
    )
  } else {
    return (
      <StyledDeactiveButton
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        opacity={opacity || .7}
      >
        {icon && <Icon src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
        {title || "button"}
      </StyledDeactiveButton> 
    );
  }
}

export default Button