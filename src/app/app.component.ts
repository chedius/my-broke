import { Component , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() Message = new EventEmitter<string>()
  title = 'my-broke';

  off = 'Limited features mode'
  on = 'All possibilities are available for you'
  exit = 'You have left the site'

  offverification() {
    if (localStorage.getItem('username') === null) {
      return this.off;
    }else{
      return this.on;
    }
  }

  Exit() {
      localStorage.clear();
  }

}
