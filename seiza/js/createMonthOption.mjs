import { g, year, month, hs } from "./seiza.mjs";

export function createMonthOption() {
    const ji = () => {
        let maxM;
        if (g.valGetYear === year) {
            maxM = month + 1;
        } else {
            maxM = 12;
        }
        return maxM;
    };

    //alert(today.getMonth() + 1);
    hs.month(1, ji());
}
