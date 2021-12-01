import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  title: lorem.word(),
  imageUrl: datatype.string(1),
  city: lorem.word(),
  category: lorem.word(),
  introduction: lorem.words(10),
  description: lorem.words(20),
  latitude: datatype.number(),
  longitude: datatype.number(),
  lastUpdate: datatype.datetime(),
}));

export const getRandomLandmark = () => factory.build();
export const getRandomLandmarks = (count = 3) => factory.buildList(count);
