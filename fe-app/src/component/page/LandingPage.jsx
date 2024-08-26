import React from "react";
import { Container, Wrapper, Div } from "./PageCSS";
import { LoginItems, LoginToJoin } from "../list/LoginItems";
import AppFooter from './AppFooter';

function LandingPage() {
  return (
    <>
    <Container>
      <Wrapper>
        <Div padding="50px 0 35px">
          <LoginItems />
        </Div>
        <Div padding="25px 0">
          <LoginToJoin />
        </Div>
      </Wrapper>
      <AppFooter />
    </Container>
    </>
  );
}

export default LandingPage;