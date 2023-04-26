import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly userService = inject(UserService);

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
