import React from "react";
import { StyledLink } from "./styled";
import styled from 'styled-components';
import * as routes from "../../constants/routes";

const StyledNav = styled.nav`
  display: flex;
  font-size: 1rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`

const Nav = () => {
  return (
    <StyledNav >
      <div>React Shop</div>
      <Navigation >
        <div>
          <StyledLink to={routes.HOME}>Home</StyledLink>
          <StyledLink to={routes.PROFILE}>Profile</StyledLink>
        </div>
      </Navigation>
    </StyledNav>
  );
};

export default Nav;
