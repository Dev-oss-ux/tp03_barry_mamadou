import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-summary',
  templateUrl: './component-summary.component.html',
  styleUrls: ['./component-summary.component.css']
})
export class ComponentSummaryComponent {


  @Input() lastname : string = "";
  @Input() firstname : string = "";
  @Input() zipCode : string = "";
  @Input() tel : string = "";
  @Input() email : string = "";
  @Input() gender : string = "";
  @Input() login : string = "";
  @Input() password : string = "";
  @Input() passwordCheck : string = "";

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


  Close () {
    this.change.emit(false);
  }




}
