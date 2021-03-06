import { Component } from '@angular/core';
import { TestServiceService } from "./services/test-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faction = ["Bretonie", "Chaos", "Hauts Elfes", "Elfes Noirs", "Elfes des bois", "Empire", "Nains", "Hommes-bêtes", "Hommes-Lezard", "Pirates Vampires", "Vampire", "Rois des tombes", "Skavens"]
  number1 = 0;
  number2 = 1;

  string : string;
  constructor(private TestServiceService: TestServiceService ){
    this.string = this.TestServiceService.liste[0];
  }
  random(){
    this.number1 = Math.floor(Math.random()*this.faction.length)
    this.number2 = Math.floor(Math.random()*this.faction.length)
  }
  
  title:string = 'Random Warhammer';
}
