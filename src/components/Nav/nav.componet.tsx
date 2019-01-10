import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styled.nav";

class Nav extends React.Component<{}, {}> {
  render() {
    return (
  
        <StyledNav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Go to Statistics</Link>
            </li>
          </ol>
        </StyledNav>
    );
  }
}
export default Nav;
