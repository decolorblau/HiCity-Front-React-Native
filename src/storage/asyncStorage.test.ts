import AsyncStorage from "@react-native-async-storage/async-storage";
import { tokenStorage, getDataObject, removeStorage } from "./asyncStorage";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a storeToken function", () => {
  describe("When it is triggered with keyToken and user token", () => {
    const keyToken = "keyToken";
    const token = {};
    test("Then AsyncStorage.setItem should have been called with userData and [keyToken,token] stringified", async () => {
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue({});
      await tokenStorage(keyToken, token);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        keyToken,
        JSON.stringify(token)
      );
    });
    describe("And AsyncStorage.setItem is rejected", () => {
      test("Then should return and error with a message Async Storage Error", async () => {
        (AsyncStorage.setItem as jest.Mock).mockRejectedValue(
          new Error("AsyncStorage Error")
        );
        const result: any = await tokenStorage(keyToken, token);

        expect(result.message).toBe("AsyncStorage Error");
      });
    });
  });
});
