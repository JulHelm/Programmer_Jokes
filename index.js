const setupDiv = document.querySelector('#setup');
const punchlineDiv = document.querySelector('#punchline');
const punchlineBtn = document.querySelector('#punchlineBtn');
const newJokeBtn = document.querySelector('#newJokeBtn');
let punchline;

const getPunchline = () => {
	punchlineDiv.innerText = punchline;
	punchlineDiv.classList.add('bubble');
	punchlineBtn.classList.toggle('hidden');
	newJokeBtn.classList.toggle('hidden');
};

punchlineBtn.addEventListener('click', getPunchline);

const getJoke = async () => {
	const jokePromise = await fetch(
		'https://official-joke-api.appspot.com/jokes/programming/random'
	);
	const joke = await jokePromise.json();
	setupDiv.innerText = joke[0].setup;
	punchline = joke[0].punchline;
	punchlineDiv.innerText = '';
	punchlineDiv.classList.remove('bubble');
	punchlineBtn.classList.toggle('hidden');
	newJokeBtn.classList.toggle('hidden');
};

newJokeBtn.addEventListener('click', getJoke);

getJoke();
