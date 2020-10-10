import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
})

export class BubbleSortComponent implements OnInit {
  nums_count: number = 0; // 部分並べ替えのためのカウンタ
  nums_compare: number = 80; // 部分並べ替えのためのカウンタ

  // 背景色初期化用メソッド
  styleReset(): void {
    for (let i = 0; i < 81; i++) {
      const cell: HTMLElement = document.getElementById('number' + i);
      cell.style.backgroundColor = 'white';
    }
  }

  // 乱数の作成
  createRandam(): void {
    for (let i = 0; i < 81; i++) {
      const randam: number = Math.floor(Math.random() * 999);
      const cell: HTMLElement = document.getElementById('number' + i);
      cell.innerText = `${randam}`;
    }
  }

  // 全並び替え
  allBubbleSort(): void {
    for (let i = 0; i < 81; i++) {
      // 移動完了毎に並び替え対象を縮小するfor文
      for (let j = 80; j > i; j--) {
        // 比較対象を変えていくfor文
        const target: HTMLElement = document.getElementById('number' + j); // 対象の値を設定（初期値は一番後ろ）
        const comparison: HTMLElement = document.getElementById('number' + (j - 1)); // 比較対象を隣の値に設定
        // 比較した値が小さければ入れ替え
        if (Number(target.textContent) < Number(comparison.textContent)) {
          let num: string = target.textContent; // 値を退避させるための変数
          target.innerText = comparison.textContent;
          comparison.innerText = num;
        }
      }
    }
    alert('並べ替えが完了しました！');
  }

  // 部分並び替え
  partBubbleSort(): void {
    this.styleReset(); // 背景を初期化
    // 並び替えが１周していたらnums_countを更新
    if (this.nums_compare === 0) {
      this.nums_count++;
      this.nums_compare = 80;
    }
    const target: HTMLElement = document.getElementById('number' + this.nums_compare);
    const comparison: HTMLElement = document.getElementById('number' + (this.nums_compare - 1));
    comparison.style.backgroundColor = 'orange';
    // if (+target.textContent < +comparison.textContent) { // 「+変数」と「Number(変数)」は同じ意味合いで使用可能
    if (Number(target.textContent) < Number(comparison.textContent)) {
      const num: string = target.textContent;
      target.innerText = comparison.textContent;
      comparison.innerText = num;
    }
    this.nums_compare--;
  }

  // 自動処理
  autoBubbleSort() {
    let auto_nums_count = 0;
    let auto_nums_compare = 80;
    setInterval(function() {
      if (auto_nums_count === 80) {return}; // 処理が終わったらループから抜ける
      if (auto_nums_compare === 0) {
        auto_nums_count++;
        auto_nums_compare = 80;
      }
      const target: HTMLElement = document.getElementById('number' + auto_nums_compare);
      const comparison: HTMLElement = document.getElementById('number' + (auto_nums_compare - 1));
      if (Number(target.textContent) < Number(comparison.textContent)) {
        const num: string = target.textContent;
        target.innerText = comparison.textContent;
        comparison.innerText = num;
      }
      auto_nums_compare--;
      // console.log(auto_nums_count);
      // console.log(auto_nums_compare);
    }, 1);
  }

  // リセット
  numberReset(): void {
    for (let i = 0; i < 81; i++) {
      const cell: HTMLElement = document.getElementById('number' + i);
      cell.innerText = '0';
      cell.style.backgroundColor = 'white';
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
