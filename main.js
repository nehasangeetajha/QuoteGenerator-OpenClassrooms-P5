let btnrandom = document.getElementById('btnrandom');
let outputrandom = document.getElementById('outputrandom');

let beginning = [
    "Count your blessings",
    "Try your best",
    "Nobody is perfect",
    "Now or never",
    "Use your wings"
]

let middle = [
    "Do not give up",
    "All is well",
    "Keep it cool",
    "You are enough",
    "Winners never quit"
]

let end = [
    "Dreams come true",
    "Conquer from within",
    "Focus and win",
    "Pursue your passion",
    "Make it happen",
    "Smile. Sparkle. Shine"
]

let generate=()=>{
    const randomQuote = beginning[Math.floor(Math.random() * beginning.length)] +" " + middle[Math.floor(Math.random() * middle.length)] + " " + end[Math.floor(Math.random() * end.length)];
    //console.log(randomQuote);
    return randomQuote;
}


btnrandom.addEventListener('click', function(){
    // const randomQuote = beginning[Math.floor(Math.random() * beginning.length)] +" " + middle[Math.floor(Math.random() * middle.length)] + " " + end[Math.floor(Math.random() * end.length)]
    //outputrandom.innerHTML = randomQuote;

    outputrandom.innerHTML = generate();

})

