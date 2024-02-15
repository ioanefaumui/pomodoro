import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  padding-block: 2rem;
  justify-content: center;
`;

export const FormContainer = styled.form`
  .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .task-wrapper,
  .minutes-duration-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  #task,
  #minutes-duration {
    font-size: inherit;
    background-color: transparent;
    padding-block: 0.5rem;
    padding-inline: 0.75rem;
    border-style: solid;
    border-width: 1px;
    color: inherit;

    &::placeholder {
      color: ${({ theme }) => theme["zinc-400"]};
    }
  }

  #task {
    flex: 1;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    border-radius: 6px;
    border-color: ${({ theme }) => theme["slate-400"]};

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }

  #minutes-duration {
    width: 48px;
    text-align: center;
    border: none;

    &:focus {
      position: relative;
    }
  }

  .timer-btn {
    display: grid;
    padding-inline: 0.5rem;
    border: none;
    place-items: center;
    color: ${({ theme }) => theme["slate-400"]};
    background-color: transparent;

    .icon {
      width: 1rem;
      height: 1rem;
      stroke-width: 3px;
    }
  }

  .timer-btn:nth-of-type(1) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .timer-btn:nth-of-type(2) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .minutes-duration-input {
    display: flex;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme["slate-400"]};
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  font-size: clamp(4rem, calc(14px + 12vw), 14rem);
  font-family: ${({ theme }) => theme["font-1"]};
  line-height: 100%;
  gap: 1rem;

  span:not(:nth-of-type(3)) {
    background-color: white;
    border-radius: 8px;
    padding-inline: 1rem;
  }

  span:nth-of-type(3) {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.primary};
    width: 2vw;
    font-size: clamp(4rem, calc(14px + 12vw), 10rem);
  }

  @media (max-width: 640px) {
    gap: 0.5rem;
    span:not(:nth-of-type(3)) {
      padding-inline: 0.5rem;
    }
  }
`;

export const StartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 4rem;
  border: none;
  color: ${({ theme }) => theme.off};
  background-color: ${({ theme }) => theme.primary};
  padding: 0.75rem;
  border-radius: 4px;
  font-size: inherit;

  .icon {
    color: currentColor;
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 1.75;
  }
`;
