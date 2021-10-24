import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit,OnDestroy {

  subscription: Subscription = new Subscription();
  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
    this.subscription = this.recipeservice.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
