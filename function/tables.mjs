/**
 * テーブルを作成します
 * @export
 * @class tables
 */
export class tables {
  createTable(json) {
    const ul = document.createElement("ul");
    for (let j = 0; j < json.length; j++) {
      ul.className = "box";

      const li = document.createElement("li");
      li.title = `${json[j].title}`;
      li.tabIndex = 0;
      if (!(json[j].id === undefined)) {
        li.id = json[j].id;
      }

      if (json[j].responsive === true) {
        li.className = "notgrid";
      }
      if (!(json[j].Attribute === undefined)) {
        for (let ii = 0; ii < json[j].Attribute.length; ii++) {
          let keyArray = Object.keys(json[j].Attribute[ii]);

          for (let value of Object.values(json[j].Attribute[ii])) {
            li.setAttribute(keyArray[0], value);
          }
        }
      }

      const title = document.createElement("div");
      title.className = "box__itmes box__title";
      title.textContent = `${json[j].title}`;
      li.appendChild(title);

      const contents = document.createElement("div");
      contents.className = "box__itmes";
      if (json[j].contentsPadding === true) {
        contents.className = `${contents.className} noPadding`;
      }
      const content = document.createElement("div");

      content.className = "box__itmes__contents";
      
      content.innerHTML = `${json[j].contents}`;
      contents.appendChild(content);
      li.appendChild(contents);
      ul.appendChild(li);
    }
    return ul;
  }
}
