import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styled.nav";

class Nav extends React.Component<{}, {}> {
  render() {
    return (
  
        <StyledNav>
         
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Go to Statistics</Link>
            </li>
       
        </StyledNav>
    );
  }
}
export default Nav;
