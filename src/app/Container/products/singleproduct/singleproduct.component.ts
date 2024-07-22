import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from './../../../models/Product';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  @Input()
  product:Product;

}
