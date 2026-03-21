let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");


let fontzise= 16 ;

document.getElementById("changeheading").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById("bgcolorbtn").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}



document.getElementById("increasefontsize").addEventListener("click", function() {
    fontzise += 2;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
});



document.getElementById("decreasefontsize").addEventListener("click", function() {
    fontzise -= 2;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
});




document.getElementById("toggleparagraph").addEventListener("click", function() {  
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});



document.getElementById("reset").addEventListener("click", function() {
    heading.innerHTML = "Welcome to  JavaScript Lab";
    paragraph.innerHTML = "This is a sample paragraph. You can change the text, background color, and font size using the buttons above.";
    document.body.style.backgroundColor = "white";
    fontzise = 16;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
    paragraph.style.display = "block";
    input.value = "";
});