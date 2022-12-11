import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  NAVBAR_TITLE: string = 'PILNUSEK - dziennik lekcyjny';

  constructor() { }

  ngOnInit(): void {
  }

}
