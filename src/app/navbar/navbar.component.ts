import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuLinks = [
    ["home", "https://v4-alpha.getbootstrap.com/getting-started/download/"],
    ["us", "https://www.google.com"],
    ["port", "https://v4-alpha.getbootstrap.com/getting-started/download/"],
    ["cont", "https://www.google.com"]
  ]
}


