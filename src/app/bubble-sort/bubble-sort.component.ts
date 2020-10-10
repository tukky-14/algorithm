import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
})

export class BubbleSortComponent implements OnInit {
  cell: any;  // 各td要素の値を取得するための変数
  randam: number; // 乱数のための変数

  // 乱数の作成
  createRandam() {
    for (let i = 0; i < 81; i++) {
      this.randam = Math.floor(Math.random() * 999);
      this.cell = document.getElementById('number' + i);
      this.cell.innerText = `${this.randam}`;
    }
  }

  // 全並び替え
  allBubbleSort() {
    for (let i = 0; i < 81; i++) {
      // 移動完了するたびに並び替え対象を縮小するfor文
      for (let j = 80; j > i; j--) {
        // ２つの値を比べるためのfor文
        let target = document.getElementById('number' + j); // 一番後ろの値を取得
        let comparison = document.getElementById('number' + (j - 1)); // 一番後ろから２番目の値を取得
        // 比較した値が小さければ入れ替える
        if (+target.textContent < +comparison.textContent) {
          let num = target.textContent; // 値を退避させるための変数
            target.innerText = comparison.textContent;
            comparison.innerText = num;
        }
      }
    }
    alert('並べ替えが完了しました！');
  }

  // リセット
  numberReset() {
    for (let i = 0; i < 81; i++) {
      this.randam = Math.floor(Math.random() * 999);
      this.cell = document.getElementById('number' + i);
      this.cell.innerText = 0;
    }
  }

  // 部分並び替え
  nums_count: number = 0;
  nums_compare: number = 80;
  partBubbleSort() {
    // 並び替えが１周していたらnums_countを更新
    if (this.nums_compare === 0) {
      this.nums_count++;
      this.nums_compare = 80;
    }
    let target = document.getElementById('number' + this.nums_compare);
    let comparison = document.getElementById('number' + (this.nums_compare - 1));
    // if (Number(target.textContent) < Number(comparison.textContent)) {
    if (+target.textContent < +comparison.textContent) { // 「+変数」と「Number(変数)」は同じ意味合いで使用可能
      let num = target.textContent;
      target.innerText = comparison.textContent;
      comparison.innerText = num;
    }
    this.nums_compare--;
  }

  constructor() {}

  ngOnInit(): void {}
}
