function clipboard_copy() {
	// Get the text field
	var copyText = document.getElementById("writing_area");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);

	// Alert the copied text
	alert("Copied the text: " + copyText.value);
}

class TextHistory {
	constructor () {
		this.text = "";
	}

	setText(text) {
		this.text = text;
	}

	getHistory() {
		return this.text;
	}
}

function fillWritingArea(text) {
	let writing_area = document.querySelector("#writing_area")
	writing_area.value = text;
}

// create a browser session to store messages 
function saveText() {

	console.log('Saving text history...'); 

	let writing_area = document.querySelector("#writing_area")
	text_store.setText(writing_area.value);

	console.log(text_store.getHistory());

	sessionStorage.setItem('textHistory',   

		JSON.stringify(text_store.getHistory()));
}
 
// Function to load messages from the browser session 
function loadText() {

	// Recover text history from browser session 

	const textHistory = JSON.parse(sessionStorage.getItem('textHistory')); 

	if (textHistory) { 
		fillWritingArea(textHistory);
	}
}

var text_store = new TextHistory();


window.addEventListener("DOMContentLoaded", function() {
	loadText();
});

window.addEventListener("beforeunload", function() {
	saveText();
});
