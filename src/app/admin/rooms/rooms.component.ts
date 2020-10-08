import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/room.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;

  selectedRoom: Room;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.dataService.getRooms().subscribe(
      rooms => {
        this.rooms = rooms;
      }
    );
    this.route.queryParams.subscribe( (params) => {
      const id = params['id'];

      if (id) {
        this.setRoom(+id);
      }
    });
  }

  setRoom(id: number) {
    this.selectedRoom = this.rooms.find( room => {
      return room.id === id;
    });

    this.router.navigate(['admin', 'rooms'], {queryParams: { id : id}});
  }



}
