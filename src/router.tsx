import { createBrowserRouter } from "react-router-dom";
import { Container } from "./layouts/Container";
import { Timer } from "./pages/Timer";
import { Logs } from "./pages/Logs";

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
