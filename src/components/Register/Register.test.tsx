import React from "react";
import { Provider } from "react-redux";
import Register from "./Register";
import { render } from "@testing-library/react-native";
import mockStore from "../../../__mocks__/mockStore";

describe("Given a Register component", () => {
  describe("When it is rendered", () => {
    test("Then screen should match the snapshot", () => {
      const store = mockStore({ count: 5 });

      const screen = render(
        <Provider store={store}>
          <Register />
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
