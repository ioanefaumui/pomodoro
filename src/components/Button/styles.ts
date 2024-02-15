import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  color: white;

  background-color: ${({ theme }) => theme.aliceblue};
  color: ${({ theme }) => theme.jetblack};

  border: none;
  padding: 0.75rem;
  border-radius: 4px;

  &:hover {
    filter: sepia(10%);
  }

  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.off};
  }

  .clock-icon {
    color: currentColor;
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 1.75;
  }
`;
