import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
        'Initial test',
        'Desc for testing',
        'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/home-style-lamb-curry.jpg'
    ),
    new Recipe(
        'Second recipe',
        'Desc #2',
        'https://assets.rbl.ms/22867002/origin.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
