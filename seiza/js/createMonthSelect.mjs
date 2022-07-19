import { $monthSelect, $daySelect } from "../../function/query.mjs";
import { year } from "./seiza.mjs";
import { createMonthOption } from "./createMonthOption.mjs";

export function createMonthSelect(e) {
    if (e.target.value.length === 4 && Number(e.target.value) <= year) {
        $monthSelect.querySelectorAll("option").forEach((e, index) => {
            e.remove();
        });
        createMonthOption();
        $monthSelect.disabled = false;
    } else {
        $monthSelect.disabled = true;
    }
    $daySelect.value = "";
    $daySelect.disabled = true;
    uranai_btn.disabled = true;
}
