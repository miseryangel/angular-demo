import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotepadComponent } from '../notepad/notepad.component';

import { NoteType } from '../shared/note';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist: NoteType[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNotePad(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'bottom':'70px',
      right: '0',
    };
    dialogConfig.width = '400px';
    dialogConfig.height = '500px';
    dialogConfig.data = {data:this.todolist};
    dialogConfig.panelClass='my-dialog';
    const notepadRef = this.dialog.open(NotepadComponent,dialogConfig);

    notepadRef.afterClosed().subscribe(result=>{
      this.todolist = result;
    });
  }

}
