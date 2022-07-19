'use strict';
export const onPressTest = async () => {
  const url = "../data.json";
  return fetch(url).then((res) => res.json());
};
