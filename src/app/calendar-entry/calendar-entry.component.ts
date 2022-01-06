import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-calendar-entry',
  templateUrl: './calendar-entry.component.html',
  styleUrls: ['./calendar-entry.component.css']
})
export class CalendarEntryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCalendar(): void{

    const calendarRef = this.dialog.open(CalendarComponent,{
      width: '550px',
      height: '700px',
      disableClose: true,
      autoFocus: true,
      data: {},
      panelClass: 'my-dialog',
    });

    
  }


  

}
