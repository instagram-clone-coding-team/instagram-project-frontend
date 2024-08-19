import React from 'react';
import styled from 'styled-components';
import StyledLink from '../ui/Link';
import { FACEBOOK_ICON2, FACEBOOK_LOGIN, INSTAGRAM_TEXT_LOGO, MOREINFO_LINK } from '../../links';
import Button from '../ui/Button';
import LoginText from './LoginText';
import TextInfo from '../ui/TextInfo';
import Img from '../ui/ImgInfo';

const Container = styled.div`
  border: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 350px;
  padding: 0 12%;
  vertical-align: baseline;
  gap: 15px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

function Login(props) {
  return (
    <Container>
      <Div>
        <Img
          src={INSTAGRAM_TEXT_LOGO}
          size={175}
          alt="instragram text logo"
        />
      </Div>
      <Div />
      <Div>
        <LoginText />
      </Div>
      <Div>
        <Button 
          active={0}
          title="로그인"
        />
      </Div>
      <Div>
        <LineWrapper>
          <Line/>
          <DividerText>또는</DividerText>
          <Line/>
        </LineWrapper>
      </Div>
      <Div>
        <Button 
          active={1}
          title="Facebook으로 로그인"
          link={FACEBOOK_LOGIN}
          icon={FACEBOOK_ICON2}
          fontColor="rgb(56, 81, 133)"
          backgroundColor="white"
          iconWidth={16}
          iconHeight={16}
        />
      </Div>
      <Div>
        <StyledLink to="/find/password">
          <TextInfo
            type="span"
            size={12}
            color="rgb(0, 55, 107)"
            activeColor="rgb(126, 154, 180)"
            info="비밀번호를 잊으셨나요?"
            />
        </StyledLink>
      </Div>
    </Container>
  )
}

export default Login;