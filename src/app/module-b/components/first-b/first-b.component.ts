import { Component, OnInit } from '@angular/core';
import {AService} from '../../../module-a/services/a.service';

@Component({
  selector: 'app-first-b',
  templateUrl: './first-b.component.html',
  styleUrls: ['./first-b.component.scss']
})
export class FirstBComponent implements OnInit {

  greeting: string = '';
  constructor(private aService: AService) { }

  ngOnInit(): void {
    this.greeting = this.aService.greeting;
  }

}
