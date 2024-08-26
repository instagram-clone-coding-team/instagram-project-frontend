import React, { useState } from 'react';
import { FACEBOOK_ICON, FACEBOOK_LOGIN, INSTAGRAM_TEXT_LOGO, MOREINFO_LINK } from '../../links';
import Button from '../ui/Button';
import Img from '../ui/ImgInfo';
import TextInfo from '../ui/TextInfo';
import JoinItemText from './JoinItemText';
import { Container, Div, DividerText, Line, LineWrapper } from './ListCSS';

function JoinItems() {
  const [formValues, setFormValues] = useState({
    id: '',
    fullName: '',
    username:'',
    password: '',
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
          src={INSTAGRAM_TEXT_LOGO}
          size={175}
          alt="instragram text logo"
        />
      </Div>
      <Div>
        <TextInfo
          type="span"
          size={16}
          weight="bold"
          info="친구들의 사진과 동영상을 보려면 가입하세요."
        />
      </Div>
      <Div>
        <Button 
          active={1}
          title="Facebook으로 로그인"
          link={FACEBOOK_LOGIN}
          isHover={1}
          icon={FACEBOOK_ICON}
          iconWidth={16}
          iconHeight={16}
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
        <JoinItemText
          formValues={formValues}
          onChange={handleChange}
        />
      </Div>
      <Div>
        <TextInfo
          type="span"
          size={12}
          info="저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. "
        >
        <TextInfo
          type="a"
          size={12}
          color="rgb(0, 55, 107)"
          activeColor="rgb(126, 154, 180)"
          info="더 알아보기"
          link={MOREINFO_LINK}
        />
        </TextInfo>
      </Div>
      <Div>
        <Button 
          active={isFormValid ? 1 : 0}
          title="가입"
        />
      </Div>
    </Container>
  )
}

export default JoinItems;