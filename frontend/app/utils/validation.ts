export type FormData = {
  mailAdress: string;
  password: string;
};

export type ErrorData = {
  mailAdress: string;
  password: string;
};

export const validateForm = (form: FormData): ErrorData => {
  const errors: ErrorData = {
    mailAdress: "",
    password: "",
  };

  // メールアドレス
  if (!form.mailAdress) {
    errors.mailAdress = "メールアドレスは必須です。";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mailAdress)) {
    errors.mailAdress = "メールアドレスの形式が正しくありません。";
  }

  // パスワード
  if (!form.password) {
    errors.password = "パスワードは必須です";
  } else if (!/^[a-zA-Z0-9!-/:-@¥[-`{-~]{8,20}$/.test(form.password)) {
    errors.password = "パスワードは半角英数字記号で8〜20文字で入力してください";
  }

  return errors;
};
