import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service'
import { Items } from '../../model/items'


@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  itemList:Items[]=[]

  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
      this.itemList=this.itemsService.getItems()
  }

}
