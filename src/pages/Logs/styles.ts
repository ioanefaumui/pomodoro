import styled from "styled-components";

export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const LogsContainer = styled.div`
  flex: 1;
  overflow: auto;
  border-radius: 4px;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background-color: ${({ theme }) => theme["slate-300"]};
    text-align: left;
    padding: 1rem;
    gap: 0.5rem;
  }

  td {
    background-color: ${({ theme }) => theme["slate-200"]};
    padding: 1rem;
    border-top: 4px solid ${({ theme }) => theme.aliceblue};

    &:first-child {
      width: 50%;
      min-width: 320px;
    }

    &:not(:first-child) {
      white-space: nowrap;
    }
  }
`;
