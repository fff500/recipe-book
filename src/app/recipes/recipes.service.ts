import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'Vegetable French cuisine dish',
      'https://img1.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/1571_2_1437661403.jpg?tr=w-414,',
      [
        new Ingredient('Tomatoes', 1),
        new Ingredient('Aubergine', 2)
      ]
    ),
    new Recipe(
      'Pizza',
      'Traditional Italian open pie',
      'https://image.freepik.com/free-photo/_140725-1200.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Sausage', 2),
        new Ingredient('Mushrooms', 3)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addFromRecipe(ingredients);
  }
}
