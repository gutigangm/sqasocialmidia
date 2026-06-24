import { isEmailValid } from "@/utils/email";

describe("Validação de Email", () => {

  test("deve aceitar email válido", () => {
    expect(isEmailValid("teste@email.com")).toBe(true);
  });

  test("deve rejeitar email inválido", () => {
    expect(isEmailValid("teste")).toBe(false);
  });

});