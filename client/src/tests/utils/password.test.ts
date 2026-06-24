import { isPasswordValid } from "@/utils/password";

describe("Validação de Senha", () => {

  test("senha válida deve retornar true", () => {
    expect(isPasswordValid("Senha@123")).toBe(true);
  });

  // Teste de bug
  test("BUG - senha com exatamente 8 caracteres deveria ser aceita", () => {
    expect(isPasswordValid("Abc@1234")).toBe(true);
  });

});