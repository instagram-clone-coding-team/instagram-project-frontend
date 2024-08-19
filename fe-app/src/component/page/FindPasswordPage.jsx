import React from 'react';
import styled from 'styled-components';
import StyledLink from '../ui/Link';
import TextInfo from '../ui/TextInfo';
import AppFooter from './AppFooter';
import FindPassword from '../list/FindPassword';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

const StyledDiv = styled.div `
  display: flex;
  justify-content: center;

  width: 350px;
  box-sizing: border-box;

  gap: 8px;
  padding: ${(props) => props.padding};
`;

const StyledLineDiv = styled(StyledDiv)`
  padding: ${(props) => props.padding};
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 1px;
`;

function Div(props) {
  const { line, padding, children } = props;

  if(line) {
    return <StyledLineDiv padding={padding}>{children}</StyledLineDiv>;
  } else {
    return <StyledDiv padding={padding}>{children}</StyledDiv>;
  }
}

function FindPasswordPage() {
  return (
    <>
    <Container>
      <Wrapper>
        <Div line={1} padding="50px 0 35px 0">
          <FindPassword />
        </Div>
        <Div line={1} padding="25px 0">
          <TextInfo
            type="span"
            size={14}
            weight={500}
            color="black"
            info="계정이 있으신가요? "
          >
            <StyledLink to="/login">
              <TextInfo
                type="span"
                size={14}
                weight="bold"
                color="rgb(0, 149, 246)"
                activeColor="rgb(126, 201, 250)"
                info="로그인"
              />
            </StyledLink>
          </TextInfo>
        </Div>
      </Wrapper>
      <AppFooter/>
    </Container>
    </>
  );
}

export default FindPasswordPage;