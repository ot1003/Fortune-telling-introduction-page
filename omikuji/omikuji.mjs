import { createCard } from "./../function/card.mjs";
import { tables } from "./../function/tables.mjs";

import { dialogs } from "./../function/dialog.mjs";

import { shareImageButton } from "./../function/share/shareImageButton.mjs";
import { shareSettingButton } from "./../function/share/shareSettingButton.mjs";
import { imgShares } from "./../function/share/imgShares.mjs";
import { omikujis } from "./omikujis.mjs";

const localshareImage = "ot_shareImage_omikuji";

function lot() {
  const data = {
    大吉: 25, // 25%
    中吉: 8, // 8%
    小吉: 12, // 12%
    吉: 25, // 25%
    末吉: 30, //30%
  };
  const rand = Math.floor(Math.random() * 100);
  let result = "";
  let rate = 0;
  for (const prop in data) {
    rate += data[prop];
    if (rand <= rate) {
      result = prop;
      break;
    }
  }
  return result;
  // 1等や2等などを設定した確率で表示
}

uranai_btn.addEventListener("click", (e) => {
  e.target.disabled = true;
  if (document.querySelector("#Uranaikekka") === null) {
    const details = document.createElement("details");
    details.id = "Uranaikekka";
    details.className = "menu";
    const summary = document.createElement("summary");
    summary.innerHTML = "<div>おみくじの結果</div>";
    details.appendChild(summary);
    const div = document.createElement("div");
    div.classList = "contents_area grids";
    details.appendChild(div);
    document.querySelector("#seinengappi").after(details);

    const nios = new createCard(
      document.querySelector("#Uranaikekka .contents_area"),
      "appendChild"
    );

    document.querySelector("#Uranaikekka").open = true;

    document.querySelector("#Uranaikekka").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const jif = new omikujis();
    const jsonss = [
      {
        title: "運勢",
        Attribute: [{ tablename: "fortune" }],
        contents: lot(),
      },
      {
        title: "願望",
        Attribute: [{ tablename: "desire" }],
        contents: jif.desire,
      },
      {
        title: "健康",
        Attribute: [{ tablename: "health" }],
        contents: jif.health,
      },
      {
        title: "恋愛",
        Attribute: [{ tablename: "love" }],
        contents: jif.love,
      },
      {
        title: "金運",
        Attribute: [{ tablename: "EconomicFortune" }],
        contents: jif.EconomicFortune,
      },
      {
        title: "学問",
        Attribute: [{ tablename: "academic" }],
        contents: jif.academic,
      },
    ];
    const InsertTable = document.querySelector("#Uranaikekka .contents_area");
    const gg = new tables();
    InsertTable.appendChild(gg.createTable(jsonss));

    const shareButtonArea = document.createElement("div");
    shareButtonArea.className = "shareButtons";
    InsertTable.appendChild(shareButtonArea);

    const sharebuttons = (json) => {
      const button = document.createElement("button");
      button.type = "button";
      if (!(json[0].id === undefined)) {
        button.id = json[0].id;
      }
      button.className = "outlineButton btnScreenShot";
      button.innerHTML = `<span class="material-symbols-rounded"> ${json[0].icon} </span>`;
      return button;
    };
    shareButtonArea.appendChild(
      sharebuttons([{ icon: "image", id: "imageshare" }])
    );
    shareButtonArea.appendChild(sharebuttons([{ icon: "share", id: "share" }]));
    shareButtonArea.appendChild(
      sharebuttons([{ icon: "settings", id: "shareSetting" }])
    );
    document.querySelector("#share").addEventListener("click", () => {
      shareImageButton(localshareImage);
    });
    document.querySelector("#shareSetting").addEventListener("click", () => {
      shareSettingButton(localshareImage);
    });
    document.querySelector("#imageshare").addEventListener("click", (e) => {
      imgShares(localshareImage, e);
    });
    twemoji.parse(document.body, {
      folder: "svg",
      ext: ".svg",
    });
  } else {
    const idsd = new dialogs();
    idsd.titles = "占いを実行できません";
    idsd.contents = `
      <contents>生年月日が未入力または不正な日付です。</contents>
      <contents>もしくは既に占いを実行済みです。</contents>`;
    const hi = idsd.create();

    hi.showModal();
  }
});
