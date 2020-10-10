import { DataService } from './../../../data.service';
import { Router } from '@angular/router';
import { User } from './../../../model/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onUserEdit() {
    this.router.navigate(['admin', 'users'], {queryParams: {id: this.user.id, action: 'edit'}});

  }

  onUserDelete() {
    this.dataService.deleteUser(this.user);
    this.router.navigate(['admin', 'users']);
  }

}
