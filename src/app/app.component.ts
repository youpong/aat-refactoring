import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { AppUsecase } from './app.usecase';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  providers: [AppUsecase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly usecase = inject(AppUsecase);
  readonly state$ = this.usecase.state$;

  ngOnInit(): void {
    this.usecase.initialize();
  }
}
