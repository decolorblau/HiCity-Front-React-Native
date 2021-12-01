export default interface IUser {
  name?: string;
  password: string;
  email: string;
  folders?: Array<string>;
}
