import React from "react";
import styled, { css } from "styled-components";

const Icon = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  margin-right: 8px;
`;

const ButtonFont = css`
  color: white;
  font: normal 600 14px "Arial", sans-serif;
  user-select: none;
`;

const StyledButton = styled.button`
  ${ButtonFont}

  background-color: rgba(0, 149, 246);

  width: 268.67px;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: 7.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeactiveButton = styled(StyledButton)`
  opacity: .7;
  pointer-events: none;
  cursor: not-allowed;
`;

const ActiveButton = styled(StyledButton)`
  cursor: pointer;
  transition: background-color 0.1s ease;
  &:hover{
    background-color: rgba(24, 119, 242);
  }
`;

function Button(props) {
  const {title, link, icon, iconWidth, iconHeight, active} = props;

  if (active) {
    const handleClick = () => {
      window.location.href = link;
    };

    return <ActiveButton onClick={handleClick}>
      {icon && <Icon src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
      {title || "button"}
    </ActiveButton>
  } else {
    return <DeactiveButton>
      {icon && <Icon src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
      {title || "button"}
     </DeactiveButton> 
  }
}

export default Button;