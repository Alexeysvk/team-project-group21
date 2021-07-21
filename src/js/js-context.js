let checkIt = true;


let btn = document.getElementById("btn");
btn.addEventListener("click", readMore);

function readMore() {
let dots = document.getElementById("dots");
let more = document.getElementById("more");

if (checkIt) {
more.style.display = "inline";
dots.style.display = "none";
btn.innerHTML = "";
checkIt = false;
} else {
dots.style.display = "inline";
more.style.display = "none";
btn.innerHTML = "";
checkIt = true;
}

}