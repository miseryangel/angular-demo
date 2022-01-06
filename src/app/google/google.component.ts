import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  data: string = "";
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  search(){
    if (this.data) window.location.href = "http://www.google.com/search?q=" + this.data;
  }

}
