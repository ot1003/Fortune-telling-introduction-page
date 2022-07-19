import { changeTohex } from "../changeTohex.mjs";
import html2canvas from "../oss/html2canvas.esm.js";
import { toBlob } from "../toBlob.mjs";
import { shareImageChecked } from "./shareImageChecked.mjs";

export function onScreenShotClick(localshareImage, imgTitle) {
  const box = document.body; // idが「box」の要素を取得
  const GetBgColor = window
    .getComputedStyle(box, null)
    .getPropertyValue("background-color");

  const hi = () => {
    let his = shareImageChecked(localshareImage);
    // 複製するHTML要素を取得
    const content_area = document.querySelectorAll("#Uranaikekka .box");
    const kkh = document.createElement("div");
    kkh.className = "contents_area grids screenShot";
    document.body.appendChild(kkh);
    const titleCa = document.createElement("h3");
    titleCa.setAttribute("tablename", "title");
    titleCa.textContent = `${document.title}の結果`;
    kkh.appendChild(titleCa);
    content_area.forEach((e) => {
      // 複製
      const ea = e.cloneNode(true);

      kkh.appendChild(ea);
    });
    his.forEach((elem) => {
      kkh.querySelectorAll(`[tablename="${elem}"]`).forEach((f) => {
        f.remove();
      });
    });
    // 複製したHTML要素をページに挿入
    const hg = html2canvas(kkh, {
      backgroundColor: changeTohex(GetBgColor),
      imageTimeout: 0,
      windowWidth: 750,
      scale: 2,
      logging: false,
    }).then((canvas) => {
      const ko = toBlob(canvas.toDataURL());
      kkh.remove();
      return toBlob(canvas.toDataURL());
    });
    return hg;
  };

  return hi().then((result) => {
    return result;
  });
}
