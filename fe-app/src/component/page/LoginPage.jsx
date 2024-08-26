import React from 'react';
import { GOOGLEPLAY_BADGE, GOOGLEPLAY_LINK, INSTAGRAM_TEXT_LOGO, MICROSOFT_BADGE, MICROSOFT_LINK } from '../../links';
import { LoginItems, LoginToJoin } from '../list/LoginItems';
import Img from '../ui/ImgInfo';
import TextInfo from '../ui/TextInfo';
import AppFooter from './AppFooter';
import { Container, Div, Wrapper } from './PageCSS';

function LoginPage() {
  return (
    <>
    <Container>
      <Wrapper gap={10}>
        <Div line={1} padding="50px 0 35px">
          <Div padding="0 0 30px 0">
            <Img
              src={INSTAGRAM_TEXT_LOGO}
              size={175}
              alt="instragram text logo"
            />
        </Div>
          <LoginItems />
        </Div>

        <Div line={1} padding="25px 0">
          <LoginToJoin />
        </Div>

        <Div line={0} padding="5px 0">
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