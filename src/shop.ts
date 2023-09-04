import { Item } from "./item";

export class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
    const boxenOfDoughnuts = new Item("Dozen Doughnuts", 7.99, "Buy the holes too. Don't leave em hangin'.");
    const canOpener = new Item("The opener of cans", 1.99, "Has spinny blades with handles.");
    const cheese = new Item("Tillamook Cheese: Medium", 8.99, "Medium. Solid creamy goodness.");
    const ribeyeSteak = new Item ("Ribeye Steak", 39.99, "One of the best cuts. Great marbling");
    const wine = new Item ("Wine Rioja", 10.99, "Sweet wine from Spain");
    const potatoes = new Item ("Golden Potato", 6.99, "Bag golden potatoes");

    this.items.push(boxenOfDoughnuts, canOpener, cheese, ribeyeSteak, wine, potatoes);
  }

  getItems(): Item[] {
    return this.items;
  }
}