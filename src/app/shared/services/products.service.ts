import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'src/products.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  router: any;

  constructor(private http: HttpClient) { }

  createProduct(Products: {
    id: string, title: string;
    price: number,
    description: string;
    category: string,
    imageUrl: string,
    quantity: number
  }) {

    const headers = new HttpHeaders({ 'myHeaders': "Komal" });
    Products.quantity = 1;
    return this.http.post<any>('https://nkapp-61e84-default-rtdb.firebaseio.com/products.json', Products, { headers: headers })
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchProduct() {
    return this.http.get<{ [key: string]: Products }>('https://nkapp-61e84-default-rtdb.firebaseio.com/products.json')
      .pipe(map((res) => {
        const products = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key })
          }
        }
        return products;
      }))
  }
  deleteProduct(id: string): Observable<any[]> {
    return this.http.delete<any>('https://nkapp-61e84-default-rtdb.firebaseio.com/products/' + id + '.json');

  }
  deletAllProducts(): Observable<any[]> {
    return this.http.delete<any>('https://nkapp-61e84-default-rtdb.firebaseio.com/products.json')
  }
}
