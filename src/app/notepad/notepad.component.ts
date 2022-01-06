import { Component, OnInit, Inject } from '@angular/core';
import { NoteType } from '../shared/note';
import { MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NoteEntryComponent } from '../note-entry/note-entry.component';
import { icons, colors } from '../shared/note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  icons = icons;
  colors = colors;

  note: NoteType = {
    title:"",
    description:"",
    icon: "sentiment_satisfied",
    color: "yellow",
    rank: 1,
  };

  notes: NoteType[] = [];

  constructor( public dialog: MatDialog,
               public dialogRef: MatDialogRef<NotepadComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {data: NoteType[]}) { 
                for (let i = 0; i < data.data.length; i++){
                  let curNote = {
                    title:data.data[i].title,
                    description:data.data[i].description,
                    icon:data.data[i].icon,
                    color:data.data[i].color,
                    rank:data.data[i].rank,
                  }
                  this.notes.push(curNote);
                }
              }

  ngOnInit(): void {
  }

  onSubmit():void{
    if (this.note.title){
      this.addNote(this.note);
      this.note = {
        title:"",
        description:"",
        icon: "sentiment_satisfied",
        color: "yellow",
        rank: 1,
      };
    }
  }

  addNote(note: NoteType):void{
    let idx = 0;
    while (idx < this.notes.length && this.notes[idx].rank >= note.rank){
      idx++;
    }
    this.notes.splice(idx,0,note);
  }

  openNote(idx:number): void{

    const notepadRef = this.dialog.open(NoteEntryComponent,{
      width: '400px',
      height: '400px',
      disableClose: true,
      autoFocus: true,
      data: {noteEntry: this.notes[idx]},
      panelClass: 'my-dialog',
    });

    // redundant but I can open multiple dialogs at the same time
    notepadRef.afterClosed().subscribe(result=>{
      this.deleteNote(idx);
      if(result.title){
        this.addNote(result);
      }
    });
  }

  deleteNote(idx:number):void{
    this.notes.splice(idx,1);
  }

  onClose(): void{
    this.dialogRef.close(this.notes);
  }

}
