import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
color1: string = 'gray';
color2: string = 'gray';
color3: string = 'gray';

checkPassword() {
  this.color1 = this.color2 = this.color3 = 'gray';
  
  if (this.password) {
    if (this.password.length >= 8) {
      if (/[a-zA-Z]/.test(this.password) && /\d/.test(this.password) && /[!@#$%^&*()_+]/.test(this.password)) {
        this.color1 = this.color2 = this.color3 = 'green';
      } else if (/[a-zA-Z]/.test(this.password) && /\d/.test(this.password)) {
        this.color1 = this.color2 = 'yellow';
      } else {
        this.color1 = 'red';
      }
    } else {
      this.color1 = 'red';
    }
  }
}
}


