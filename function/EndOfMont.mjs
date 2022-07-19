'use strict';
/**月末を返し値として返します。
 * @param {Number} getDate 終了する月
 * @return {Date} その月の最終日
 */
export const EndOfMonth = (getDate) => {
  return new Date(getDate.getFullYear(), getDate.getMonth() + 1, 0);
};