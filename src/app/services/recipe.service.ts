import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/shared/ingredient.model';
import { ShoppingListService } from '../components/shopping-list/shopping-list.service';
import { Recipe } from '../components/shared/recipe.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {
  public recipeAPI =
    'https://recipe-service-906e7-default-rtdb.firebaseio.com/recipies.json';
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice(); // slice() returns a copy of the array instead of the original array
  }

  getRecipe(id: string): Recipe {
    console.log(id,this.recipes);
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  generateID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters.
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push({ ...recipe, id: this.generateID() });
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(id: string, newRecipe: Recipe) {
    //find recipe by id and replace with new recipe
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    console.log(recipe);
    if (!recipe) {
      return;
    }
    const index = this.recipes.indexOf(recipe);
    this.recipes[index] = newRecipe;

    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: string) {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      return;
    }
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
