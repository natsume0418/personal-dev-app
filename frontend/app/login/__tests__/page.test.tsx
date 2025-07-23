import { useRouter } from "next/navigation";
import Login from "../page";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("loginPage", () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  //入力欄空の状態でログインボタン押下
  it("入力欄が空の状態でログインボタンを押下した場合、エラメッセージが表示される", () => {
    render(<Login />);
    fireEvent.click(screen.getByText("ログイン"));
    expect(
      screen.getByText("メールアドレスまたはパスワードが誤っています。")
    ).toBeInTheDocument();
  });

  //入力欄フォーカスアウト時
  it("入力欄未入力でフォーカスアウトした場合、エラーメッセージが表示される", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText("メールアドレス");
    fireEvent.blur(emailInput);
    expect(screen.getByText("メールアドレスは必須です。")).toBeInTheDocument();
  });

  //会員登録がまだの方を押下した場合
  it("会員登録がまだの方を押下した場合、会員登録画面に遷移する", () => {
    render(<Login />);
    fireEvent.click(screen.getByText("会員登録がまだの方はこちら"));
    expect(push).toHaveBeenCalledWith("/register");
  });

  //入力情報が正しい場合、ログインボタンを押下
  it("入力情報が正しい場合にログインした場合、画面遷移する", () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText("メールアドレス"), {
      target: { value: "sss@test.com" },
    });
    fireEvent.change(screen.getByLabelText("パスワード"), {
      target: { value: "abc12345" },
    });
    fireEvent.click(screen.getByText("ログイン"));
    expect(push).toHaveBeenCalledWith("/register");
    expect(
      screen.queryByText("メールアドレスまたはパスワードが誤っています。")
    ).toBeNull();
  });
});
