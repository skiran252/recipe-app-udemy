"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingEditComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ingredient_model_1 = require("../../shared/ingredient.model");
var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.subscription = new rxjs_1.Subscription();
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingListService.startedEditing.subscribe(function (index) {
            _this.editMode = true;
            _this.editedItemIndex = index;
            _this.editedItem = _this.shoppingListService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (editForm) {
        var value = editForm.value;
        var newIngredient = new ingredient_model_1.Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        this.editMode = false;
        editForm.reset();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    __decorate([
        core_1.ViewChild('editForm')
    ], ShoppingEditComponent.prototype, "slForm");
    ShoppingEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-edit',
            templateUrl: './shopping-edit.component.html',
            styleUrls: ['./shopping-edit.component.css']
        })
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
exports.ShoppingEditComponent = ShoppingEditComponent;
