import { Component, OnInit } from '@angular/core';
import {AService} from '../../services/a.service';

@Component({
  selector: 'app-first-a',
  templateUrl: './first-a.component.html',
  styleUrls: ['./first-a.component.scss']
})
export class FirstAComponent implements OnInit {

  greeting: string = '';
  constructor(private aService: AService) { }

  ngOnInit(): void {
    this.greeting = this.aService.greeting;
  }

}
