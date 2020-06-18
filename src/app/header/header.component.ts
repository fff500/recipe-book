import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  onSelect(event, feature) {
    event.preventDefault();
    this.featureSelected.emit(feature);
  }
}
