import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PlaylistComponent } from '../playlist/playlist.component';
import { Song } from '../shared/song';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {
  audioList: Song[] = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openPlayList(): void{
    const playListRef = this.dialog.open(PlaylistComponent,{
      width: '540px',
      height: '180px',
      disableClose: true,
      autoFocus: true,
      position : {
        'top':'100px',
        left: '0',
      },
      data:{audioList: this.audioList},
      panelClass: 'my-dialog',
    });

    playListRef.afterClosed().subscribe(result=>{
      this.audioList = result;
    });
  }

}
