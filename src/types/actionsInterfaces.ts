import ILandmark from "./landmarkInterface";
import IUser from "./userInterfaces";

export interface ILandmarksAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmarks?: any;
  landmark?: ILandmark;
  id?: string | undefined;
  isAuthenticated: boolean;
}
export interface IUserAction {
  type: string;
  user?: IUser;
}
