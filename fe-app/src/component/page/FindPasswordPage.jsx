import React from 'react';
import styled from 'styled-components';
import FindPassword from '../list/FindPassword';
import TextInfo from '../ui/TextInfo';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Container, Wrapper, Div } from './PageCSS';
import StyledLink from '../ui/Link';

const UpdatedWrapper = styled(Wrapper)`
  gap: 0;
`;

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(250, 250, 250);
  border: solid rgb(219, 219, 219);
  border-width: 0 1.5px 1.5px 1.5px;
  width: 388px;
  height: 44px;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

function FindPasswordPage() {
  return (
    <>
    <Container>
      <AppHeader />
      <Wrapper>
        <Div line={1} width={388} padding="20px 0 100px">
          <FindPassword />
        </Div>
        <StyledLink to="/login">
          <LoginButton>
            <TextInfo
              type="span"
              size={14}
              weight="bold"
              color="black"
              info="로그인으로 돌아가기 "
            />
          </LoginButton>
        </StyledLink>
      </Wrapper>
      <AppFooter/>
    </Container>
    </>
  );
}

export default FindPasswordPage;