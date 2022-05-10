

let string = "4311o th3r3 w0r1d"
let newString = string.split(" ")
let timer = 1000

for (let i = 0; i < newString.length; i++) {
  setTimeout(() => console.log(newString[i]), timer)
  timer += 1000
}



