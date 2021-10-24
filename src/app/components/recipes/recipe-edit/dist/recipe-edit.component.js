"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeEditComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
        this.recipeForm = new forms_1.FormGroup({});
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new forms_1.FormArray([]);
        var recipeId = this.recipeService.generateID();
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            recipeId = recipe.id;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new forms_1.FormGroup({
                        name: new forms_1.FormControl(ingredient.name, [forms_1.Validators.required]),
                        amount: new forms_1.FormControl(ingredient.amount, [
                            forms_1.Validators.required,
                            forms_1.Validators.pattern(/^[1-9]+[0-9]*$/),
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(recipeName, forms_1.Validators.required),
            description: new forms_1.FormControl(recipeDescription, forms_1.Validators.required),
            imagePath: new forms_1.FormControl(recipeImagePath, forms_1.Validators.required),
            ingredients: recipeIngredients,
            id: new forms_1.FormControl(recipeId)
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    Object.defineProperty(RecipeEditComponent.prototype, "ingredientsControls", {
        get: function () {
            return this.recipeForm.get('ingredients').controls;
        },
        enumerable: false,
        configurable: true
    });
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new forms_1.FormGroup({
            name: new forms_1.FormControl(null, [forms_1.Validators.required]),
            amount: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^[1-9]+[0-9]*$/),
            ])
        }));
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
        this.recipeForm.reset();
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            templateUrl: './recipe-edit.component.html',
            styleUrls: ['./recipe-edit.component.css']
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
