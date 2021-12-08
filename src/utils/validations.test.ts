import { validateEmail } from "./validations";

describe("Given a Validations util component", () => {
  describe("When it receives a valid email", () => {
    test("Then it should return true", () => {
      const email = "test@test.com";

      const validation = validateEmail(email);

      expect(validation).toBe(true);
    });
  });
  describe("When it receives a no valid email", () => {
    test("Then it should return false", () => {
      const email = "test.com";

      const validation = validateEmail(email);

      expect(validation).toBe(false);
    });
  });
});
