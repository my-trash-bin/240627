export interface User {
  id: string;
  createTime: Date;
  updateTime: Date;
  name: string;
}

export interface TestSchema {
  User: User;
}
