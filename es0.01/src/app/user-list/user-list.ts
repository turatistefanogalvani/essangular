import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item';

@Component({
  selector: 'app-user-list',
  imports: [UserItemComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent{
  names: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}
