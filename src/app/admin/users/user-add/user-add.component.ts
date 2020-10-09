import { Router } from '@angular/router';
import { DataService } from './../../../data.service';
import { User } from './../../../model/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formUser: User;
  password: string;
  confirmPassword: string;

  nameErrorMessage: string;
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;

  isNameValid = false;
  isPasswordValid = false;
  isConfirmPasswordValid = false;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.formUser = new User();
    this.validateName();
    this.validatePassword();
    this.validateConfirmPassword();
  }

  onSave() {
      this.dataService.addNewUser(this.formUser, this.password).subscribe(
        (user) => {
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}});
      });
  }

  validateName() {
    if (this.formUser.name == null || this.formUser.name == '') {
      this.nameErrorMessage = 'Name is required.';
    } else if (this.formUser.name && this.formUser.name.trim().length === 0) {
      this.nameErrorMessage = 'Name cannot be blank.';
    } else {
      this.nameErrorMessage = null;
      this.isNameValid = true;
    }
  }

  validatePassword() {
    if (this.password == null || this.password == '') {
      this.passwordErrorMessage = 'Password is required.';
    } else if (this.password && this.password.length < 5) {
      this.passwordErrorMessage = 'Password should be at least 5 characters.';
    } else {
      this.passwordErrorMessage = null;
      this.isPasswordValid = true;
    }
  }

  validateConfirmPassword() {
    if (this.confirmPassword == null || this.confirmPassword == '') {
      this.confirmPasswordErrorMessage = 'Password is required.';
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordErrorMessage = 'Passwords donot match.'
    } else {
      this.confirmPasswordErrorMessage = null;
      this.isConfirmPasswordValid = true;
    }
  }

}
