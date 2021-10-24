import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService) {}
  onStoreData() {
    this.storageService.storeRecipes();
  }
  onFetchData() {
    this.storageService.fetchRecipes();
  }
}
