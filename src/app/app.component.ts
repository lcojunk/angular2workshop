import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Workshop';
  subtitle='11.05.2017-13.05.2017';

  clicked($event){
    console.log("was clicked!",$event);
  }

}
