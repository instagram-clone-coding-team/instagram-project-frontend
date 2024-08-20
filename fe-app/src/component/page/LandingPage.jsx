import React from "react";
import { Container, Wrapper, Div } from "./PageCSS";
import { Login, LoginToJoin } from "../list/LoginItems";
import TextInfo from "../ui/TextInfo";

function LandingPage() {
  return (
    <>
    <Container>
      <Wrapper>
        <Div padding="50px 0 35px">
          <Login />
        </Div>
        <Div padding="25px 0">
          <LoginToJoin />
        </Div>
      </Wrapper>
    </Container>
    </>
  );
}

export default LandingPage;