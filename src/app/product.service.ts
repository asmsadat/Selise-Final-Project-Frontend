import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/app//data-type';

type NewType = object;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/product',data);
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product);
  }
  allProducts(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }
}
