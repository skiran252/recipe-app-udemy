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
exports.DataStorageService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService) {
        this.http = http;
        this.recipeService = recipeService;
        this.recipeAPI = 'https://recipe-service-906e7-default-rtdb.firebaseio.com/recipies.json';
    }
    DataStorageService.prototype.storeRecipes = function () {
        var recipes = this.recipeService.getRecipes();
        this.http.put(this.recipeAPI, recipes).subscribe(function (response) { });
    };
    DataStorageService.prototype.fetchRecipes = function () {
        var _this = this;
        this.http
            .get(this.recipeAPI)
            .pipe(operators_1.map(function (recipes) {
            return recipes.map(function (recipe) {
                return __assign(__assign({}, recipe), { ingedients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }))
            .subscribe(function (recipes) {
            if (recipes)
                _this.recipeService.setRecipes(recipes);
        });
    };
    DataStorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
