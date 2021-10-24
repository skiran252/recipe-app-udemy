import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeListResolver implements Resolve<Recipe[]> {
  constructor(private service: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.service.getRecipes();
  }
}
