import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss'],
})
export class BinarySearchComponent implements OnInit {
  answer_messages: string[] = [];
  answer_message = '';
  lower: number; // 入力された下限値
  upper: number; // 入力された上限値
  answer: number; // 入力された年齢

  halfAge(lower: number, upper: number): number {
    if (upper - lower == 1) {
      // number型で比較するように等価演算子を使用
      return lower;
    } else {
      return Math.ceil(Number(lower) + (upper - lower) / 2);
    }
  }

  onclick(): void {
    if (this.lower >= this.upper) {
      alert('範囲は左の値が右の値よりも小さくなるように指定してください。');
      return;
    }

    if (this.answer > this.upper || this.answer < this.lower) {
      alert('年齢は範囲内に収まるように設定してください。');
      return;
    }

    let guess_lower: number = this.lower; // 20
    let guess_upper: number = this.upper; // 21
    let guess_age: number = this.halfAge(guess_lower, guess_upper); // 20

    while (true) {
      if (guess_age == this.answer) {
        // number型で比較するように等価演算子を使用
        this.answer_message = `正解は${guess_age}歳!`;
        this.answer_messages.push(this.answer_message);
        return;
      }

      guess_age = this.halfAge(guess_lower, guess_upper);

      if (this.answer >= guess_age) {
        this.answer_message = `「${guess_age}以上ですか?」→ YES`;
        guess_lower = guess_age;
        if (this.answer - guess_age == 1) { guess_age++; };
      } else {
        this.answer_message = `「${guess_age}以上ですか?」→ NO`;
        guess_upper = guess_age;
      }

      this.answer_messages.push(this.answer_message);
    }
  }

  onreset(): void {
    this.answer_messages = [];
  }

  constructor() {}

  ngOnInit(): void {}
}
