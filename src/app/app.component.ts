import { Component } from '@angular/core';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private storageService: DataStorageService) {
    this.storageService.fetchRecipes();
  }
}
