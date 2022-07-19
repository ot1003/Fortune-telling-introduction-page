import { autoSetSelect } from "./autoSetSelect.mjs";

export const localBirthday = "ot_birthday";
export function loadFinished(event) {
    const sampleJson = JSON.parse(localStorage.getItem(localBirthday));
    if (!(sampleJson === null) && !(sampleJson[0].YouBirthday === undefined)) {
        autoSetSelect(sampleJson[0].YouBirthday);
    }
}
