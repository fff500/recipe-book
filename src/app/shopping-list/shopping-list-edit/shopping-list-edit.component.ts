import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;

  ingredientAmount = '';

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  addItem(event) {
    event.preventDefault();
    const name = this.nameInputRef.nativeElement.value;
    const amount = +this.ingredientAmount;
    const item = new Ingredient(name, amount);
    this.shoppingListService.addIngredients(item);
  }
}
