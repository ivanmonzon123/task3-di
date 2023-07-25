import {Component, OnInit} from '@angular/core';
import {LazyService} from '../../lazy-loaded/service/lazy.service';
import {AService} from '../../module-a/services/a.service';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.scss']
})
export class FirstAppComponent implements OnInit {
  greeting: string = '';

  constructor(
    private aService: AService) {
  }
  // constructor(
  //   private aService: AService,
  //   private lazyService: LazyService) {
  // }


  ngOnInit(): void {
    this.greeting = this.aService.greeting;
    // this.greeting = this.lazyService.greeting;
  }

}
