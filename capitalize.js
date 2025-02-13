//Capitalize the first letters of every word
let text = "hello world";
let splitText = text.split(" ");
let capitalizeText = []
for(let i = 0; i < splitText.length; i++) {
    capitalizeText.push(splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1))
}
console.log(capitalizeText.join(" "))

//another example with map
let sentence = "hello world";
let words = sentence.split(" ");
let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitalized.join(" "))