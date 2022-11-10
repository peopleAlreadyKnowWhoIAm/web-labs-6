
export class ElectricDecoration {
  
    constructor(
    name, //String
    description, //String
    amountAvalaible,//Number
    colors, //String
    length, //Float
    power, //Integer
    price, //Float
    imageUrls, //List of string 
    id // Number
  ) {
    this.name = name;
    this.description = description;
    this.amountAvalaible = amountAvalaible;
    this.colors = colors;
    this.length = length;
    this.power = power;
    this.price = price;
    this.id = id;

    this.imageUrls = imageUrls;
  }

  //Translate object and format usage
  getCorrectedEntries() {
    let obj = Object.assign({}, this);
    delete obj.id;
    obj["usage"] = this.usage.toLowerCase().replace("_"," ");
    return Object.entries(obj);
  }

  getEntries() {
    let obj = Object.assign({}, this);
    delete obj.id;
    return Object.entries(obj);
  }
}
