import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  ingredientAmount = '';

  constructor() { }

  ngOnInit(): void {
  }
  addItem(event) {
    event.preventDefault();
    const name = this.nameInputRef.nativeElement.value;
    const amount = +this.ingredientAmount;
    const item = new Ingredient(name, amount);
    this.ingredientAdded.emit(item);
  }
}
