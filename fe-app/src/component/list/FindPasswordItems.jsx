import React, { useState } from "react";
import { LOCK_ICON, PASSWORD_SERVICE } from '../../links';
import Button from '../ui/Button';
import Img from "../ui/ImgInfo";
import StyledLink from "../ui/Link";
import TextInfo from '../ui/TextInfo';
import FindPasswordItemText from "./FindPasswordItemText";
import { Container, Div, DividerText, Line, LineWrapper } from "./ListCSS";

function Join(props) {
  const [formValues, setFormValues] = useState({
    id: '',
  });
  
  const isFormValid = Object.values(formValues).every(value => value !== '');
 
  const handleChange = (field, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

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
      </Div>
      <Div>
        <TextInfo
          type="div"
          size={14}
          info="이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수 있는 링크를 보내드립니다."
        />
      </Div>
      <Div>
        <FindPasswordItemText />
      </Div>
      <Div>
        <Button
          active={isFormValid ? 1 : 0}
          opacity={isFormValid ? 1 : .3}
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