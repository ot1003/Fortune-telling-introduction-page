import { EndOfMonth } from "../../function/EndOfMont.mjs";
import { g, year, month, day, hs } from "./seiza.mjs";


export function createDayOption() {
  const ji = () => {
    let maxM;
    if (g.valGetYear === year && g.valGetMonth === month + 1) {
      maxM = day;
    } else {
      const jo = new Date(
        EndOfMonth(new Date(g.valGetYear, g.valGetMonth - 1))
      );
      maxM = jo.getDate();
    }
    return maxM;
  };

  hs.day(1, ji());
}
