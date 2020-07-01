import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';


export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 5),
    new Ingredient('Kiwi', 11),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }

  addFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.getIngredients());
  }
}
