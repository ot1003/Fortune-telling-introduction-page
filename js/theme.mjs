import { changeTohex } from "../function/changeTohex.mjs";

const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
const dark = "#000";
const light = "#fff";
document.head.insertAdjacentHTML(
  "beforeEnd",
  '<meta name="theme-color" content="#fff"/>'
);
const { GetBgColor, $metaThemeColor } = colorbar();

const sampleJsons = JSON.parse(localStorage.getItem("ot_themes"));
if (sampleJsons === null || sampleJsons[0].theme === "auto") {
  const setColorScheme = (e) => {
    
    if (e.matches) {
      // Dark
      document.body.setAttribute("theme", "dark");
    } else {
      // Light
      document.body.setAttribute("theme", "light");
    }colorbar();
  };

  setColorScheme(colorSchemeQueryList);
  colorSchemeQueryList.addEventListener("change", setColorScheme);

} else if (sampleJsons[0].theme === "light") {
  document.body.setAttribute("theme", "light");
} else if (sampleJsons[0].theme === "dark") {
  document.body.setAttribute("theme", "dark");
}
colorbar();
function colorbar() {
  const GetBgColor = window
    .getComputedStyle(document.body, null)
    .getPropertyValue("background-color");
  const $metaThemeColor = document.querySelector('meta[name="theme-color"]');
  $metaThemeColor.setAttribute("content", changeTohex(GetBgColor));
  return { GetBgColor, $metaThemeColor };
}
