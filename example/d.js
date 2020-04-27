// const dictionary = [
//   [ "Pavel", "5"],
//   [ "Oleg", "2"],
//   [ "Vitya", "4"],
//   [ "Nastya", "2"],
//   [ "Oleg", "1"],
// ]

const dictionary = {
  "Pavel": 5,
  "Oleg": 2,
  "Vitya": 4,
  "Nastya": 2,
  "Oleg": 1
}
let columnEnter = {}
let columnNotEnter = {}
for (let dictionaryKey in dictionary) {
  if (dictionary[dictionaryKey] >= 4) {
    columnEnter[dictionaryKey] = dictionary[dictionaryKey]
  } else if (dictionary[dictionaryKey] < 4)
    columnNotEnter[dictionaryKey] = dictionary[dictionaryKey]
}

console.log(columnEnter)
console.log(columnNotEnter)