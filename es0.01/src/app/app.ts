import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserItemComponent } from './user-item/user-item';
import { UserListComponent } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [HelloWorld, UserItemComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "hello world";
}
