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

  isNameValid = false;
  errorMessage: string;

  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit(): void {
    this.formUser = Object.assign({}, this.user);
    this.validateName();
  }

  onUpdate() {
      this.dataService.updateUser(this.formUser).subscribe(
        (user) => {
          this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}});
        }
      );
  }

  validateName() {
    if (this.formUser.name == '') {
      this.errorMessage = 'Name is required.';
    } else if (this.formUser.name.trim().length === 0) {
      this.errorMessage = 'Name cannot be blank.';
    } else {
      this.errorMessage = null;
      this.isNameValid = true;
    }
  }
}