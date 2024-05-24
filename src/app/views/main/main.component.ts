import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<boolean>;
  popup: boolean;

  constructor() {

    this.popup = false;

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next();
      }, 10000);
    })
  }

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(() => {
      this.popup = true;
      console.log(this.popup);
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  close() {
    this.popup = false;
    console.log(this.popup);
  }

}
