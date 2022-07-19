"use strict";
export class createCard {
  constructor(query, position) {
    this.query = query;
    this.position = position;
  }
  /**
   * @param {string} materialSymbol Material Symbolsのアイコンを指定します
   */
  set icon(materialSymbol) {
    this.materialSymbol = materialSymbol;
  }
  /**
   * @param {string} html info内テキストを指定します
   */
  set inHTML(html) {
    this.html = html;
  }
  id(elementId) {
    this.elementId = elementId;
  }
  /**
   * @param {HTMLElement} query
   * @param {String} position 追加する場所を指定します。appendChild：要素内の末尾。beforeは要素の前、afterは要素の後。
   * @memberof createCard
   */

  creates() {
    if (this.materialSymbol === undefined) {
      this.materialSymbol = "info";
    }
    const card = `
        <span class="material-symbols-rounded"> ${this.materialSymbol} </span
        >
        <main>${this.html}</main>
        <button type="button" class="closeButton" title="おしらせを削除">
          <span class="material-symbols-rounded"> close </span>
        </button>
      `;

    const div = document.createElement("article");
    div.className = "info";
    div.innerHTML = card; //html要素に変換
    deleteCard(div)
    return div;
  }
}

function deleteCard(query) {
  query.querySelectorAll(".closeButton").forEach((e) => {
    e.addEventListener("click", (ee) => {
      const card = e.closest(".info");
      card.remove();
    });
  });
}
