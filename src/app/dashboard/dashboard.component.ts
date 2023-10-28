import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { CartService } from 'src/app/my-cart.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  allProducts:undefined | product[];
  constructor(private product:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
    this.product.allProducts().subscribe((data)=>{
      console.log(data);
      this.allProducts=data;
      this.allProducts.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }
}
