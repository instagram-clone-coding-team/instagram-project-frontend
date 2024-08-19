import React from 'react';
import styled from 'styled-components';
import StyledLink from '../ui/Link';
import Login from '../list/Login'
import TextInfo from '../ui/TextInfo';
import AppFooter from './AppFooter';
import Img from '../ui/ImgInfo';
import { GOOGLEPLAY_BADGE, MICROSOFT_BADGE, GOOGLEPLAY_LINK, MICROSOFT_LINK } from '../../links';

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

function LoginPage() {
  return (
    <>
    <Container>
      <Wrapper>
        <Div line={1} padding="50px 0 35px" id="login">
          <Login />
        </Div>
        <Div line={1} padding="25px 0">
          <TextInfo
            type="span"
            size={14}
            weight={500}
            color="black"
            info="계정이 없으신가요? "
          >
            <StyledLink to="/join">
              <TextInfo
                type="a"
                size={14}
                weight="bold"
                color="rgb(0, 149, 246)"
                activeColor="rgb(126, 201, 250)"
                info="가입하기"
              />
            </StyledLink>
          </TextInfo>
        </Div>
        <Div line={0} padding="10px 0">
          <TextInfo
            type="div"
            size={14}
            color="black"
            info="앱을 다운로드하세요."
          />
        </Div>
        <Div padding="0 0 25px 0">
          <Img
            src={GOOGLEPLAY_BADGE}
            size={134.28}
            alt="google play 다운로드하기"
            link={GOOGLEPLAY_LINK}
          />
          <Img
            src={MICROSOFT_BADGE}
            size={110.76}
            alt="Microsoft에서 가져오기"
            link={MICROSOFT_LINK}
          />
        </Div>
      </Wrapper>
      <AppFooter/>
    </Container>
    </>
  );
}

export default LoginPage;