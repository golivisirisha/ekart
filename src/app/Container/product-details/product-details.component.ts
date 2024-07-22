import { Component,Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'product-details',
  standalone: true,
  imports: [ProductsComponent,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',

})
export class ProductDetailsComponent {

@Input() productlistcomp: ProductsComponent=undefined;

product:Product;

ngOnInit(){
  this.product=this.productlistcomp.selectedProduct;
}

}

