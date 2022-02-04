class UserData {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.user = {
      [this.email]: this.password,
    };
  }
}
