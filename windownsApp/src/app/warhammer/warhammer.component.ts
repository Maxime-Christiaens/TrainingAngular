import { Component, OnInit } from '@angular/core';
import { TestServiceService } from "./../services/test-service.service";

@Component({
  selector: 'app-warhammer',
  templateUrl: './warhammer.component.html',
  styleUrls: ['./warhammer.component.scss']
})
export class WarhammerComponent implements OnInit {
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

  ngOnInit() {
  }

}
