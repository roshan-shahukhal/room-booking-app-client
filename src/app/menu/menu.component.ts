import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPage(page: string) {
    switch(page) {
      case 'calendar' :
        this.router.navigate(['']);
        break;
      case 'rooms' :
        this.router.navigate(['admin', 'rooms']);
        break;
      case 'users' :
        this.router.navigate(['admin', 'users']);
        break;
      default :
        this.router.navigate(['404']);
    }
  }


  

}
