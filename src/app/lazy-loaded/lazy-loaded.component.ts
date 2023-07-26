import { Component, OnInit } from '@angular/core';
import {LazyService} from './service/lazy.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.scss']
})
export class LazyLoadedComponent implements OnInit {
  greeting: string = '';


  constructor(private lazyService: LazyService) { }

  ngOnInit(): void {
    this.greeting = this.lazyService.greeting;
  }

}
