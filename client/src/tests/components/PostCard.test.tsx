import { render, screen } from "@testing-library/react";
import PostCard from "@/components/PostCard";

describe("PostCard", () => {

  const post = {
    id: 1,
    title: "Meu Post",
    body: "Conteúdo do post",
    liked: false,
  };

  test("deve renderizar título e conteúdo", () => {
    render(
      <PostCard
        post={post}
        isAuthenticated={false}
        onLike={jest.fn()}
      />
    );

    expect(screen.getByText("Meu Post"))
      .toBeInTheDocument();

    expect(screen.getByText("Conteúdo do post"))
      .toBeInTheDocument();
  });

  test("deve renderizar botão Curtir", () => {
    render(
      <PostCard
        post={post}
        isAuthenticated={false}
        onLike={jest.fn()}
      />
    );

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });

});