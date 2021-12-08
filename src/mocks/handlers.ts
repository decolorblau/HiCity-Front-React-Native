import { API_LANDMARKS } from "@env";
import { rest } from "msw";

const landmarksApi: string = API_LANDMARKS;

const Landmarks = [
  {
    title: "sol",
    city: "barcelona",
    category: "test",
    imageUrl: "https://image.jpg",
    introduction: "buen dia",
    description: "hoy hace sol",
    latitude: 43.54465,
    longitude: -3.32323,
    id: "61afd2ad687d24d24d494310",
    lastUpdate: "2021-12-08T14:53:23.412Z",
  },
  {
    title: "lluvia",
    city: "barcelona",
    category: "test",
    imageUrl: "https://image2.jpg",
    introduction: "buen dia",
    description: "hoy hace llueve",
    latitude: 43.544345,
    longitude: -5.32323,
    id: "62afd2ad687d24d24d494312",
    lastUpdate: "2021-12-08T14:54:23.412Z",
  },
  {
    title: "viento",
    city: "barcelona",
    category: "test",
    imageUrl: "https://persona-volando.jpg",
    introduction: "buen dia",
    description: "hoy hace tramuntana",
    latitude: 42.544345,
    longitude: -5.34523,
    id: "62afbbad687d24d24d4943bb",
    lastUpdate: "2020-12-08T14:54:23.412Z",
  },
];

const handlers = [
  rest.get(landmarksApi, async (req, res, ctx) => {
    const response = res(ctx.status(200), ctx.json(Landmarks));
    return response;
  }),
];
export default handlers;
