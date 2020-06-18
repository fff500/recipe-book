import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  // log(p) {
  //   this.selectedRecipe = p;
  //   console.log(this.selectedRecipe);
  // }

  // showRecipe(recipeIndex) {
  //   this.recipeToShowIndex = recipeIndex;
  // }
}
