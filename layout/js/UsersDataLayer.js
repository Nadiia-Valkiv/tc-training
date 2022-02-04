class UsersDataLayer extends DataLayer {
    constructor() {
      super();
      this.tableName = "Users";
    }
    get(key) {
      return super.get(key, this.tableName);
    }
  }