import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Markers from "./Markers";
import { Provider } from "react-redux";
import mockStore from "../../../__mocks__/mockStore";
import { NavigationContainer } from "@react-navigation/native";
import server from "../../mocks/server";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn",
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a Marker component", () => {
  describe("When it is rendered", () => {
    test("Then screen should match the snapshot", async () => {
      const goToDetail = jest.fn();
      const store = mockStore({ count: 5 });
      const length = 7;

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <Markers goToDetail={goToDetail} />
          </NavigationContainer>
        </Provider>
      );
      await waitFor(() => {
        const landmarksRender = screen.getAllByRole("button");
        expect(landmarksRender).toHaveLength(length);
      });
    });
  });
});
