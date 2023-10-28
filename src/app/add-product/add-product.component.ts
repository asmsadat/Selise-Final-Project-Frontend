import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductMessage:string|undefined;
  constructor(private product:ProductService, private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
  }
  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage="Product added successfully"

      }
    })
      setTimeout(() =>{
      this.addProductMessage=undefined,
      this.router.navigate(['products']);
    }, 1000);
  }
}
