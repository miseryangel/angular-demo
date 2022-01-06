import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SongFormComponent } from '../song-form/song-form.component';
import { Song } from '../shared/song'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  audioList!:Song[];

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<PlaylistComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {audioList: Song[]}) {
                this.audioList = data.audioList;
              }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close(this.audioList);
  }

  onOpen(): void{
    const notepadRef = this.dialog.open(SongFormComponent,{
      width: '400px',
      height: '400px',
      disableClose: true,
      autoFocus: true,
      panelClass: 'my-dialog',
    });

    // redundant but I can open multiple dialogs at the same time
    notepadRef.afterClosed().subscribe(result=>{
      this.audioList.push(...result);
    });
  }

}
