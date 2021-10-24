import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/shared/recipe.model';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public recipeAPI =
    'https://recipe-service-906e7-default-rtdb.firebaseio.com/recipies.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.recipeAPI, recipes).subscribe((response) => {});
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(this.recipeAPI)
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingedients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes: Recipe[]) => {
        if (recipes) this.recipeService.setRecipes(recipes);
      });
  }
}
