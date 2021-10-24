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
var operators_1 = require("rxjs/operators");
var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingListService, http) {
        this.shoppingListService = shoppingListService;
        this.http = http;
        this.recipeAPI = 'https://recipe-service-906e7-default-rtdb.firebaseio.com/recipies.json';
        this.recipeSelected = new rxjs_1.Subject();
        this.recipeChanged = new rxjs_1.Subject();
        this.recipes = [
            {
                id: '1',
                name: 'Schnitzel',
                description: 'This is a test description',
                imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
                ingredients: [
                    {
                        name: 'Meat',
                        amount: 1
                    },
                    {
                        name: 'French Fries',
                        amount: 20
                    },
                ]
            },
            {
                id: '3',
                name: 'Big Fat Burger',
                description: 'This is a test description',
                imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
                ingredients: [
                    {
                        name: 'Buns',
                        amount: 2
                    },
                    {
                        name: 'Meat',
                        amount: 1
                    },
                ]
            },
        ];
        // this.fetchRecipes().subscribe((recipes) => {
        //   console.log(recipes);
        //   this.recipes = recipes;
        //   this.recipeChanged.next(this.recipes.slice());
        // });
    }
    RecipeService.prototype.fetchRecipes = function () {
        return this.http.get(this.recipeAPI).pipe(operators_1.map(function (data) {
            var resultArray = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    resultArray.push(__assign(__assign({}, data[key]), { id: key }));
                }
            }
            return resultArray;
        }));
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice(); // slice() returns a copy of the array instead of the original array
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes.find(function (recipe) { return recipe.id === id; });
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (id, newRecipe) {
        //find recipe by id and replace with new recipe
        var recipe = this.recipes.find(function (recipe) { return recipe.id === id; });
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
