'use strict';
import { $daySelect, $monthSelect, $yearSelect } from "./query.mjs";
/**
 * selectで選択した数値を返します。
 *
 * @export
 * @class OutputDate
 */
export class OutputDate {
  /**
   * selectで選択した年の値取を数値を返します。
   *
   * @return {Number} 
   * @memberof OutputDate
   */
  get valGetYear() {
    return Number($yearSelect.value)
  }
  /**
   * selectで選択した月の値取を数値を返します。
   *
   * @return {Number} 
   * @memberof OutputDate
   */
  get valGetMonth() {
    return Number($monthSelect.value)
  }
  /**
   * selectで選択した日の値取を数値を返します。
   *
   * @return {Number} 
   * @memberof OutputDate
   */
  get valGetDay() {
    return Number($daySelect.value)
  }
}