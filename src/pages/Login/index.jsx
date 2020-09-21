import React from "react";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import { LoginTitle, LoginButton } from "./styled";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  min-height: 100vh;
`
const Login = ({ history }) => {
  return (
    <StyledLogin>
      <LoginTitle>Framer motion animations</LoginTitle>
      <LoginButton
        onClick={() => {
          history.push("/")
        }}
      >
        Login In
      </LoginButton>
    </StyledLogin>
  );
};

export default withRouter(Login);
