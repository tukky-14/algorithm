import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eratosthenes',
  templateUrl: './eratosthenes.component.html',
  styleUrls: ['./eratosthenes.component.scss']
})
export class EratosthenesComponent implements OnInit {
  input_num: number; // 入力値を入れる変数
  serial: number[] = []; // 入力値の連番配列
  answer_primes: number[] = []; // 素数を入れるための配列

  // 配列の空要素削除メソッド（delete演算子を使用したことで空の値が配列に残るため）
  checkEmpty(element): boolean {
    return element !== undefined && element !== 0 && element !== null;
  }

  onclick(): void {
    // [...Array]：,区切りの配列を作成
    // keys()：配列の各インデックス値を返す
    this.serial = ([...Array(Number(this.input_num)).keys()]); // for文の処理で辻褄を合わせるために配列の最初に0は含ませた連番配列
    console.log(this.serial);

    for (let i = 2; i < this.input_num; i++) { // 0と1は残して、2から繰り返す
      for (let j = 2; j < this.input_num; j++) { // iの倍数があればすべてdelete処理（1倍は素数なので残す）
        delete this.serial[i * j];
      }
    }

    this.serial.shift(); // 配列の先頭の0を削除
    this.answer_primes= this.serial.filter(this.checkEmpty);
    // console.log(this.answer_primes);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
