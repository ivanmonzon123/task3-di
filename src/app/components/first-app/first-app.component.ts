import { Component, OnInit } from '@angular/core';
import {AService} from '../../module-a/services/a.service';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.scss']
})
export class FirstAppComponent implements OnInit {
  greeting: string = '';

  constructor(private aService: AService) { }

  ngOnInit(): void {
    this.greeting = this.aService.greeting;
  }

}
