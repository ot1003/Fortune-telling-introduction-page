import { tables } from "../tables.mjs";
import { dialogs } from "../dialog.mjs";
import { shareImageChecked } from "./shareImageChecked.mjs";

export const shareSettingButton = (localshareImage) => {
  let addData = [
    {
      title: "タイトル",
      value: "title",
      check: true,
    },
  ];
  const boxs = document.querySelectorAll("#Uranaikekka ul.box li");
  boxs.forEach((box, index) => {
    let attvalue = box.getAttribute("tablename");

    let boxtitle = box.querySelector(".box__title").textContent;
    let json = {
      title: boxtitle,
      value: attvalue,
      check: true,
    };
    addData.push(json);
  });
  let da = [];
  let his = shareImageChecked(localshareImage);


  addData.forEach((elms, index) => {
    let wcheck = "";

    if (elms.check === true) {
      wcheck = "checked";
    }
    if (his.includes(elms.value)) {
      wcheck = "";
    }
    const swutchTable = {
      title: elms.title,
      value: elms.value,
      responsive: true,
      contents: `<input type="checkbox" class="switch" value="${elms.value}" ${wcheck}>`,
    };
    da.push(swutchTable);
  });
  da.forEach((dates, index) => {});
  const idsd = new dialogs();
  const ggd = new tables();

  idsd.titles = `共有画像設定`;
  idsd.backdropClose = false;
  idsd.icons = "settings";
  idsd.actionButtons = [
   
    { buttontext: "変更しない", value: "No",  },
     { buttontext: "適用する", value: "Yes", autofocus: true },
  ];
  idsd.contents = `
    <contents>共有時にテーブルを表示する項目を変更できます。</contents>
    <contents>${ggd.createTable(da).outerHTML}</contents>`;

  const hi = idsd.create();
  hi.addEventListener("close", (event) => {
    if (event.target.returnValue === "Yes") {
      let shareImage = [];

      hi.querySelectorAll("input").forEach((e) => {
        if (!e.checked) {
          shareImage.push({ name: e.value });
        }
      });

      const jsonString = JSON.stringify(shareImage);
      localStorage.setItem(localshareImage, jsonString);
    }
  });
  hi.showModal();
};
