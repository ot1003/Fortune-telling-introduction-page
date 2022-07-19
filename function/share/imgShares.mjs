import { dialogs } from "../dialog.mjs";
import { onScreenShotClick } from "./onScreenShotClick.mjs";

export function imgShares(localshareImage, e) {
  e.target.disabled = true;
  onScreenShotClick(localshareImage).then((result) => {
    const img = URL.createObjectURL(result);
    const idsd = new dialogs();
    idsd.titles = `占い結果を画像として保存`;
    idsd.icons = "image";
    idsd.contents = `
          <contents>占い結果を右クリックまたは長押しで画像を保存できます。</contents>
          <contents><div class="img-shadow"><img width="100%" src="${img}"></div></contents>
          <div class="contents_main shareButtons">
          <button type="button" class="outlineButton btnScreenShot" id="imgDownload"><span class="material-symbols-rounded">
          file_download
          </span></button>
          
          <button type="button" class="outlineButton btnScreenShot" id="imgCopy"><span class="material-symbols-rounded">
          file_copy
          </span>
          </button>
          <div>
        `;

    const hi = idsd.create();

    hi.showModal();
    e.target.disabled = false;

    document.querySelector("#imgDownload").addEventListener("click", () => {
      const idsdf = new dialogs();
      idsdf.titles = "画像をダウンロードしますか？";
      idsdf.icons = "file_download";
      idsdf.contents = `<contents>ダウンロードした画像は、ブラウザのダウンロードフォルダに保存されます。</contents>`;
      idsdf.actionButtons = [
        { buttontext: "キャンセル", value: "No" },
        { buttontext: "ダウンロード", value: "Yes", autofocus: true },
      ];
      const his = idsdf.create();
      his.showModal();
      his.addEventListener("close", (event) => {
        if (event.target.returnValue === "Yes") {
          const url = URL.createObjectURL(result);
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.download = "FortuneResults.png";
          a.href = url;
          a.click();
          a.remove();
        }
      });
      /*
       */
    });

    document.querySelector("#imgCopy").addEventListener("click", async () => {
      try {
        const item = new ClipboardItem({
          "image/png": result,
        });
        navigator.clipboard
          .write([item])
          .then((data) => {
            const idsdf = new dialogs();
            idsdf.titles = "画像をコピーしました";
            idsdf.icons = "file_copy";
            idsdf.contents = `<contents>他のアプリで貼り付けることができます。</contents>`;
            const his = idsdf.create();
            his.showModal();
          })
          .catch((e) => {});
      } catch (err) {
        const idsd = new dialogs();
        if (!navigator.clipboard) {
          idsd.titles = "Clipboard APIを利用できません";
          idsd.contents = `<contents>このページが安全なコンテキスト（HTTPS）ではないか、お使いのブラウザがClipboard APIをサポートしていません。</contents>
                  <contents>対応した環境でアクセスすると、占い結果を画像でコピーすることができます。</contents>
                  <contents>Clipboard APIの対応ブラウザはこちらをご覧ください：https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility</contents>`;
        } else if (!navigator.clipboard.write) {
          idsd.titles = "画像をコピーできません";
          idsd.contents = `<contents>お使いのブラウザがnavigator.clipboard.writeをサポートしていません。</contents>
                  <contents>対応した環境でアクセスすると、占い結果を画像でコピーすることができます。</contents>
                  <contents>navigator.clipboard.writeの対応ブラウザはこちらをご覧ください：https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility</contents>`;
        }

        const hi = idsd.create();

        hi.showModal();
      }
    });
  });
}
