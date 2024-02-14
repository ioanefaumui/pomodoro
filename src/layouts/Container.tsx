import { NavLink, Outlet } from "react-router-dom";
import { StyledContainer } from "./Container.styles";

export function Container() {
  return (
    <StyledContainer>
      <NavLink to={"/"}>Timer</NavLink>
      <NavLink to={"/logs"}>Logs</NavLink>
      <Outlet />
    </StyledContainer>
  );
}
