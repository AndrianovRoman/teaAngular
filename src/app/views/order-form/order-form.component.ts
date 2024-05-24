import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  success: boolean = false;
  error: boolean = false;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.pattern('^[А-Яа-я]+$'), Validators.required]),
    lastName: new FormControl('', [Validators.pattern('^[А-Яа-я]+$'), Validators.required]),
    phone: new FormControl('', [Validators.pattern('^(8|\\+7|7)?[\\d\\- ]{10,10}$'), Validators.required]),
    country: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.pattern('^[а-яА-Я0-9,\\.\\s\\/\\-]+$'), Validators.required]),
    product: new FormControl(''),
    comment: new FormControl('')
  });

  get name() {
    return this.orderForm.get('name');
  }

  get lastName() {
    return this.orderForm.get('lastName');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get country() {
    return this.orderForm.get('country');
  }
  get zip() {
    return this.orderForm.get('zip');
  }

  get address() {
    return this.orderForm.get('address');
  }

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product']
        });
      }
    });


  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  signIn() {

    this.productService.createOrder({
      name: <string>this.orderForm.value.name,
      last_name: <string>this.orderForm.value.lastName,
      phone: <string>this.orderForm.value.phone,
      country: <string>this.orderForm.value.country,
      zip: <string>this.orderForm.value.zip,
      product: <string>this.orderForm.value.product,
      address: <string>this.orderForm.value.address,
      comment: <string>this.orderForm.value.comment,
    })
      .subscribe(response => {
        if(response.success && !response.message) {
          this.success = true;
        } else {
          this.error = true;
        }
      })
  }


}
