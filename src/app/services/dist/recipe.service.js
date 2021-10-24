"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingListService, http) {
        this.shoppingListService = shoppingListService;
        this.http = http;
        this.recipeAPI = 'https://recipe-service-906e7-default-rtdb.firebaseio.com/recipies.json';
        this.recipeSelected = new rxjs_1.Subject();
        this.recipeChanged = new rxjs_1.Subject();
        this.recipes = [];
    }
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice(); // slice() returns a copy of the array instead of the original array
    };
    RecipeService.prototype.getRecipe = function (id) {
        console.log(id, this.recipes);
        var recipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        return recipe;
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService.prototype.generateID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters.
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(__assign(__assign({}, recipe), { id: this.generateID() }));
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (id, newRecipe) {
        //find recipe by id and replace with new recipe
        var recipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        console.log(recipe);
        if (!recipe) {
            return;
        }
        var index = this.recipes.indexOf(recipe);
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        var recipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        if (!recipe) {
            return;
        }
        var index = this.recipes.indexOf(recipe);
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
