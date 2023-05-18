// Random joke generator

function generateNumber(num) {
    return Math.floor(Math.random() * num)
}

// List of jokes
const jokes = [
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
]

// First test
let number = generateNumber(jokes.length)
console.log(jokes[number])