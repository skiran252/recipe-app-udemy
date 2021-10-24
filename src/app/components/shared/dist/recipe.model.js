"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients, id) {
        this.ingredients = [];
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.id = id;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
