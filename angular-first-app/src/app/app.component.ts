import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yes Yes, It is my app '
  isAuth = false
  constructor(){ //executer au moment de la création du component
    setTimeout(
      () => {
        this.isAuth = true
    }, 1000)
  }
  onEteindre() {
    alert("hello bitch")
  }
}
