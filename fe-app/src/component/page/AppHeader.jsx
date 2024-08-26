import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { INSTAGRAM_TEXT_LOGO } from "../../links";
import Img from "../ui/ImgInfo";
import StyledLink from "../ui/Link";

const Header = styled.header`
  width: 100%;
  height: 60px;
  top: 0;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(219, 219, 219);
  background-color: rgb(255, 255, 255);
  transition: height .2s ease-in-out;
  `;

const HeaderBox = styled.div`
  max-width: 975px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const HeaderItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: start;
  align-items: center;
`;

function AppHeader() {
  const logo = (
    <StyledLink to="/">
      <Img
        src={INSTAGRAM_TEXT_LOGO}
        size={102.41}
        alt="instagram text logo"
      />
    </StyledLink>
  );

  return (
    <Header>
      <HeaderBox>
        <HeaderItem>
          {logo}
        </HeaderItem>
        <HeaderItem />
      </HeaderBox>
    </Header>
  );
}

export default AppHeader;