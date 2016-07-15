import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ImTabs} from './components/im-tabs/im-tabs';
import { ImTab } from './components/im-tab/im-tab';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ImTabs, ImTab]
})
export class AppComponent {
  topList:Array<string>;
  leftList:Array<string>;
  topSelection = null;
  leftSelection = null;
  leftData;
  content;
  reset:Boolean = null;
  data = [
	  {"top": "Eva", "left" :["write mail to Eva", 'get contact details', 'visit profile']},
	  {"top": "Bob", "left" :["write mail to Bob"]},
	  {"top": "Gui", "left" :["write mail to Gui", 'visit profile', 'ask for help']}
  ];

  constructor(private http:Http) {}

  selectTop(index) {
  	if(this.topSelection !== index) {
  		this.reset = !this.reset;
  		this.leftSelection = null;
  	}

  	this.topSelection = index;
	this.leftData = this.data[index].left;
  }

  selectLeft(index) {
  	this.leftSelection = index;
  	let top = this.data[this.topSelection].top;
  	let left = this.data[this.topSelection].left[index];
  	this.getContent(top, left);
  }

  getContent(top, left) {
  	this.http.get(`https://x2-server.herokuapp.com/api/contexts?top=${top}&left=${left}`)
  	.map(value => value.json())
  	.subscribe(value => {
  		this.content = value.content;
  		console.log(value);
  	});
  }
}
