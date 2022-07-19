import { createSelects } from "../../function/makeSELECT.mjs";
import {
  $yearSelect,
  $monthSelect,
  $daySelect,
} from "../../function/query.mjs";
import { OutputDate } from "../../function/OutputDate.mjs";
import { isInvalidDate } from "../../function/isInvalidDate.mjs";

import { createCard } from "../../function/card.mjs";
import { tables } from "../../function/tables.mjs";
import { zodiac } from "../../function/zodiac.mjs";
import { sign } from "../../function/sign.mjs";
import { randomStars } from "../../function/randomStars.mjs";
import { dialogs } from "../../function/dialog.mjs";
import { getAge } from "../../function/getAge.mjs";

import { createDaySelect } from "./createDaySelect.mjs";
import { createMonthSelect } from "./createMonthSelect.mjs";
import { loadFinished } from "./loadFinished.mjs";
import { shareImageButton } from "../../function/share/shareImageButton.mjs";
import { shareSettingButton } from "../../function/share/shareSettingButton.mjs";
import { imgShares } from "../../function/share/imgShares.mjs";

export const today = new Date();
export const year = today.getFullYear();
export const month = today.getMonth();
export const day = today.getDate();
export const g = new OutputDate();
const localshareImage = "ot_shareImage_seiza";
const localBirthday = "ot_birthday";
export const hs = new createSelects();

hs.year();

$yearSelect.addEventListener("change", (e) => {
  createMonthSelect(e);
});

$monthSelect.addEventListener("change", (e) => {
  createDaySelect(e);
});

$daySelect.addEventListener("input", (e) => {
  if (e.target.value.length >= 1) {
    const hu = `${g.valGetYear}/${g.valGetMonth}/${g.valGetDay}`;

    uranai_btn.disabled = !isInvalidDate(hu);
  } else {
    uranai_btn.disabled = true;
  }
});

window.addEventListener("load", loadFinished);

uranai_btn.addEventListener("click", (e) => {
  const hu = `${g.valGetYear}/${g.valGetMonth}/${g.valGetDay}`;
  if (isInvalidDate(hu) && document.querySelector("#Uranaikekka") === null) {
    e.target.disabled = true;
    document.querySelectorAll("#seinengappi select").forEach(ee => {
      ee.disabled = true
    })
    const details = document.createElement("details");
    details.id = "Uranaikekka";
    const summary = document.createElement("summary");
    details.className = "menu";
    summary.innerHTML = "<div>占いの結果</div>";
    details.appendChild(summary);
    const div = document.createElement("div");
    div.classList = "contents_area grids";
    details.appendChild(div);
    document.querySelector("#seinengappi").after(details);

    const nios = new createCard();

    const bas = [{ YouBirthday: hu }];
    const jsonString = JSON.stringify(bas);
    const sampleJsons = JSON.parse(localStorage.getItem(localBirthday));

    /*ローカルストレージと入力した内容が同じデータなら保存しない*/
    if (
      sampleJsons === null ||
      !(bas[0].YouBirthday === sampleJsons[0].YouBirthday)
    ) {
      localStorage.setItem(localBirthday, jsonString); //ローカルストレージに保存

      nios.icon = "done";
      nios.inHTML = "生年月日を保存しました";

      document
        .querySelector("#Uranaikekka .contents_area")
        .appendChild(nios.creates());
    }
    document.querySelector("#Uranaikekka").open = true;

    document.querySelector("#Uranaikekka").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //生年月日
    const birthday = {
      year: g.valGetYear,
      month: g.valGetMonth,
      date: g.valGetDay,
    };
    const gy = new zodiac(g.valGetYear);

    const uhs = new sign(hu);

    const jsonss = [
      {
        title: "星座",
        Attribute: [{ tablename: "sign" }],
        contents: `${uhs.emoji}${uhs.Strings}`,
      },
      {
        title: "十二支",
        Attribute: [{ tablename: "zodiac" }],
        contents: `${gy.emoji}${gy.names}年`,
      },
      {
        title: "生年月日",
        Attribute: [{ tablename: "birthDate" }],
        contents: `${g.valGetYear}年${g.valGetMonth}月${g.valGetDay}日`,
      },
      {
        title: "年齢",
        Attribute: [{ tablename: "age" }],
        contents: `${getAge(birthday)}歳`,
      },
    ];
    const InsertTable = document.querySelector("#Uranaikekka .contents_area");
    const gg = new tables();
    InsertTable.appendChild(gg.createTable(jsonss));

    const da = [
      {
        title: "願望",
        Attribute: [{ tablename: "desire" }],
        contents: randomStars(),
      },
      {
        title: "健康",
        Attribute: [{ tablename: "health" }],
        contents: randomStars(),
      },
      {
        title: "恋愛",
        Attribute: [{ tablename: "love" }],
        contents: randomStars(),
      },
      {
        title: "金運",
        Attribute: [{ tablename: "EconomicFortune" }],
        contents: randomStars(),
      },
      {
        title: "学問",
        Attribute: [{ tablename: "academic" }],
        contents: randomStars(),
      },
    ];

    const ggd = new tables();
    InsertTable.appendChild(ggd.createTable(da));

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
