import { $yearSelect, $monthSelect, $daySelect } from "../../function/query.mjs";
import { isInvalidDate } from "../../function/isInvalidDate.mjs";
import { createCard } from "../../function/card.mjs";
import { g } from "./seiza.mjs";
import { createMonthOption } from "./createMonthOption.mjs";
import { createDayOption } from "./createDayOption.mjs";

export function autoSetSelect(date) {
    const targetDate = new Date(date);
    $yearSelect.value = targetDate.getFullYear();
    $yearSelect.disabled = false;
    createMonthOption();
    $monthSelect.value = targetDate.getMonth() + 1;
    $monthSelect.disabled = false;
    createDayOption();
    $daySelect.value = targetDate.getDate();
    $daySelect.disabled = false;
    const hu = `${g.valGetYear}/${g.valGetMonth}/${g.valGetDay}`;
    uranai_btn.disabled = !isInvalidDate(hu);
    const nio = new createCard();
    nio.icon = "check";
    nio.inHTML = "保存された生年月日を反映させました";
    document.querySelector("form").before(nio.creates())
    
}
