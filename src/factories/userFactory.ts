import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: lorem.word(),
  email: datatype.string(1),
  password: datatype.string(1),
  imageUrl: datatype.string(1),
  folders: datatype.array(),
}));

export const getRandomUser = () => factory.build();
