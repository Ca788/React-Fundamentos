import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.headerBackgroundColor};
  align-items: center;
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }
`;
