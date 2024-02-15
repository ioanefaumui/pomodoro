import styled from "styled-components";

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    span {
      display: none;
    }
  }
`;
