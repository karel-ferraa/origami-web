function findPersonality() {
    let score = [0, 0, 0]
    score = computeScore(score);
    let result = document.getElementsByClassName("result")[0];
    result.style.display = "block";
    if (score[0] === 0 && score[1] === 0 && score[2] === 0) {
        result.getElementsByTagName("h3")[0].textContent = "You are a white sheet of paper.";
        console.log("you are a white sheet of paper");
    } else if (score[0] === score[1] && score[1] === score[2]) {
        result.getElementsByTagName("img")[0].src = "origami/chameleon/chameleon.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are a chameleon.";
        console.log("you are a chameleon");
    } else if (score[0] > score[1] && score[0] > score[2]) {
        result.getElementsByTagName("img")[0].src = "origami/totoro/totoro.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are a totoro.";
        console.log("you are a totoro");
    } else if (score[1] > score[0] && score[1] > score[2]) {
        result.getElementsByTagName("img")[0].src = "origami/turtle/turtle.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are a turtle.";
        console.log("you are a turtle");
    } else if (score[2] > score[0] && score[2] > score[1]) {
        result.getElementsByTagName("img")[0].src = "origami/frog_prince/frog_prince.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are the frog prince.";
        console.log("you are the frog prince");
    } else if (score[0] === score[1] && score[0] > score[2]) {
        result.getElementsByTagName("img")[0].src = "origami/elephant/elephant.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are an elephant.";
        console.log("you are an elephant");
    } else if (score[0] === score[2] && score[0] > score[1]) {
        result.getElementsByTagName("img")[0].src = "origami/cat/cat.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are a cat.";
        console.log("you are a cat");
    } else if (score[1] === score[2] && score[1] > score[0]) {
        result.getElementsByTagName("img")[0].src = "origami/athletic_bear/athletic_bear.gif";
        result.getElementsByTagName("h3")[0].textContent = "You are an athletic bear.";
        console.log("you are an athletic bear");
    }
}

function computeScore(score) {
    if (document.getElementById("1a").checked) {
        score[0] = score[0] + 1;
    } else if (document.getElementById("1b").checked) {
        score[1] = score[1] + 1;
    } else if (document.getElementById("1c").checked) {
        score[2] = score[2] + 1;
    }
    if (document.getElementById("2a").checked) {
        score[0] = score[0] + 1;
    } else if (document.getElementById("2b").checked) {
        score[1] = score[1] + 1;
    } else if (document.getElementById("2c").checked) {
        score[2] = score[2] + 1;
    }
    if (document.getElementById("3a").checked) {
        score[0] = score[0] + 1;
    } else if (document.getElementById("3b").checked) {
        score[1] = score[1] + 1;
    } else if (document.getElementById("3c").checked) {
        score[2] = score[2] + 1;
    }
    if (document.getElementById("4a").checked) {
        score[0] = score[0] + 1;
    } else if (document.getElementById("4b").checked) {
        score[1] = score[1] + 1;
    } else if (document.getElementById("4c").checked) {
        score[2] = score[2] + 1;
    }
    if (document.getElementById("5a").checked) {
        score[0] = score[0] + 1;
    } else if (document.getElementById("5b").checked) {
        score[1] = score[1] + 1;
    } else if (document.getElementById("5c").checked) {
        score[2] = score[2] + 1;
    }
    return score;
}
