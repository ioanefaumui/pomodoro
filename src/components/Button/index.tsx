import { ButtonContainer } from "./styles";
import { ClockIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

type Props = {
  to: string;
  text: string;
  icon: "clock" | "logs";
  title: string;
};

export function Button({ to, text, icon, title }: Props) {
  return (
    <ButtonContainer to={to} title={title}>
      {icon === "clock" && <ClockIcon className="clock-icon" />}
      {icon === "logs" && <DocumentTextIcon className="clock-icon" />}
      <span>{text}</span>
    </ButtonContainer>
  );
}
