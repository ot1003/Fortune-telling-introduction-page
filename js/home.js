"use strict";
if (location.protocol === "file:") {
  const parentnode = document.querySelector(".main_contents");
  const child = document.createElement("div");
  child.className = "contents_area";
  child.innerHTML = `
        <article class="info">
          <span class="material-symbols-rounded"> warning </span>
          <main>
          この先のファイルでは、<a
              href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules"
              class="inlink"
              target="_blank"
              rel="noopener noreferrer"
              >JavaScript モジュール</a
            >を使用しているため、現在の環境では正常に動作できません。<br><br><a
              href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
              class="inlink"
              target="_blank"
              rel="noopener noreferrer"
              >Live Server(VS Code)</a
            >や<a
              href="https://enjalot.github.io/served/"
              class="inlink"
              target="_blank"
              rel="noopener noreferrer"
              >Served</a
            >などのローカルサーバー環境が必要です。
          </main>
        </article>
      `;
  parentnode.prepend(child);
}