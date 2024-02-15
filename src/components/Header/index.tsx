import { Button } from "../Button";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Button text="Timer" to="/" icon="clock" title="Timer" />
        <Button text="Logs" to="/logs" icon="logs" title="Logs" />
      </nav>
    </HeaderContainer>
  );
}
