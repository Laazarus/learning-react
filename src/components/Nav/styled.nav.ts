import styled from "styled-components";

export const StyledNav = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
  margin-bottom:20px;
  li {
    float: left;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 16px;
      text-decoration: none;
    }
    a:hover {
      background-color: #111111;
    }
  }
`;
