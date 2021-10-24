"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var recipe_start_component_1 = require("./components/recipe-start/recipe-start.component");
var recipe_detail_component_1 = require("./components/recipes/recipe-detail/recipe-detail.component");
var recipe_edit_component_1 = require("./components/recipes/recipe-edit/recipe-edit.component");
var recipe_item_component_1 = require("./components/recipes/recipe-list/recipe-item/recipe-item.component");
var recipe_list_component_1 = require("./components/recipes/recipe-list/recipe-list.component");
var recipe_service_1 = require("./services/recipe.service");
var recipes_component_1 = require("./components/recipes/recipes.component");
var dropdown_directive_1 = require("./components/shared/dropdown.directive");
var shopping_edit_component_1 = require("./components/shopping-list/shopping-edit/shopping-edit.component");
var shopping_list_component_1 = require("./components/shopping-list/shopping-list.component");
var shopping_list_service_1 = require("./components/shopping-list/shopping-list.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                recipes_component_1.RecipesComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_edit_component_1.ShoppingEditComponent,
                dropdown_directive_1.DropdownDirective,
                recipe_start_component_1.RecipeStartComponent,
                recipe_edit_component_1.RecipeEditComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                common_1.CommonModule
            ],
            providers: [shopping_list_service_1.ShoppingListService, recipe_service_1.RecipeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
