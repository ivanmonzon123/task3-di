import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {

  constructor() { }

  get greeting(): string{
    return "Hello, from lazy-service"
  }
}
