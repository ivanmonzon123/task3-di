import { Injectable } from '@angular/core';

@Injectable()
export class AService {

  constructor() { }

  get greeting(): string{
    return "Hello, from AService";
  }
}
