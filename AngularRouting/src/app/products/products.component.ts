import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  /**
   *
   */
  constructor(private route : ActivatedRoute , private router : Router) {}
  showShirts(){
    this.router.navigate(['tshirts'],{relativeTo: this.route});
  }
  showTrousers(){
    this.router.navigate(['trousers'],{relativeTo: this.route});
  }
}
