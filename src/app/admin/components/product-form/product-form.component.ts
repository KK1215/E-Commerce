import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';
import { Products } from 'src/products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  authService: any;
  allProducts: Products[] = [];
  isFetching: boolean = false;

  constructor(private productsServices: ProductsService, private http: HttpClient, private route: Router,
  ) { }

  productform: FormGroup = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl('', Validators.required),
    }
  )






  ngOnInit(): void {}
  
  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: {
    id: string, title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number}) 
    {
    this.productsServices.createProduct(products);
    this.route.navigate(['/admin/products']);
  }
  private fetchProducts() {
    this.isFetching = true;
    this.productsServices.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
      window.location.reload();
    });
  }




}
