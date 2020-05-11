import { Injectable } from '@angular/core';
import { Items } from '../model/items'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

items: Items[]= [
  new Items (1,'Item 1', 'This is very cool phone',900),
  new Items (2,'Item 2', 'This is very cool phone',800),
  new Items (3,'Item 3', 'This is very cool phone',1000),
  new Items (4,'Item 4', 'This is very cool phone',700),
  new Items (5,'Item 5', 'This is very cool phone',900),
  new Items (6,'Item 6', 'This is very cool phone',850),
]

  constructor() { }

  getItems():Items[] {
    return this.items
  }
}
