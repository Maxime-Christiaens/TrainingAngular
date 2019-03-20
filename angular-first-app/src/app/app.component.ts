import { Component, Input } from '@angular/core';

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
    }, 1500)
  }
  onEteindre() {
    alert("hello world ")
  }
  warhammer = [
    {
      name: "Bretonnie",
      trait : "Knights EveryWhere"
    },
    {
      name: "Vampire",
      trait : "Zombies EveryWhere"
    },
    {
      name: "Dwarfs",
      trait : "Canons EveryWhere "
    }
  ]
  getFactionColor (){
    return "red";
  }
  public input :string
  getBGColor(){
    return this.input
  }
  date = new Date();
}
