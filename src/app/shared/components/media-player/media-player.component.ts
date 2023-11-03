import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover:'https://th.bing.com/th/id/OIP.fuh_05g6z3xRv_JAxxzD1AHaEo?pid=ImgDet&rs=1',
    album:'Perro',
    name:'Perro nombre',
    url:'http://localhost/track.mp3',
    _id: 1
  }

  constructor() { }
  
  ngOnInit(): void {
    
  }
}
