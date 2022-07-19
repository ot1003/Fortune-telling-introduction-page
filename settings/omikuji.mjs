import { createCard } from "../../function/card.mjs";
import { tables } from "../../function/tables.mjs";
import { dialogs } from "../function/dialog.mjs";
const birthday = birthdays();
const jsonss = [
  {
    title: "保存された生年月日",
    Attribute: [{ tablename: "sign" }],
    contents: birthday,
  },
  {
    title: "テーマ",
    Attribute: [{ id: "theme" }],
    contents: themeg(),
  },
];

const jsonsds = [
  {
    title: "デバイスのテーマ",
    responsive: true,
    contents: `<input type="radio" name="drone" value="auto">`,
  },
  {
    title: "ライトテーマ",
    responsive: true,
    contents: `<input type="radio" name="drone" value="light">`,
  },
  {
    title: "ダークテーマ",
    responsive: true,
    contents: `<input type="radio" name="drone" value="dark">`,
  },
];
const ggd = new tables();

const InsertTable = document.querySelector("#outputArea");
const gg = new tables();
const hik = InsertTable.appendChild(gg.createTable(jsonss));

const idsdf = new dialogs();
idsdf.titles = "テーマの設定";
idsdf.icons = "dark_mode";
idsdf.contents = `<contents>${ggd.createTable(jsonsds).outerHTML}</contents>`;
idsdf.actionButtons = [
  { buttontext: "キャンセル", value: "No" },
  { buttontext: "変更", value: "Yes", autofocus: true },
];

function birthdays() {
  const birthdayJSON = JSON.parse(localStorage.getItem("ot_birthday"));
  let returnBirthday = "";
  try {
    returnBirthday = birthdayJSON[0].YouBirthday;
  } catch (error) {
    returnBirthday = "保存された生年月日はありません";
  }
  return returnBirthday;
}

function themeg() {
  const sampleJsons = JSON.parse(localStorage.getItem("ot_themes"));
  let themeValue = "";
  if (!(sampleJsons === null) && sampleJsons[0].theme) {
    themeValue = sampleJsons[0].theme;
    if (themeValue === "auto") {
      themeValue = "デバイスのテーマに合わせる";
    }
    if (themeValue === "light") {
      themeValue = "常にライトテーマ";
    }
    if (themeValue === "dark") {
      themeValue = "常にダークテーマ";
    }
  } else {
    themeValue = "デバイスのテーマに合わせる";
  }
  return themeValue;
}

function newg() {
  const sampleJson = JSON.parse(localStorage.getItem("ot_themes"));

  const his = idsdf.create();
  if (!(sampleJson == null) && sampleJson[0].theme) {
    const themeValue = sampleJson[0].theme; // true
    his.querySelectorAll(`[name=drone][value=${themeValue}]`).forEach((e) => {
      e.checked = true;
    });
  } else {
    his.querySelector(`[name=drone][value=auto]`).checked = true;
  }
  his.showModal();

  his.addEventListener("close", (event) => {
    if (event.target.returnValue === "Yes") {
      his.querySelectorAll(`[name=drone]:checked`).forEach((e) => {
        const sample = [
          {
            theme: e.value,
          },
        ];
        const sampleJsons = JSON.parse(localStorage.getItem("ot_themes"));
        if (sampleJson === null) {
          const nios = new createCard();

            refreshInfoCard();

          const jsonString = JSON.stringify(sample);
          localStorage.setItem("ot_themes", jsonString);
        } else if (!(sampleJson[0].theme === sample[0].theme) ) {
          if (document.querySelector("#updateCard") === null) {
            refreshInfoCard();
            const jsonString = JSON.stringify(sample);
            localStorage.setItem("ot_themes", jsonString);
          }
        }
      });
    }
  });
}
document.querySelector("#theme").addEventListener("click", () => {
  newg();
});
function refreshInfoCard() {
  const nios = new createCard();

  nios.icon = "info";
  nios.inHTML =
    "設定が変更されました。ページを再読み込みすると内容が反映されます。";
  const huh = nios.creates();
  hik.before(huh);
  huh.setAttribute("id", "updateCard");
}

