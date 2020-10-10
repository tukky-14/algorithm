import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  binary: string = "二分探索";
  bubble: string = "バブルソート";


  constructor() { }

  ngOnInit(): void {
  }

}
