// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { CheckOutDetails } from 'src/app/check-out-details.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CheckOutDetailsService {

//   constructor(private http: HttpClient){ }

//   createProduct(Products: {
//     id: string, title: string;
//     price: number,
//     description: string;
//     category: string,
//     imageUrl: string,
//     quantity: number
//   }) {

//     const headers = new HttpHeaders({ 'myHeaders': "Komal" });
//     Products.quantity = 1;
//     return this.http.post<any>('https://nkapp-61e84-default-rtdb.firebaseio.com/products.json',check , { headers: headers })
//       .subscribe((res) => {
//         console.log(res);
//       });
//   }

// }
