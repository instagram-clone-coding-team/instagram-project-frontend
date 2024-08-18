import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 158px;
  background-color: rgb(255, 255, 255);
  padding: 0 16px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px;
  padding: 12px 16px;
  font-size: 12px;
  color: rgb(115, 115, 115);
`;

function AppFooter() {
  const firstLineItems = [
    'Meta',
    '소개',
    '블로그',
    '채용 정보',
    '도움말',
    'API',
    '개인정보처리방침',
    '약관',
    '위치',
    'Instagram Lite',
    'Threads',
    '연락처 업로드 & 비사용자',
    'Meta Verified',
  ];

  const secondLineItems = [
    '한국어',
    '© 2024 Instagram from Meta',
  ]
  
  return (
    <Footer>
      <FooterContent>
        {firstLineItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </FooterContent>
      <FooterContent>
        {secondLineItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </FooterContent>
    </Footer>
  )
}

export default AppFooter;