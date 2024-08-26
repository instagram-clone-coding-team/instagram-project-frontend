import React from 'react';
import styled from 'styled-components';
import FindPassword from '../list/FindPasswordItems';
import StyledLink from '../ui/Link';
import TextInfo from '../ui/TextInfo';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { Container, Div, Wrapper } from './PageCSS';

const LoginButtonText = styled.div`
`;

const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(250, 250, 250);
  border: solid rgb(219, 219, 219);
  border-width: 0 1.5px 1.5px 1.5px;
  width: 388px;
  height: 44px;
  cursor: pointer;

  &:hover ${LoginButtonText} {
    opacity: .5;
  }
`;

function FindPasswordPage() {
  return (
    <>
    <Container>
      <AppHeader />
      <Wrapper width={388}>
        <Div line={1} padding="20px 0 100px">
          <FindPassword />
        </Div>
        <StyledLink to="/login">
          <LoginButton>
            <LoginButtonText>
              <TextInfo
                type="span"
                size={14}
                weight="bold"
                color="black"
                info="로그인으로 돌아가기 "
              />
            </LoginButtonText>
          </LoginButton>
        </StyledLink>
      </Wrapper>
      <AppFooter/>
    </Container>
    </>
  );
}

export default FindPasswordPage;