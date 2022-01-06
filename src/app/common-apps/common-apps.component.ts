import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LOCAL_APPS,AppUnit } from '../shared/apps';

@Component({
  selector: 'app-common-apps',
  templateUrl: './common-apps.component.html',
  styleUrls: ['./common-apps.component.css']
})
export class CommonAppsComponent implements OnInit {
  apps:AppUnit[] = LOCAL_APPS;
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<CommonAppsComponent>,) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
