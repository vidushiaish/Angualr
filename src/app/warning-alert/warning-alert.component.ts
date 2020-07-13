import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {


  constructor() { }
warningMessage = "No Warning. All is well! :)"
onWarningClick() {
	this.warningMessage = "Either Zero or negative no. use!"
}
  ngOnInit(): void {
  }

}
