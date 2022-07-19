export class dialogs {
  set titles(gettitle) {
    this.gettitle = gettitle;
  }
  get titles() {
    let ihi = this.gettitle;
    if (this.gettitle === undefined) {
      ihi = `問題が発生しました`;
    }
    return ihi;
  }
  set contents(getcontents) {
    this.getcontents = getcontents;
  }
  get contents() {
    let ihi = this.getcontents;
    if (this.getcontents === undefined) {
      ihi = `内容が定義されていません`;
    }
    //ihi = ihi.replace(/\r?\n/g, "<br/>");
    ihi = ihi.replace(/<contents>/gi, `<div class="contents_main">`);
    ihi = ihi.replace(/<\/contents>/gi, "</div>");
    let str = ihi;
    /*let regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    let regexp_makeLink = function (all, url, h, href) {
      return `<a href="h${href}" title="h${href}" class="inlink" target="_blank">${url}</a>`;
    };
    ihi = str.replace(regexp_url, regexp_makeLink);*/

    return ihi;
  }

  /**
   *
   * @memberof dialogs
   */
  set icons(geticon) {
    this.geticon = geticon;
  }
  get icons() {
    let gug = this.geticon;
    if (gug === undefined) {
      gug = "error";
    }

    return gug;
  }
  /**
   * @param {boolean} backdropCloseB
   */
  set backdropClose(backdropCloseB) {
    this.backdropCloseB = backdropCloseB;
  }
  /**
   *
   * @param {JSON} json [{buttontext: ボタンのテキスト, value: "Yes", autofocus: true }]
   */
  set actionButtons(json) {
    this.json = json;
  }
  get actionButtons() {
    if (this.json === undefined) {
      const json = [{ buttontext: "OK", value: "Yes", autofocus: true }];
      return json;
    } else {
      return this.json;
    }
  }
  create() {
    const newDiv = document.createElement("dialog");
    const methodDialog = document.createElement("form");
    methodDialog.setAttribute("method", "dialog");

    //ヘッダー本体
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.title = this.titles;
    h3.className = "contents_main";

    //アイコン
    const icon = document.createElement("span");
    icon.className = "material-symbols-rounded";
    icon.textContent = this.icons;
    h3.appendChild(icon);

    //ヘッダータイトル（文字）
    const title = document.createElement("div");
    title.className = "dialog_title";

    title.textContent = this.titles;

    h3.appendChild(title);

    header.appendChild(h3);
    methodDialog.appendChild(header);

    /* mainエリア */
    const content = document.createElement("main");
    const iju = document.createElement("section");
    iju.innerHTML = this.contents;
    content.appendChild(iju);
    methodDialog.appendChild(content);
    if (!(this.actionButtons === false)) {
      const footer = document.createElement("footer");
      const action = document.createElement("div");
      action.className = "from-action contents_main";
      for (let y = 0; y < this.actionButtons.length; y++) {
        const actionButton = document.createElement("button");
        actionButton.className = "outlineButton";
        actionButton.type = "submit";
        if (!(this.actionButtons[y].value === undefined)) {
          actionButton.value = this.actionButtons[y].value;
        }
        if (this.actionButtons[y].autofocus) {
          actionButton.autofocus = true;
        }

        actionButton.innerHTML = this.actionButtons[y].buttontext;
        action.appendChild(actionButton);
      }
      footer.appendChild(action);
      methodDialog.appendChild(footer);
    }
    newDiv.appendChild(methodDialog);

    document.body.appendChild(newDiv);

    newDiv.addEventListener("close", (event) => {
      newDiv.remove();
    });
    if (!(this.backdropCloseB === false)) {
      newDiv.addEventListener("click", (event) => {
        if (event.target === newDiv) {
          newDiv.close();
        }
      });
    }

    return newDiv;
  }
}
