import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

allowClick = false;
number = [];

  constructor() { 
	
		//setTimeout(() => {
		//this.allowServer = true;
	//},2000);
	this.number.push();
	}
	
	allowedClick(){
		this.allowClick= !this.allowClick;
		this.number.push(this.number.length +1);
	}


  ngOnInit(): void {
  }

}
