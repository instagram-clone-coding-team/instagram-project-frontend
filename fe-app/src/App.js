import React from 'react';
import './App.css';
import Button from './component/ui/Button';
import { FACEBOOK_ICON, FACEBOOK_LOGIN } from './links';

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
    </div>
  );
}

export default App;
