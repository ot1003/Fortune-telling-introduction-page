import { $daySelect } from "../../function/query.mjs";
import { createDayOption } from "./createDayOption.mjs";

export function createDaySelect(e) {
    uranai_btn.disabled = true;
    if (e.target.value) {
        $daySelect.querySelectorAll("option").forEach((e, index) => {
            e.remove();
        });

        $daySelect.disabled = false;
        createDayOption();
    } else {
        $daySelect.disabled = true;
    }
}
