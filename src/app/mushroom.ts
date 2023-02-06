export class Mushroom {
  name = "";
  edible = false;
  poisonous = false;
  img = '';
  description = "";
  toxicity = "";

  constructor(name: string, edible: boolean, poisonous: boolean, img: string, description: string, toxicity: string) {
    this.name = name;
    this.edible = edible;
    this.poisonous = poisonous;
    this.img = img;
    this.description = description;
    this.toxicity = toxicity;
  }
}
