"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.ingredients = [];
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
