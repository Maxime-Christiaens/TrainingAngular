import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testouille',
  templateUrl: './testouille.component.html',
  styleUrls: ['./testouille.component.scss']
})
export class TestouilleComponent implements OnInit {
  title: string = "Je test testouille"
  constructor() { }

  ngOnInit() {
  }

}
