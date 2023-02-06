import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent {

  constructor() {
  }

  ngLastname : string = "";
  ngFirstname : string = "";
  ngZipCode : string = "";
  ngTel : string = "";
  ngEmail : string = "";
  ngGender : string = "";
  ngLogin : string = "";
  ngPassword : string = "";
  ngPasswordCheck : string = "";

  showSummary = false


  clicChange (val : boolean) {
    this.showSummary = val
  }

}
