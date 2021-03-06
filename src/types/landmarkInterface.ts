export default interface ILandmark {
  title?: string;
  city?: string;
  imageUrl?: any;
  category?: string;
  latitude: number;
  longitude: number;
  lastUpdate?: Date;
  introduction?: string;
  description?: string;
  id?: string;
  _id?: string;
  landamark?: ILandmark;
}
