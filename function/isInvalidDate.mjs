'use strict';
/**
 * その値が有効な日付か判定します。（入力例：yyyy/mm/dd）
 * @param {String} dateISO
 * @function
 * @returns 有効な日付の場合はtureを返します
 */
export const isInvalidDate = (dateISO) => {
  const date = new Date(dateISO);
  const k = !isNaN(date);
  if (k) {
    let monthAry = dateISO.split("/");

    const maxMo = Number(monthAry[1]) === date.getMonth() + 1;
    return maxMo;
  } else {
    return k;
  }
};
