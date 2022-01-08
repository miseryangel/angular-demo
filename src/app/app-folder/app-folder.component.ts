import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonAppsComponent } from '../common-apps/common-apps.component';

@Component({
  selector: 'app-app-folder',
  templateUrl: './app-folder.component.html',
  styleUrls: ['./app-folder.component.css']
})
export class AppFolderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFolder(): void{

    const appFolderRef = this.dialog.open(CommonAppsComponent,{
      width: '900px',
      height: '180px',
      disableClose: true,
      autoFocus: true,
      panelClass: 'my-dialog',
      position : {
        'bottom':'50px',
        left: '40px',
      },
    });

  }

}
