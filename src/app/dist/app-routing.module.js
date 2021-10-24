"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var recipe_start_component_1 = require("./components/recipe-start/recipe-start.component");
var recipe_detail_component_1 = require("./components/recipes/recipe-detail/recipe-detail.component");
var recipe_edit_component_1 = require("./components/recipes/recipe-edit/recipe-edit.component");
var recipes_component_1 = require("./components/recipes/recipes.component");
var shopping_list_component_1 = require("./components/shopping-list/shopping-list.component");
var routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: recipes_component_1.RecipesComponent,
        children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            {
                path: 'new',
                component: recipe_edit_component_1.RecipeEditComponent
            },
            {
                path: ':id',
                component: recipe_detail_component_1.RecipeDetailComponent
            },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent },
        ]
    },
    {
        path: 'shopping-list',
        component: shopping_list_component_1.ShoppingListComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
