export function shareImageChecked(name) {
    const sampleJson = JSON.parse(localStorage.getItem(name));
    let his = [];
    if (!(sampleJson === null)) {
        sampleJson.forEach((Elements) => {
            his.push(Elements.name);
        });
    }
    return his;
}
