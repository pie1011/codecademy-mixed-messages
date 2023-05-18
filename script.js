// Laugh and Learn

function generateNumber(num) {
    return Math.floor(Math.random() * num)
}

// List of jokes
const collection = {
    jokes: [
        "What did the horse say after it tripped? Help! I've fallen and I can't giddyup!",
        "Why can't you hear a pterodactyl going to the bathroom?  Because the 'P' is silent",
        "What do you call a well-balanced horse?  Stable.",
        "What do you call an angry carrot?  A steamed veggie.",
        "Where do polar bears keep their money?  In a snowbank.",
        "How do you make an egg-roll?  You push it!",
        "What would bears be without bees?  Ears.",
        "What do you call a pile of cats?  A meow-ntain.",
        "Why do cows wear bells?  Because their horns don't work. ",
        "Why did the bicycle fall over?  Because it was two tired."
    ],
    trivia: [
        "Who, in 1903, was the first woman to win a Nobel Prize?  Answer: Marie Curie ",
        "What year did the Berlin wall fall?  Answer: 1989 ",
        "What is the more popular name for the portrait officially titled 'La Gioconda,' painted in 1503? Answer: The Mona Lisa. ",
        "What element does the chemical symbol Au stand for?  Answer: Gold ",
        "What is the sign directly opposite Scorpio in the zodiac?  Answer: Taurus ",
        "Who is considered the first female self-made millionaire in the U.S.?  Answer: Madam C.J. Walker ",
        "How many colors were on the original Pride flag, flown at the San Francisco Gay Freedom Day Parade in 1978? Answer: Eight (the pink and turquoise stripes were dropped by 1979 for production reasons) ",
        "What is the first name of the main female protagonist in Zora Neale Hurston's classic novel Their Eyes Were Watching God?  Answer: Janie ",
        "The shooting of whom, in 1914, started World War I?  Answer: Archduke Franz Ferdinand ",
        "What is the smallest planet in our solar system?  Answer: Mercury"
    ]
}

// Get random joke and trivia
function generateResponse() {
    let jokeResult = collection.jokes[generateNumber(collection.jokes.length)]
    let triviaResult = collection.trivia[generateNumber(collection.trivia.length)]
    console.log(jokeResult)
    console.log(triviaResult)
    return jokeResult + " and " + triviaResult
}

generateResponse()