"use strict";
/**
 *
 * @param {base64} base64
 * @returns
 */
export function toBlob(base64) {
  const bin = atob(base64.replace(/^.*,/, ""));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  try {
    const blob = new Blob([buffer.buffer], {
      type: "image/png",
    });
    return blob;
  } catch (e) {
    return false;
  }
}
