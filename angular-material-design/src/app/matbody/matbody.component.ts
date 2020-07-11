import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matbody',
  templateUrl: './matbody.component.html',
  styleUrls: ['./matbody.component.css']
})
export class MatbodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    //ToDo: open and close sidenav
  }

}
