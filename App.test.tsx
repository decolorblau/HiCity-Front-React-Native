import App from "./App";
import React from "react";
import { render } from "@testing-library/react-native";

test("hola", () => {
  const screen = render(<App />);
  expect(screen.getByText("Hola Mario!")).not.toBe(null);
});
