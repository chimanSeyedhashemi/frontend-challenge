import { IUser } from "../model/user.model";

declare module "sdk" {
  export function createUser(user: IUser): Promise<any>;
}
