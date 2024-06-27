//GenerateNumer
const letters = "abcdefghijklmnopqrstuvwxyz123456789"
//kda m3ana itraitor n2dr nloob 3la kal letter wn3ml beh 7aga
let lettersArray = Array.from(letters);
//3mlna array 38an nloob 2la al7rof mn 2lmt8er 3n tre2 array constructor wla method bt3dha from
let lettercontainer = document.querySelector(".letters");
//mskna 2lmt8er 2ly 7ndef feh alspans wkl spans feha 7rf
lettersArray.forEach(letter => {
    let lettertext = document.createTextNode(letter)
    let span = document.createElement("span")
    span.className = "letter-box"
    span.appendChild(lettertext)
    lettercontainer.appendChild(span)
})



//GenerateChosenWordAndCategory
//3mlna object bta3 catagory 34an 3yzen keys bysawy arrays feha klmat kasa bal catacory al tm a5tyaro
word = {
    kidneys: ["creatine" , "urea"],
    liver: ["sgot", "sgpt"],
    heart: ["Troponen"],
    internal: ["fbs", "ptt", "pt", "hb1c", "insulin resistance", "cpr", "quantit ferron ,T4 ,T3 ,TSH "]
}
//method fe 2lobject 24an y7tfz bl keys fe array
allkeys = Object.keys(word)

//nbtaty ngeb random number yageb randow key yageb wa random number yageb random word 

let randowKeynumber = Math.floor(Math.random() * allkeys.length)

let randomProb = allkeys[randowKeynumber]

let randomKeysvalues = word[randomProb]

let randomwordNumber = Math.floor(Math.random() * randomKeysvalues.length)

let thechosenwWord = randomKeysvalues[randomwordNumber]
//dfna al random catagory fe span alfady bta3 alcatagory
document.querySelector(".category span").innerHTML = randomProb
// span of word//
//tyb a7na 3yzen ngeb array mn alchosen word 34an lw al7rf altosto = al7rf aly fe alword ndefo fe span fe letterguess
let letterguess = document.querySelector(".letter-guess")
let chosenletters = Array.from(thechosenwWord.toLowerCase())

console.log(chosenletters)

chosenletters.forEach(letters => {
    Emptyspan = document.createElement("span")
    if (letters === ' ') {
        Emptyspan.className = "with-space"
    }
    letterguess.appendChild(Emptyspan)
})

//handel clicked letter and appear in span inner html if the letter is right
console.log(thechosenwWord)
//a7na 3yzen lma ntoz 2l ay letter yeegarn lw al7rf fe
//lklma yt5lo fo alspan lw l2 yaml class dynamic b5t2 kol 5t2 ba racm
let guessSpans = document.querySelectorAll(".letter-guess span")
let wrongGuess = 0
let draw = document.querySelector(".hangman-draw")
document.addEventListener("click", (e) => {
    let thestatues = false
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked")
        let theclickedletter = e.target.innerHTML.toLowerCase()
        chosenletters.forEach((lett, wordindex) => {
            if (lett == theclickedletter) {
                thestatues = true
                guessSpans.forEach((span, spanIndex) => {
                    if (spanIndex === wordindex) {
                        span.innerHTML = lett
                        span.className ="get"
                    }
                })
            }
        })
        if (thestatues == ! true) {
            wrongGuess++;
            draw.classList.add(`Wrong-${wrongGuess}`)
            document.getElementById("fail").play()
            if (wrongGuess === 8) {
                endGame()
                lettercontainer.classList.add("finished")
            }
        }else{
            document.getElementById("success").play()
            let filledspan = document.querySelectorAll(".letter-guess span.get")
            if(filledspan.length === chosenletters.length ){
                nice()
                lettercontainer.classList.add("finished")
            }else{
                console.log("errol")
            }
        }
    }
})


function endGame() {
    let div = document.createElement("div")
    let button = document.createElement("button")
    button.classList.add("overbutton")
    let buttontxt = document.createTextNode("TryAgain")
    button.appendChild(buttontxt)
    div.appendChild(button)
    button.addEventListener("click", () => {
        window.location.reload()
    })
    let divtext = document.createTextNode(`Game over the word is ${thechosenwWord}`)
    div.appendChild(divtext)
    div.className = "popup"
    document.body.appendChild(div)
}
function nice() {
    let div = document.createElement("div");
    let level = "good";
    let button = document.createElement("button");
    button.classList.add("overbutton");
    let buttontxt = document.createTextNode("Next");
    button.appendChild(buttontxt);
    div.appendChild(button);
    button.addEventListener("click", () => {
        window.location.reload();
    })
    wrongGuess < 4 ? level = "verygood" : level = "notbad" ;
    let divtext = document.createTextNode(`congratulations u won after ${wrongGuess} mistakes ur level is ${level}`);
    div.appendChild(divtext);
    div.className = "popup";
    document.body.appendChild(div);
}





