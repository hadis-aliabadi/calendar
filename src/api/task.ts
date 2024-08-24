import { get } from "./method";


export const getTasks = () =>
  get('/tasks').then((res) => res);