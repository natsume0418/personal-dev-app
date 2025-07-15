"use client";
import React, { useState } from "react";
import Header from "../components/header";
import InputTextBox from "../components/inputTextBox";
import Button from "../components/button";
import { useRouter } from "next/navigation";
import "../css/login.css";
import "../css/inputTextBox.css";
import { validateForm, FormData, ErrorData } from "../utils/validation";

const Login: React.FC = () => {
  const router = useRouter();

  const initialState: FormData = {
    mailAdress: "",
    password: "",
  };

  const errorState: ErrorData = {
    mailAdress: "",
    password: "",
  };

  const [Form, setForm] = useState<FormData>(initialState);
  const [FormError, setFormError] = useState<ErrorData>(errorState);
  const [LoginError, setLoginError] = useState<string>("");

  /**
   * 入力フィールドの変更時に呼ばれる処理
   * name属性をもとに、該当するフォームの値を更新する
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * ログインボタン押下時の処理
   * バリデーションチェック
   */
  const handleLoginOnclick = () => {
    const newErrors: Partial<ErrorData> = {};
    const errors = validateForm(Form);

    if (errors.mailAdress || errors.password) {
      setFormError(newErrors as ErrorData);
      setLoginError("メールアドレスまたはパスワードが誤っています。");
      return;
    }
    setLoginError("");
    console.log("ログイン処理:", Form);
  };

  /**
   * 登録ボタン押下時の処理
   */
  const handleRegistarOnclick = () => {
    router.push("/register");
  };

  /**
   * 入力欄からフォーカスアウト時の処理
   * バリデーションチェック
   */
  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const errors = validateForm(Form);

    setFormError((prev) => ({
      ...prev,
      [name]: errors[name as keyof ErrorData],
    }));
  };

  return (
    <>
      <Header />
      <div className="login-frame">
        <div>
          <p className="error-message">{LoginError}</p>
          <div>
            <InputTextBox
              label="メールアドレス"
              name="mailAdress"
              value={Form.mailAdress}
              onChange={handleChange}
              placeholder="test@sss.jp"
              onBlur={handleOnBlur}
              error={FormError.mailAdress}
            />
            <InputTextBox
              label="パスワード"
              name="password"
              value={Form.password}
              onChange={handleChange}
              onBlur={handleOnBlur}
              error={FormError.password}
            />
          </div>
          <div className="button-group">
            <Button
              label="ログイン"
              onClick={handleLoginOnclick}
              className="login-page-button "
            />
            <Button
              label="会員登録がまだの方はこちら"
              onClick={handleRegistarOnclick}
              className="login-page-button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
