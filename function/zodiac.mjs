"use strict";
/**
 * 十二支を返します
 * @class zodiac
 */
export class zodiac {
  /**
   * @param {Number} year
   * @memberof zodiac
   */
  constructor(year) {
    this.year = year;
  }

  get names() {
    return this.data[parseInt(this.year) % 12].name;
  }
  /**
   * 十二支の絵文字を返します
   * @readonly
   * @memberof zodiac
   */
  get emoji() {
    return this.data[parseInt(this.year) % 12].emoji;
  }
  get number() {
    return this.data[parseInt(this.year) % 12].number;
  }
  get data() {
    const datas = [
      { name: "申", emoji: "🐵", number: 9 },
      { name: "酉", emoji: "🐔", number: 10 },
      { name: "戌", emoji: "🐶", number: 11 },
      { name: "亥", emoji: "🐗", number: 12 },
      { name: "子", emoji: "🐭", number: 1 },
      { name: "丑", emoji: "🐮", number: 2 },
      { name: "寅", emoji: "🐯", number: 3 },
      { name: "卯", emoji: "🐰", number: 4 },
      { name: "辰", emoji: "🐲", number: 5 },
      { name: "巳", emoji: "🐍", number: 6 },
      { name: "午", emoji: "🐴", number: 7 },
      { name: "未", emoji: "🐏", number: 8 },
    ];
    return datas;
  }
}
