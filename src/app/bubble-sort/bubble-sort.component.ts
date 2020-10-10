import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit {
  nums: number[] = [];
  num: number = 0;
  // 81のランダムな3桁の数値の入った配列を作成
  // 配列の数値をtableに代入
  onclick() {
    for (let i = 0; i < 81; i++) {
      this.num = Math.floor(Math.random() * 999);
      this.nums.push(this.num);
    }
    console.log(this.nums);

  }

  // ボタンイベントでバブルソート


  constructor() { }

  ngOnInit(): void {
  }

}
