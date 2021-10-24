"use strict";
exports.__esModule = true;
exports.ShoppingListService = void 0;
var ingredient_model_1 = require("../shared/ingredient.model");
var rxjs_1 = require("rxjs");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
        this.ingredients = [
            new ingredient_model_1.Ingredient('Apples', 5),
            new ingredient_model_1.Ingredient('Tomatoes', 10),
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
