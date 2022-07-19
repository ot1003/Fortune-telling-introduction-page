'use strict';
import { OutputDate } from "./OutputDate.mjs";
import { eraName } from "./uraudoshi.mjs";
import { $daySelect, $monthSelect, $yearSelect } from "./query.mjs";
/**
 * Option要素を挿入します。
 * @export
 * @class createSelects
 */
export class createSelects {
  /**
   * 年のOption要素を挿入します。
   */
  year() {
    const hh = new optionCreate();
    const today = new Date();
    const year = today.getFullYear();
    hh.type = "年";
    hh.createElementArea = $yearSelect;
    hh.sej(year, year - 130);
  }

  /**
   * 月のOption要素を挿入します。
   * @param {number} start 開始する月
   * @param {number} end 終了する月
   */
  month(start, end) {
    const hh = new optionCreate();
    hh.type = "月";
    hh.createElementArea = $monthSelect;
    hh.sejs(start, end);
  }

  /**
   * 日のOption要素を挿入します。
   * @param {number} start 開始する日
   * @param {number} end 終了する日
   */
  day(start, end) {
    const hhs = new optionCreate();
    hhs.type = "日";
    hhs.createElementArea = $daySelect;
    hhs.sejs(start, end);
  }
}

class optionCreate {
  selectTemplate(i, closeElement, displaytext) {
    const new_option = document.createElement("option");
    new_option.innerHTML = displaytext;

    new_option.value = i;
    closeElement.appendChild(new_option);
  }
  topOptionTemplate(nen, closeElement) {
    const new_option = document.createElement("option");
    new_option.hidden = true;
    new_option.selected = true;
    new_option.disabled = true;
    new_option.innerHTML = nen;

    closeElement.appendChild(new_option);
  }

  get type() {
    this._type;
  }
  set type(arg) {
    this._type = arg;
  }

  /**
   * @param {Element} element
   */
  set createElementArea(element) {
    this.element = element;
  }
  sej(initialValue, repetition) {
    this.topOptionTemplate(`${this._type}を選択してください`, this.element);
    for (let i = initialValue; i > repetition; i--) {
      const unko = eraName(i);
      this.selectTemplate(i, this.element, `${i}${this._type}（${unko}）`);
    }
  }
  sejs(initialValue, repetition) {
    this.topOptionTemplate(`${this._type}を選択してください`, this.element);
    for (let i = initialValue; i <= repetition; i++) {
      const unko = eraName(i);
      this.selectTemplate(i, this.element, `${i}${this._type}`);
    }
  }
}
