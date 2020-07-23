  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one';
  items = ["Angular","JavaScript"];
  newItem = "";
  PushItem = function() {
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  RemoveItem = function(index){
    this.items.splice(index,1)
  }
}
