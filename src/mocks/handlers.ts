import { API_LANDMARKS } from "@env";
import { rest } from "msw";
import { getRandomLandmarks } from "../factories/landmarksFactory";

const urlApi = API_LANDMARKS;

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(getRandomLandmarks(7)));
  }),
];
export default handlers;
