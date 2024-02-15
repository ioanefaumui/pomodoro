import { sanitizeNumberInput } from "../../utils/formatters";
import {
  FormContainer,
  MainContainer,
  StartButtonContainer,
  TimerContainer,
} from "./styles";
import { MinusIcon, PlusIcon, PlayIcon } from "@heroicons/react/24/outline";

export function Timer() {
  return (
    <MainContainer>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <div className="input">
          <label htmlFor="task">I'm going to work on</label>
          <input id="task" type="text" list="task-list" placeholder="Name your task" />

          <datalist id="task-list">
            <option value="valornovo" />
            <option value="Valor 2" />
            <option value="Valor 3" />
            <option value="Valor 4" />
          </datalist>

          <div className="minutes-duration-wrapper">
            <label htmlFor="minutes-duration">for</label>
            <div className="minutes-duration-input">
              <button className="timer-btn">
                <MinusIcon className="icon" />
              </button>
              <input
                id="minutes-duration"
                type="text"
                placeholder="00"
                onChange={(e) => sanitizeNumberInput(e)}
              />
              <button className="timer-btn">
                <PlusIcon className="icon" />
              </button>
            </div>
            <span>minutes.</span>
          </div>
        </div>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <StartButtonContainer>
          <PlayIcon className="icon" />
          <span>Start</span>
        </StartButtonContainer>
      </FormContainer>
    </MainContainer>
  );
}
