import { dialogs } from "../dialog.mjs";
import { isSupportedShareFile } from "../isSupportedShareFile.mjs";
import { onScreenShotClick } from "./onScreenShotClick.mjs";

export const shareImageButton = (localshareImage) => {
  let supportWebshareapi = "Web Share API";
  if (navigator.share && !isSupportedShareFile()) {
    supportWebshareapi = "Web Share API Level 2";
  }
  if (navigator.share && isSupportedShareFile()) {
    document.querySelector("#share").disabled = true;
    onScreenShotClick(localshareImage).then((result) => {
      const imageFile = new File([result], "image.png", {
        type: "image/png",
  
      });

      navigator
        .share({
          title: "星座占い",
          text: "星座占いの結果",
          url: location.href,
          files: [imageFile],
        })
        .then(() => {
          document.querySelector("#share").disabled = false;
        })
        .catch((error) => {
          document.querySelector("#share").disabled = false;
          if (!error.toString().includes("AbortError")) {
            const idsd = new dialogs();
            idsd.titles = "共有できませんでした";

            idsd.contents = `<div class='contents_main'>${error}</div>`;
            const hi = idsd.create();

            hi.showModal();
          }
        });
    });
  } else {
    const idsd = new dialogs();
    idsd.titles = `${supportWebshareapi}を利用できません`;
    idsd.contents = `<contents>このページが安全なコンテキスト（HTTPS）ではないか、お使いのブラウザが${supportWebshareapi}をサポートしていません。</contents>
      <contents>対応した環境でアクセスすると他のアプリ、PWAなどで占い結果を画像で共有することができます。</contents>
      <contents>${supportWebshareapi}の対応ブラウザはこちらをご覧ください：https://developer.mozilla.org/ja/docs/Web/API/Navigator/share#browser_compatibility</contents>
        `;

    const hi = idsd.create();

    hi.showModal();
  }
};
