var current_step = 1;
var nb_steps = document.querySelector("#current-step > p").textContent.split("/")[1];

function update_step(step) {
	// change image
	let img = document.querySelector("#image-step");
	img.src = "./steps/" + String(current_step) + ".png";
	// change the current step indicator
	let current_step_indicator = document.querySelector("#current-step > p");
	current_step_indicator.textContent = String(current_step) + "/" + nb_steps;
}

function previous_step() {
	if (current_step > 1) {
		current_step -= 1;
		update_step(current_step);
	}
}

function next_step() {
	if (current_step < nb_steps) {
		current_step += 1;
		update_step(current_step);
	}
}

function first_step() {
	current_step = 1;
	update_step(current_step);
}

function last_step() {
	current_step = nb_steps;
	update_step(current_step);
}
