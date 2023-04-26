import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);

  users: User[] = [];
  title = 'angular-after-tutorial';


  ngOnInit(): void {
    this.http.get<{ data: User[] }>('https://reqres.in/api/users')
    .subscribe(resp => this.users = resp.data);
  }
}
