import { Outlet } from "react-router-dom";
import { StyledContainer } from "./Container.styles";
import { Header } from "../components/Header";

export function Container() {
  return (
    <StyledContainer>
      <Header />
      <Outlet />
    </StyledContainer>
  );
}
