import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/shopping-cart.service';
import { Products } from 'src/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public productList: any = [];
  searchKey:string="";
  public filterCategory: any;
  allProducts: Products[] = [];
  isFetching: boolean = false;
  isUserAdmin = false;
  inputnumber: number = 0;
  constructor(private productsServices: ProductsService, private shoppingcartServices: CartService, private router: Router) { }


  ngOnInit(): void {
    if (localStorage.getItem('role') != null) {
      this.isUserAdmin = localStorage.getItem('role')?.toString() === 'admin';
    }

    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  

  private fetchProducts() {
    this.isFetching = true;
    this.productsServices.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.filterCategory =products;
      this.productList.forEach((a:any)=>{if(a.category === "women's category" || a.category === "men's category"){
        a.category = "fashion"
      }})

      


    });
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
  buyNow() {

  }

  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
    if(a.categogy == category || category == ''){
      return a;
    }
  })
}
}

