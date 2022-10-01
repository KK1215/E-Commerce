import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/shopping-cart.service';
import { Products } from 'src/products.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public productList: any;
  searchKey:string="";
  public grandTotal !: number;
  public filterCategory: any;
  allProducts: Products[] = [];
  isFetching: boolean = false;
  isUserAdmin = false;
  inputnumber: number = 0;
  currentProducts:string|any;
  editMode:boolean = false;
  formGroup: any;

  constructor(private productsServices: ProductsService, private shoppingcartServices: CartService, private router: Router, private formBuilder :FormBuilder) { }


  ngOnInit(): void {
    if (localStorage.getItem('role') != null) {
      this.isUserAdmin = localStorage.getItem('role')?.toString() === 'admin';
    }

    this.shoppingcartServices.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
       Object.assign(a,{quantity:1,total:a.price*a.quantity});
      });
    });
      
    this.shoppingcartServices.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }
  
  private fetchProducts() {
    this.isFetching = true;
    this.productsServices.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.filterCategory = products;
    });
  }
  onEditProduct(id:string){
    this.router.navigate(['admin/products/new'], { queryParams: { id:id } });
  }

  onDeleteProduct(id: string) {
    this.productsServices.deleteProduct(id).subscribe(() => {
      this.allProducts.map((a: any, index: any) => {
        if (a.id === id) {
          this.allProducts.splice(index, 1);
        }
      })

    });
  }
  
  onDeleteAllProduct() {
    this.productsServices.deletAllProducts().subscribe(() => {
      this.allProducts = [];
    });
  }

  onAddToCart(item: any) {
    this.shoppingcartServices.addtoCart(item)
  }
 
  buyNow(item:any) {
    this.shoppingcartServices.addtoCart(item)
  }

  filter(category:string){
    this.filterCategory = this.allProducts.filter((a:any)=>{
    if(a.category == category || category ==''){
      return a;
    }
  })
 
}

}

