import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserItemComponent } from './user-item/user-item';

@Component({
  selector: 'app-root',
  imports: [HelloWorld, UserItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "hello world";
}
