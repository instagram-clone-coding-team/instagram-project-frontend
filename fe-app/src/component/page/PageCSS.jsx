import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 158px);
`;

const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const HiddenElement = styled.div`
  display: block;
  @media (max-width: 900px) {
    display: none;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 350}px;
  height: 100%;
  gap: ${(props) => props.gap || 0}px;
  flex-shrink: 0; // 부모 요소가 자식의 너비를 줄이지 않도록 설정
`;

const StyledDiv = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  box-sizing: border-box;
  
  gap: 8px;
  padding: ${(props) => props.padding};
`;

const StyledLineDiv = styled(StyledDiv)`
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 1px;
`;

function Wrapper(props) {
  const {width, gap, children} = props;
  return (
    <StyledWrapper width={width} gap={gap}>
      {children}
    </StyledWrapper>
  );
}

function Div(props) {
  const { line, width, padding, children } = props;

  if(line) {
    return (
      <StyledLineDiv
        width={width}
        padding={padding}
      >
        {children}
      </StyledLineDiv>
    );
  } else {
    return (
      <StyledDiv
        width={width}
        padding={padding}
      >
        {children}
      </StyledDiv>
    );
  }
}

function Hidden(props) {
  const { children } = props;
  return (
    <HiddenElement>
      {children}
    </HiddenElement>
  )
}

export { Container, Div, RowLayout, Wrapper, HiddenElement };

