import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { icons, colors } from '../shared/note';
import { NoteType } from '../shared/note';

@Component({
  selector: 'app-note-entry',
  templateUrl: './note-entry.component.html',
  styleUrls: ['./note-entry.component.css']
})
export class NoteEntryComponent implements OnInit {
  icons = icons;
  colors = colors;
  note!: NoteType;
  constructor(public dialogRef: MatDialogRef<NoteEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {noteEntry: NoteType}) { 
                console.log(data.noteEntry);
                this.note = {
                  title: data.noteEntry.title,
                  description: data.noteEntry.description,
                  icon: data.noteEntry.icon,
                  color: data.noteEntry.color,
                  rank: data.noteEntry.rank,
                }
              }

  ngOnInit(): void {

  }

  onClose(): void{
    this.dialogRef.close(this.note);
  }
}
