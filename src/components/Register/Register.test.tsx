import React from "react";
import { Provider } from "react-redux";
import Register from "./Register";
import { render, cleanup } from "@testing-library/react-native";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
afterEach(cleanup);

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
