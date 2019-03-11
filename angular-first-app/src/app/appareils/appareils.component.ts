import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  machineName = "Chaudière"
  machineStatus = "ON"
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.machineStatus
  }
}
