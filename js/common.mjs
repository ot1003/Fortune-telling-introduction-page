"use strict";

import { support } from "./../function/support.mjs";
const supportsContainerQueries = "container" in document.documentElement.style;

if (!supportsContainerQueries) {
  import("https://unpkg.com/container-query-polyfill/cqfill.iife.min.js");
}

export const today = new Date();
export const year = today.getFullYear();
export const month = today.getMonth();
export const day = today.getDate();

if (!support(":has(div)")) {
  const target = document.querySelectorAll("label.select-wrap select");

  const selectElementDisabled = (selectElement) => {
    const selectClosest = selectElement.closest("label.select-wrap");

    if (selectElement.disabled) {
      selectClosest.classList.add("selectDisabled");
    } else {
      selectClosest.classList.remove("selectDisabled");
    }
  };

  // 監視ターゲットの取得

  // オブザーバーの作成
  target.forEach((e) => {
    selectElementDisabled(e);
    const observer = new MutationObserver((records) => {
      selectElementDisabled(records[0].target);
    });

    // 監視の開始
    observer.observe(e, {
      attributes: true,
    });
  });
}
if(!(document.querySelector("#pageback") === null)){
  document.querySelector("#pageback").addEventListener("click", (e) => {
  const ref = document.referrer;
  if (ref === null) {
    const ref_domain = ref.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    const now_domain = window.location.host;
    if (ref_domain === now_domain) {
      if (window.history.length >= 2) {
        history.back();
      } else {
        location.href = "/";
      }
    } else {
      location.href = "/";
    }
  } else {
    location.href = "/";
  }
});

twemoji.parse(document.body, {
  folder: "svg",
  ext: ".svg",
});
}
