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

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.formUser = new User();
  }

  onSave() {
      this.dataService.addNewUser(this.formUser, this.password).subscribe(
        (user) => {
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}});
      });
  }
}
