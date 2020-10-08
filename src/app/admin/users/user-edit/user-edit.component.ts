import { Router } from '@angular/router';
import { DataService } from './../../../data.service';
import { User } from './../../../model/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User;

  formUser: User;

  action: string;

  password: string;

  constructor(private dataService: DataService,
              private router: Router) { 
    
  }

  ngOnInit(): void {
    this.formUser = Object.assign({}, this.user);
  }

  onSaveOrUpdate() {
    if (this.formUser.id == null) {
      this.dataService.addNewUser(this.formUser, this.password).subscribe(
        (user) => {
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}});
      });
    } else {
      this.dataService.updateUser(this.formUser).subscribe(
        (user) => {
          this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}});
        }
      );
    }
    
  }

}
