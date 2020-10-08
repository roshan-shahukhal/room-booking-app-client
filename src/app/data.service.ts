import { Layout, LayoutCapacity, Room } from './model/room.model';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rooms: Array<Room>;
  private users: Array<User>;

  getRooms(): Observable<Array<Room>> {
    return of(this.rooms);
  }

  getUsers(): Observable<Array<User>> {
    return of(this.users);
  }

  updateUser(user: User): Observable<User> {
    const originalUser = this.users.find(u => u.id === user.id);
    originalUser.name = user.name;

    return of(originalUser);
  }

  addNewUser(newUser: User, password: string): Observable<User> {
    let id = 0;
    for (const user of this.users) {
      if (id < user.id) {
        id = user.id;
      }
    }

    newUser.id = id + 1;
    this.users.push(newUser);
    return of(newUser);
  }

  constructor() { 
    this.rooms = new Array<Room>();

    const room1 = new Room();
    room1.id = 1;
    room1.name = 'First Room';
    room1.location = 'First Floor';

    const capacity1 = new LayoutCapacity();
    capacity1.layout = Layout.THEATER;
    capacity1.capacity = 50;

    const capacity2 = new LayoutCapacity();
    capacity2.layout = Layout.USHAPE;
    capacity2.capacity = 20;

    room1.capacities.push(capacity1, capacity2);


    const room2 = new Room();
    room2.id = 2;
    room2.name = 'Second Room';
    room2.location = 'Third Floor';

    const capacity3 = new LayoutCapacity();
    capacity3.layout = Layout.THEATER;
    capacity3.capacity = 60;

    room2.capacities.push(capacity3);

    this.rooms.push(room1, room2);

    this.users = new Array<User>();

    const user1 = new User();
    user1.id = 1;
    user1.name = 'Jane Doe';
    user1.password = 'p@ssword';

    const user2 = new User();
    user2.id = 2;
    user2.name = 'James Smith';
    user2.password = 'james';

    this.users.push(user1, user2);


  }
}
