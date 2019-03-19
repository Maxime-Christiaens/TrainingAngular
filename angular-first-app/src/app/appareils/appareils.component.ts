import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  @Input() appareilName: string;

  skavens: string = "Dead"
  machineName: string = "Chaudière"
  machineStatus: string = "ON"

  public input: string = ""
  
  getInput (){
    console.log(this.input)
  }
  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.machineStatus
  }
  getColor() {
    return this.input
  }
}
