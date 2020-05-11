import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../../model/items'
import { MessengerService } from '../../services/messenger.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemOfList:Items

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.itemOfList)
  }

}
