import React from 'react';
import styled from 'styled-components';
import { FACEBOOK_ICON2, FACEBOOK_LOGIN, INSTAGRAM_TEXT_LOGO, MOREINFO_LINK } from '../../links';
import Button from '../ui/Button';
import LoginText from './LoginText';
import TextInfo from '../ui/TextInfo';
import Img from '../ui/ImgInfo';

const Div = styled.div`
  border: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 350px;
  padding: 0;
  vertical-align: baseline;
  gap: 15px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 268.67px;
`;

const Wrapper = styled.div`
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
    <Div>
      <Box>
        <Img
          src={INSTAGRAM_TEXT_LOGO}
          size={175}
          alt="instragram text logo"
        />
      </Box>
      <Box />
      <Box>
        <LoginText />
      </Box>
      <Box>
        <Button 
          active={0}
          title="로그인"
        />
      </Box>
      <Box>
        <Wrapper>
          <Line/>
          <DividerText>또는</DividerText>
          <Line/>
        </Wrapper>
      </Box>
      <Box>
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
      </Box>
      <Box>
        <TextInfo
          type="a"
          size={12}
          color="rgb(0, 55, 107)"
          activeColor="rgb(126, 154, 180)"
          info="비밀번호를 잊으셨나요?"
          link={MOREINFO_LINK}
        />
      </Box>
    </Div>
  )
}

export default Login;