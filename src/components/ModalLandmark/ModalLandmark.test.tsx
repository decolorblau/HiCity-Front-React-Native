import React from "react";
import { render } from "@testing-library/react-native";
import ModalLandmark from "./ModalLandmark";

describe("Given a Register component", () => {
  describe("When it is rendered", () => {
    test("Then screen should match the snapshot", () => {
      const landmark = {
        id: "543534665265",
        title: "Snapshot Test",
        imageUrl: "una-url-de-una-imagen",
        city: "aqui",
        category: "test",
        introduction: "faadfefae",
        description: "djgfglagagkfgafglaflgajdgfkaglagjfd",
        latitude: 3.45343,
        longitude: 6.35345,
        lastUpdate: 14354643646,
      };
      const screen = render(<ModalLandmark landmark={landmark} />);

      expect(screen).toMatchSnapshot();
    });
  });
});
