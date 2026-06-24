import { render, screen } from "@testing-library/react";
import Input from "@/components/Input";

describe("Input", () => {

  test("deve renderizar o label", () => {
    render(<Input label="Email" />);

    expect(
      screen.getByText("Email")
    ).toBeInTheDocument();
  });

  test("deve renderizar mensagem de erro", () => {
    render(
      <Input
        label="Email"
        error="Campo obrigatório"
      />
    );

    expect(
      screen.getByText("Campo obrigatório")
    ).toBeInTheDocument();
  });

});