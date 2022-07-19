'use strict';
export function randomStars() {
  const maxStar = 5;
  let num = Math.floor(Math.random() * maxStar + 1);
  let numhalf = Math.floor(Math.random() * 2);

  let star = `<span class="material-symbols-rounded">star</span>`;
  let halfstar = `<span class="material-symbols-rounded">star_half</span>`;
  let notstar = `<span class="material-symbols-rounded">grade</span>`;
  let stars = "";
  let starLength = 0;
  for (let a = 0; a < num; a++) {
    stars = stars + star;
    starLength++;
  }
  if (num === 0 || !(starLength >= maxStar)) {
    if (num === 0) {
      numhalf = 1;
    }
    for (let a = 0; a < numhalf; a++) {
      stars = stars + halfstar;
      starLength++;
    }
  }
  for (let a = 0; a < 5 - (num + numhalf); a++) {
    stars = stars + notstar;
    starLength++;
  }
  return stars;
}
