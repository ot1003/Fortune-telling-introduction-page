"use strict";
/**
 *
 * @returns {boolean | undefined}
 */
export const isSupportedShareFile = () => {
  //空のテストファイルを作成
  const testFile = new File(["test"], "test.txt", { type: "text/plain" });

  //ファイルをシェア可能かどうか判定
  return (
    navigator.share &&
    navigator.canShare &&
    navigator.canShare({
      files: [testFile],
    })
  );
};
