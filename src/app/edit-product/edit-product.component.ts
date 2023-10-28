import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productData:undefined | product;
  productMessage:undefined | string;
  constructor(private route:ActivatedRoute , private product:ProductService, private router:Router) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData=data;
    })
  }
  submit(data:product){
    console.warn(data);
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Porduct updated";
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
      this.router.navigate(['products']);
    }, 1000);
  }

}
