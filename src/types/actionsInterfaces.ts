import ILandmark from "./landmarkInterface";

export interface ILandmarksAction {
  type: string;
  landmarks?: any;
  landmark?: ILandmark | undefined;
  id?: string;
}
