import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/product.service';
import { faTrash , faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList:undefined | product[]
  productMessage:undefined | string;
  icon=faTrash;
  editicon=faEdit;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.updatedProductList();
  }
  deleteProduct(id:number){
    console.warn("delete id",id);

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product deleted successfully"
        this.updatedProductList();
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }
  updatedProductList(){
    this.product.productList().subscribe((result)=>{
      if(result){
        this.productList=result;
      }
    })
  }
}
