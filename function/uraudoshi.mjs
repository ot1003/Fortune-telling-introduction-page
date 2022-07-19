'use strict';
/**うるう年か判定 */
export const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};

/** 日本の元号を文字列で返します（元号の境目は２つ返します）
 * @param {number} year 年を入力します
 */
export const eraName = (year) => {
  const options = { year: "numeric" };
  const date1 = new Date(year, 0, 1);
  const date11 = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(
    date1
  );
  const date2 = new Date(year, 12 - 1, 31);
  const date22 = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(
    date2
  );

  if (!(date11 === date22)) {
    return `${date11}、${date22}`;
  } else {
    return date11;
  }
};
