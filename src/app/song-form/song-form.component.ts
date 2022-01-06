import { Component, OnInit } from '@angular/core';
import { Song } from '../shared/song';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {
  song: Song = {
    url:"",
    title:"",
    cover:"",
  }
  songs:Song[] = [];
  constructor(public dialogRef: MatDialogRef<SongFormComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.song.title){
      this.songs.push(this.song);
      this.song = {
        url:"",
        title:"",
        cover:"",
      }
    }
  }

  onClose(): void{
    this.dialogRef.close(this.songs);
  }

  deleteSong(idx:number):void{
    this.songs.splice(idx,1);
  }

}
