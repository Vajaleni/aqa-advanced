function areaRec(width, height) {
  return width * height;
}
console.log(areaRec(5, 10));

const areaRec2 = (width, height) => {
  return width * height;
};
console.log(areaRec2(5, 11));

const areaRec3 = function (width, height) {
  return width * height;
};
console.log(areaRec3(5, 12));
