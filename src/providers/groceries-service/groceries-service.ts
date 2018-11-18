import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {
  items = [
    {
      name: "Milk",
      quanity: 3,
      price: 3
    },
    {
      name: "Eggs",
      quanity: 3,
      price: 3
    },
    {
      name: "Bacon",
      quanity: 3,
      price: 3
    },
    {
      name: "Pancakes",
      quanity: 3,
      price: 3
    }
  ];

  constructor(public http: HttpClient) {
    console.log("Hello GroceriesServiceProvider Provider");
  }
  getItems(){
    return this.items
  }
  removeItem(index) {
    this.items.splice(index, 1);
  }
  addItem(item){
    this.items.push(item)
  }
  showItemPrompt(item){
    this.items.push(item)

  }
  editItemPrompt(item, index){
    this.items[index] = item

  }
}
