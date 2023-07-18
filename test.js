const arraytoUse = [
  { name: "fav", skinColor: "white", age: 20 },
  { name: "fav", skinColor: "black", age: 20 },
  { name: "dan", skinColor: "red", age: 20 },
  { name: "mercy", skinColor: "blue", age: 20 },
  { name: "praise", skinColor: "green", age: 20 },
];

function updateProperty(array, target, property, newValue) {
  let newArray = [];
  if (array.length < target) {
    return "current target not inside";
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i === target) {
        array[i][property] = newValue;
        newArray.push(array[i]);
      } else {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

console.log(updateProperty(arraytoUse, 2, "name", "daniela"));
