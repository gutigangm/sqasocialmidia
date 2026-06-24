import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "@/app/signup/page";

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

describe("Tela Signup", () => {
  test("deve exibir erro quando senhas não coincidem", () => {
    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("seu@email.com"), {
      target: { value: "teste@email.com" },
    });

    fireEvent.change(screen.getAllByPlaceholderText("••••••••")[0], {
      target: { value: "Abc@1234" },
    });

    fireEvent.change(screen.getAllByPlaceholderText("••••••••")[1], {
      target: { value: "OutraSenha123@" },
    });

    fireEvent.click(
      screen.getAllByRole("button", { name: /criar conta/i })[1]
    );

    expect(
      screen.getByText("As senhas não coincidem")
    ).toBeInTheDocument();
  });
});