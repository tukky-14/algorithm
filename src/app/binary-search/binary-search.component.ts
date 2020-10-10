import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {
  answer_messages: string[] = [];
  answer_message = '';
  lower: number;
  upper: number;
  answer: number;
  guess_lower: number;
  guess_upper: number;

  onclick(): void {
    if (+this.lower >= +this.upper) {
      alert('範囲は左の値が右の値よりも小さくなるように指定してください。');
      return;
    }

    if (+this.answer > +this.upper || +this.answer < +this.lower) {
      alert('年齢は範囲内に収まるように設定してください。');
      return;
    }

    // 予測年齢を定義
    let guess_lower = this.lower; // 20
    let guess_upper = this.upper; // 22
    let guess_age: number = Math.ceil(+this.lower + (this.upper - this.lower) / 2); // 21

    // 下限値と上限値の中間値を計算する関数
    function halfAge(lower: number, upper: number): number {
      return Math.ceil(+lower + (+upper - +lower) / 2);
    }

    // 予測年齢と正解が一致しない限り繰り返す
    while (+guess_age !== +this.answer){
      if (this.answer >= guess_age) {
        this.answer_message = `「${guess_age}以上ですか?」→ YES`;
        guess_lower = guess_age; // 範囲の下限を更新
      } else {
        this.answer_message = `「${guess_age}以上ですか?」→ NO`;
        guess_upper = guess_age; // 範囲の上限を更新 21
      }
      guess_age = halfAge(guess_lower, guess_upper);

      // アルゴリズムメッセージを更新
      this.answer_messages.push(this.answer_message);

      // 予測年齢が正解年齢 -1だったら予測年齢から1を引く
      if (+guess_age - 1 === +this.answer) {
        guess_age -= 1;
      }
    }




    // 予測年齢と正解が一致していたら正解メッセージを表示
    if (+guess_age === +this.answer) {
      this.answer_message = `「${guess_age}以上ですか?」→ YES`;
      this.answer_messages.push(this.answer_message);
      this.answer_message = `正解は${guess_age}歳!`;
      this.answer_messages.push(this.answer_message);
    }
  }

  // リセットボタンが押されたらメッセージも初期化
  onreset(): void {
    this.answer_messages = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
