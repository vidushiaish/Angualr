import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentAngular';
username = 'Vidushi Aishwarya';

//secondNumber = '';

/*onUpdate(event:Event){
	this.firstNumber= (<HTMLInputElement>event.target).value;
	}
	
onUpdate1(event: Event){
		this.secondNumber= (<HTMLInputElement>event.target).value;
	}
	*/
		onClickEvent(){
			this.username = '';
		}
	}


