import React from "react";
import styled from "styled-components";
import StyledLink from "../ui/Link";
import { LOCK_ICON, PASSWORD_SERVICE } from '../../links';
import Button from '../ui/Button';
import FindPasswordText from "./FindPasswordText";
import TextInfo from '../ui/TextInfo';
import Img from "../ui/ImgInfo";

const Container = styled.div`
  border: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 388px;
  padding: 0 8%;
  vertical-align: baseline;
  gap: 15px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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

function Join(props) {
  return (
    <Container>
      <Div>
        <Img
          src={LOCK_ICON}
          size={96}
          alt="lock icon"
        />
      </Div>
      <Div>
        <TextInfo
          type="div"
          size={16}
          color="black"
          weight="bold"
          info="로그인에 문제가 있나요?"
        />
        <TextInfo
          type="div"
          size={14}
          info="이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수 있는 링크를 보내드립니다."
        />
      </Div>
      <Div>
        <FindPasswordText />
      </Div>
      <Div>
        <Button
          active={0}
          opacity={.3}
          title="로그인 링크 보내기"
        />
      </Div>
      <Div>
      <TextInfo
          type="a"
          size={12}
          color="rgb(0, 55, 107)"
          activeColor="rgb(126, 154, 180)"
          info="비밀번호를 재설정할 수 없나요?"
          link={PASSWORD_SERVICE}
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
        <StyledLink to="/join">
          <TextInfo
            size={14}
            weight="bold"
            color="black"
            info="새 계정 만들기"
          />
        </StyledLink>
      </Div>
    </Container>
  )
}

export default Join;