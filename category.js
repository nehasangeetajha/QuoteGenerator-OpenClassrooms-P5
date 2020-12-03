let btncategory = document.getElementById('btncategory');
let outputcategory = document.getElementById('outputcategory');
let reset = document.getElementById('reset');


let inspiration = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” ― Albert Einstein',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“So many books, so little time.” ― Frank Zappa',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“You only live once, but if you do it right, once is enough.” ― Mae West',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Be the change that you wish to see in the world.” ― Mahatma Gandhi',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“If you tell the truth, you dont have to remember anything.” ― Mark Twain',
    'Nothing is impossible, the word itself says “I’m possible”! -- Audrey Hepburn'
];

let beauty = [
    "Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting. Ralph Waldo Emerson",
    "Beauty itself is but the sensible image of the Infinite. Francis Bacon",
    "Think of all the beauty still left around you and be happy. Anne Frank",
    "The problem with beauty is that it's like being born rich and getting poorer. Joan Collins",
    "Flowers... are a proud assertion that a ray of beauty outvalues all the utilities of the world. Ralph Waldo Emerson",
    "Love of beauty is taste. The creation of beauty is art. Ralph Waldo Emerson"
]



btncategory.addEventListener('click', function () {
    let number = document.getElementById("number").value;
    let category = document.getElementById("categories").value;
    let randomQuote;
    //console.log(number);

    outputcategory.innerHTML = "";
    while (number--) {
        if (category == "Inspirational") {
            randomQuote = inspiration[Math.floor(Math.random() * inspiration.length)]
            outputcategory.innerHTML += '<p>' + randomQuote + '</p>';
        }
        else {
            randomQuote = beauty[Math.floor(Math.random() * beauty.length)]
            outputcategory.innerHTML += '<p>' + randomQuote + '</p>';
        }
    }
})

reset.addEventListener('click', function () {
    outputcategory.innerHTML="Choose again and press button to read quotes";
})