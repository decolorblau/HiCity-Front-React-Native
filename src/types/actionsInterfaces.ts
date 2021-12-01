import ILandmark from "./landmarkInterface";

export interface ILoadLandmarksAction {
  type: string;
  landmarks?: any;
  landmark?: ILandmark | undefined;
}
