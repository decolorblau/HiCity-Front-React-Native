import React from "react";
import Register from "./Register";
import { render } from "@testing-library/react-native";

describe("Given a Register component", () => {
  describe("When it is rendered", () => {
    test("Then screen should match the snapshot", () => {
      const screen = render(<Register />);

      expect(screen).toMatchSnapshot();
    });
  });
});
