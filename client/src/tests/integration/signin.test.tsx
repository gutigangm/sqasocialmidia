import { render, screen } from "@testing-library/react";
import SignIn from "@/app/signin/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("@/contexts/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe("Tela Signin", () => {

  test("deve renderizar email, senha e botão entrar", () => {
    render(<SignIn />);

    expect(
      screen.getByPlaceholderText("seu@email.com")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("••••••••")
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("button", { name: /entrar/i })[1]
    ).toBeInTheDocument();
  });

});