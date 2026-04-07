function startCountdown() {
    let num = parseInt(document.getElementById("number").value);

    let output = "";

    for (let i = num; i >= 1; i--) {
        output = output + i + " ";
    }

    document.getElementById("output").innerHTML = output;
}