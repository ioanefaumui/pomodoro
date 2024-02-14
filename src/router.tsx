import { createBrowserRouter } from "react-router-dom";
import { Timer } from "./pages/Timer";
import { Logs } from "./pages/Logs";
import { Container } from "./layouts/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Timer />,
      },
      {
        path: "/logs",
        element: <Logs />,
      },
    ],
  },
]);
