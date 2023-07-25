import { Injectable } from '@angular/core';

@Injectable()
export class AService {

  constructor() { }

  greeting(): void{
    console.warn("Hello, from AService")
  }
}
