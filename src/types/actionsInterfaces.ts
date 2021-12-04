import ILandmark from "./landmarkInterface";
import IUser from "./userInterfaces";

export interface ILandmarksAction {
  type: string;
  landmarks?: any;
  landmark?: ILandmark;
  id?: string | undefined;
}
export interface IUserAction {
  type: string;
  user?: IUser;
}
