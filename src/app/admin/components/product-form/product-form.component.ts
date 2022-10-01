import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/products.model';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  authService: any;
  allProducts: Products[] = [];
  isFetching: boolean = false;
  editMode: boolean = false;
  currentProductId: string | any;


  constructor(private productsServices: ProductsService, private http: HttpClient, private route: Router, private activatedRouter: ActivatedRoute,
  ) { }

  public productform: FormGroup = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl('', Validators.required),
    }
  )
  ngOnInit(): void {
    this.fetchProducts();

  }



  onProductCreate(products: {
    id: string, title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
  }) {
    if (!this.editMode) {
      this.productsServices.createProduct(products);
      this.route.navigate(['admin/products']);
    }
    else {
      this.productsServices.updateProduct(this.currentProductId, products);
      this.route.navigate(['admin/products']);
    }
  }
  private fetchProducts() {
    this.isFetching = true;
    this.productsServices.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;



      let id = this.activatedRouter.snapshot.queryParams['id'];
      console.log(id);
      this.currentProductId = id;
      let currentProducts = this.allProducts.find((p) => {
        return p.id === id;

      });
      console.log(currentProducts);
      this.productform.setValue({

        id: currentProducts?.id,
        title: currentProducts?.title,
        price: currentProducts?.price,
        description: currentProducts?.description,
        category: currentProducts?.category,
        imageUrl: currentProducts?.imageUrl

      })
      this.editMode = true;
    });
  }
}
