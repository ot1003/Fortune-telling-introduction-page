"use strict";
export function changeTohex(color) {
  let rgb = color.match(/(\d{1,3}), (\d{1,3}), (\d{1,3})/);

  if (!rgb)
    return color;

  rgb = [rgb[1], rgb[2], rgb[3]].map(Number);

  // 16進数に変換
  const hex = `#${rgb
    .map((value) => {
      return `0${value.toString(16)}`.slice(-2);
    })
    .join("")}`;

  const rgba = color.match(/\d{1,3}, \d{1,3}, \d{1,3}, (\d*?(?:\.?\d+))?\)$/);
  if (!rgba)
    return hex;

  // rgbaの場合
  let alpha = Math.round(Number(rgba[1]) * 100) / 100;
  alpha = Math.round(alpha * 255);
  let alphaHex = (alpha + 0x10000).toString(16).substring(3).toUpperCase();
  return `${hex}${alphaHex}`;
}
