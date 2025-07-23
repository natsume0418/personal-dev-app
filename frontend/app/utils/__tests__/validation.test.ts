import { validateForm, FormData } from "../validation";

describe("validationテスト", () => {
  //メールアドレス、パスワードが空の場合
  it("メールアドレス、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスは必須です。");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //メールアドレスが正しく入力、パスワードが空の場合
  it("メールアドレスが正しく入力されており、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "sss@test.com",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //メールアドレスに全角文字が含まれる、パスワードが空の場合
  it("メールアドレスに全角文字が含まれており、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "ＳＳＳ@test.com",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスの形式が正しくありません。");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //メールアドレスにスペースが含まれる、パスワードが空の場合
  it("メールアドレスに全角文字が含まれており、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "ss s@test.com",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスの形式が正しくありません。");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //ドメインがない、パスワードが空の場合
  it("ドメインがない、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "sss@test",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスの形式が正しくありません。");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //@がない、パスワードが空の場合
  it("@がない、パスワードが空の場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "ssstest.com",
      password: "",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスの形式が正しくありません。");
    expect(result.password).toBe("パスワードは必須です。");
  });

  //メールアドレスが空、パスワードが正しい場合
  it("メールアドレスが空、パスワードが正しい場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "",
      password: "abcdefg123",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスは必須です。");
    expect(result.password).toBe("");
  });

  //メールアドレスが空、パスワードが短い場合
  it("メールアドレスが空、パスワードが短い場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "",
      password: "abc",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスは必須です。");
    expect(result.password).toBe(
      "パスワードは半角英数字記号で8〜20文字で入力してください"
    );
  });

  //メールアドレスが空、パスワードが20文字超える場合
  it("メールアドレスが空、パスワードが20文字を超える場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "",
      password: "a".repeat(21),
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスは必須です。");
    expect(result.password).toBe(
      "パスワードは半角英数字記号で8〜20文字で入力してください"
    );
  });

  //メールアドレスが空、パスワードに全角文字が含まれる場合
  it("メールアドレスが空、パスワードに全角文字が含まれる場合、エラーメッセージが表示される", () => {
    const form: FormData = {
      mailAdress: "",
      password: "ＡＡＡ",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("メールアドレスは必須です。");
    expect(result.password).toBe(
      "パスワードは半角英数字記号で8〜20文字で入力してください"
    );
  });

  //メールアドレスに記号が含まれている、パスワードが正しい場合
  it("メールアドレスに記号が含まれている、パスワードが正しい場合、エラーメッセージが表示されない", () => {
    const form: FormData = {
      mailAdress: "test@sss.com",
      password: "abcdefg123!@$",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("");
    expect(result.password).toBe("");
  });

  //メールアドレス、パスワードが正しい場合
  it("メールアドレス、パスワードが正しい場合、エラーメッセージが表示されない", () => {
    const form: FormData = {
      mailAdress: "test@sss.com",
      password: "abcdefg123",
    };
    const result = validateForm(form);
    expect(result.mailAdress).toBe("");
    expect(result.password).toBe("");
  });
});
