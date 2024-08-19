import React from 'react';
import { FACEBOOK_ICON2, FACEBOOK_LOGIN, INSTAGRAM_TEXT_LOGO } from '../../links';
import Button from '../ui/Button';
import Img from '../ui/ImgInfo';
import StyledLink from '../ui/Link';
import TextInfo from '../ui/TextInfo';
import { Container, Div, DividerText, Line, LineWrapper } from './ListCSS';
import LoginText from './LoginText';

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