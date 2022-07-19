'use strict';
/**
 * @param { String } maxDate 日付範囲の上限
 * @param { String } minDate 日付範囲の下限
 * @param { String } inputStrDate 範囲対象の値
 * @return { boolean } 範囲内であるか真偽で返します
 */
export function dateRange(minDate, maxDate, inputStrDate) {
  const iminDate = new Date(minDate); // 日付範囲の下限
  const imaxDate = new Date(maxDate); // 日付範囲の上限

  const inputDate = new Date(inputStrDate);

  return imaxDate >= inputDate && iminDate <= inputDate;
}
