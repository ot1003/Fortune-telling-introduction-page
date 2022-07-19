"use strict";
import { dateRange } from "./dateRange.mjs";
export class sign {
  /**
   * Creates an instance of sign.
   * @param {String} year yyyy/mm/ddのように入れます
   * @memberof sign
   */
  constructor(year) {
    this.year = year;
  }
  get dates() {
    const dates = this.year.split("/").map(Number);
    return [{ Year: dates[0] }, { Month: dates[1] }, { day: dates[2] }];
  }
  get k() {
    let i = 0;
    for (let index = 0; index < this.data.length; index++) {
      let startDate = `${this.dates[0].Year}/${this.data[index].period[0]}`;
      let endDate = `${this.dates[0].Year}/${this.data[index].period[1]}`;
      const s = new Date(startDate);
      const e = new Date(endDate);
      const y = new Date(this.year);
      if (s > e) {
        if (y <= e) {
          startDate = `${this.dates[0].Year - 1}/${this.data[index].period[0]}`;
        }
        if (y > s) {
          endDate = `${this.dates[0].Year + 1}/${this.data[index].period[1]}`;
        }
      }
      if (dateRange(startDate, endDate, this.year)) {
        break;
      } else if (!(index === this.data.length - 1)) {
        i++;
      }
    }

    return this.data[i];
  }
  get Strings() {
    return this.k.name;
  }
  /**
   * 
   * @readonly
   * @memberof sign あああ
   */
  get emoji() {
    return this.k.emoji;
  }
  get data() {
    const datas = [
      {
        name: "おひつじ座",
        emoji: "♈",
        period: ["03/21", "04/19"],
      },
      {
        name: "おうし座",
        emoji: "♉",
        period: ["04/20", "05/20"],
      },
      {
        name: "ふたご座",
        emoji: "♊",
        period: ["05/21", "06/21"],
      },
      {
        name: "かに座",
        emoji: "♋",
        period: ["06/22", "07/22"],
      },
      {
        name: "しし座",
        emoji: "♌",
        period: ["07/23", "08/22"],
      },
      {
        name: "おとめ座",
        emoji: "♍",
        period: ["08/23", "09/22"],
      },
      {
        name: "てんびん座",
        emoji: "♎",
        period: ["09/23", "10/23"],
      },
      {
        name: "さそり座",
        emoji: "♏",
        period: ["10/24", "11/22"],
      },
      {
        name: "いて座",
        emoji: "♐",
        period: ["11/23", "12/21"],
      },
      {
        name: "やぎ座",
        emoji: "♑",
        period: ["12/22", "01/19"],
      },
      {
        name: "みずがめ座",
        emoji: "♒",
        period: ["01/20", "02/18"],
      },
      {
        name: "うお座",
        emoji: "♓",
        period: ["02/19", "03/20"],
      },
    ];

    return datas;
  }
}
