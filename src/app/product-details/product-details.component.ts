import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { products} from '../products'
import { CartService } from '../cart.service' 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  addToCart(product){
    this.CartService.addToCart(product);
    window.alert(product.name + ' has been added to the cart!');
  }


  product;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    this.product = products.find(x => x.id === productIdFromRoute)
  }

}