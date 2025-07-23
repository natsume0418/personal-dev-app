import React from "react";
import InputTextBox from "../inputTextBox";
import { fireEvent, render, screen } from "@testing-library/react";

describe("inputTextBoxコンポーネント", () => {
  //ラベルの表示
  it("ラベルが表示される", () => {
    render(
      <InputTextBox
        label="ユーザー名"
        name="name"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText("ユーザー名")).toBeInTheDocument();
  });

  //値の表示
  it("値が表示される", () => {
    render(
      <InputTextBox
        label="ユーザー名"
        name="name"
        value="太郎"
        onChange={() => {}}
      />
    );
    expect(screen.getByDisplayValue("太郎")).toBeInTheDocument();
  });

  //変更の確認
  it("onChangeが呼ばれる", () => {
    const handleChange = jest.fn();
    render(
      <InputTextBox
        label="ユーザー名"
        name="name"
        value="太郎"
        onChange={handleChange}
      />
    );
    const input = screen.getByLabelText("ユーザー名");
    fireEvent.change(input, { target: { value: "二郎" } });
    expect(handleChange).toHaveBeenCalled();
  });

  //placeholderの確認
  it("placeholderが表示される", () => {
    render(
      <InputTextBox
        label="ユーザー"
        name="name"
        value=""
        onChange={() => {}}
        placeholder="test@sss.com"
      />
    );
    expect(screen.getByPlaceholderText("test@sss.com")).toBeInTheDocument();
  });

  //フォーカスアウトの確認
  it("onBlurが呼ばれる", () => {
    const handleOnBlur = jest.fn();
    render(
      <InputTextBox
        label="ユーザー"
        name="name"
        value=""
        onChange={() => {}}
        onBlur={handleOnBlur}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(handleOnBlur).toHaveBeenCalled();
  });

  //エラーメッセージの確認
  it("エラーメッセージが表示される", () => {
    render(
      <InputTextBox
        label="ユーザー"
        name="name"
        value="太郎"
        onChange={() => {}}
        error="パスワードは必須です"
      />
    );
    expect(screen.getByText("パスワードは必須です")).toBeInTheDocument();
  });
});
