import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Buttonコンポーネント", () => {
  //ラベル表示の確認
  it("ラベルが表示される", () => {
    render(<Button label="送信" onClick={() => {}} />);
    expect(screen.getByText("送信")).toBeInTheDocument();
  });

  //ラベルが空の時の確認
  it("ラベルが空でもエラーなく表示される", () => {
    render(<Button label="" onClick={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument;
  });

  //クリックの確認
  it("クリック時にonClickが呼ばれる", () => {
    const handleClick = jest.fn();
    render(<Button label="クリック" onClick={handleClick} />);
    fireEvent.click(screen.getByText("クリック"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  //複数回クリックの確認
  it("複数回クリック時にonClickが呼ばれる", () => {
    const handleClick = jest.fn();
    render(<Button label="クリック" onClick={handleClick} />);
    const btn = screen.getByText("クリック");
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  //classNameが適用されるかの確認
  it("className適用される", () => {
    render(
      <Button label="クリック" onClick={() => {}} className="test-class" />
    );
    const button = screen.getByText("クリック");
    expect(button).toHaveClass("test-class");
  });
});
