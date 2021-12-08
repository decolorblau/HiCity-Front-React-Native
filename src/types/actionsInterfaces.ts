import IUser from "./userInterfaces";

export interface ILandmarksAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmarks?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmark?: any;
  id?: string;
}
export interface IUserAction {
  type: string;
  user?: IUser;
  isAuthenticated?: boolean;
}
