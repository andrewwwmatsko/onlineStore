import { Component, OnInit, } from '@angular/core';
import { MessengerService } from '../../services/messenger.service'
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartItems= [
 
  ];
  cartTotal=0;

  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((item:Items) => {
      this.addItemToCart(item)    
    })
  }

  addItemToCart(item:Items) {

    let itemExist=false;

    for(let i in this.cartItems){
      if(this.cartItems[i].itemId===item.id) {
        this.cartItems[i].qty++
        itemExist=true
        break;
      }
    }

      if(!itemExist){
        this.cartItems.push({
          itemId:item.id,
          itemName:item.name,
          qty:1,
          price:item.price
        })
      }
      this.cartTotal=0;
      this.cartItems.forEach(item=> {
        this.cartTotal+=(item.qty * item.price)
      })
    }
  }
  

