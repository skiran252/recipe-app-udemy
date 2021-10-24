import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogggingService {
  constructor() {}

  logStatusChange(message: string) {
    console.log('an item selected');
  }
}
