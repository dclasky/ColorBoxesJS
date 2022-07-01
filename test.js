
// function round() {
//     document.getElementById('square').setAttribute("class",)
// }



window.onload = function addBoxes() {
    for (let i = 0; i < 400; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.setAttribute('id', i)
        newDiv.setAttribute('onmouseover', 'colorchange(' + i + ')')
        document.getElementById("container").appendChild(newDiv);
    }
}

function colorchange(boxId) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.getElementById(boxId).style.backgroundColor = ["rgb(", r, ",", g, ",", b, ")"].join("");
}
