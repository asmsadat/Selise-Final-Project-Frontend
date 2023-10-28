import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/my-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(i: any) {
    this.cartService.removeCartItem(i);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

}
