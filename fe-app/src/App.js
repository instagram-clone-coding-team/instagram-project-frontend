import React from 'react';
import './App.css';
import { FACEBOOK_ICON, FACEBOOK_LOGIN } from './links';
import Button from './component/ui/Button';
import TextInput from './component/ui/TextInput';

function App() {
  return (
    <div>
      <Button 
        active={1}
        title="Facebook으로 로그인"
        link={FACEBOOK_LOGIN}
        icon={FACEBOOK_ICON}
        iconWidth={16}
        iconHeight={16}
      />
      <br />
      <Button 
        active={0}
        title="가입"
      />
      <br />
      <TextInput
        placeholder="휴대폰 번호 또는 이메일 주소"
      />
      <br />
      <TextInput
        placeholder="성명"
      />
      
    </div>
  );
}

export default App;
