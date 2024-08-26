import React from 'react';
import { GOOGLEPLAY_BADGE, GOOGLEPLAY_LINK, MICROSOFT_BADGE, MICROSOFT_LINK } from '../../links';
import JoinItems from '../list/JoinItems';
import Img from '../ui/ImgInfo';
import StyledLink from '../ui/Link';
import TextInfo from '../ui/TextInfo';
import AppFooter from './AppFooter';
import { Container, Div, Wrapper } from './PageCSS';

function JoinPage() {
  return (
    <>
    <Container>
      <Wrapper gap={10}>
        <Div line={1} padding="50px 0 35px">
          <JoinItems />
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

export default JoinPage;