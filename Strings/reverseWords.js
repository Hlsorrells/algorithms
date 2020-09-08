function reverseString(str) {
  console.log(str)
  const newStringArr = str.split(" ")
  console.log(newStringArr)
  newStringArr.reverse()
  const newString = newStringArr.join(" ")
  console.log(newString)
}
reverseString("Hi my name is Heather")
