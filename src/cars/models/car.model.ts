import IModelClass from "./abstract/IModelClass";

export default class Car implements IModelClass {
  id: string;
  name: string;
  model: string;
  year: number;
  plate: string;
  imageUrl: string
}
