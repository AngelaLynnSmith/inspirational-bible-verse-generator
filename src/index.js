function displayVerse(response) {
	new Typewriter("#verse", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

function generateVerse(event) {
	event.preventDefault();

	let userInput = document.querySelector("#user-input");
	let apiKey = "cc8ad09bc07492ceeb391dfbot84812f";
	let context =
		"You are an AI designed to provide information from the Bible. I am requesting a relevant Bible verse based on user input. Always conclude with 'SheCodes AI' enclosed in a <strong> element.";
	let prompt = `Please suggest a Bible verse related about ${userInput}. 
    Use the ESV Version for the response. Provide both the verse and its context, if possible.`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let verseElement = document.querySelector("#verse");
	verseElement.classList.remove("hidden");
	verseElement.innerHTML = `<div class="generating">⏳️ Generating an inspirational Bible verse about ${userInput.value} 📖</div>`;

	axios.get(apiUrl).then(displayVerse);
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);

