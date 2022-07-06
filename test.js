
//makes 400 boxes with class, id, event listener for onmousover, and puts them in the countainer div
window.onload = function addBoxes() {
    for (let i = 0; i < 400; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.setAttribute('id', i)
        // newDiv.setAttribute('onmouseenter', 'colorchange(' + i + ')')
        newDiv.addEventListener("mouseenter", ()=>{
            colorchange(i)
        })
        document.getElementById("container").appendChild(newDiv);
    }
}

//a box that's moused over gets randomized rgb values, and then full opacity(a).  
//then the opacity erodes over a set interval 
//NOTE:boxes that have been changed once flicker if moused over a second time

function colorchange(boxId) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = 1.0;
    const box = document.getElementById(boxId);
    box.style.backgroundColor = ["rgba(", r, ",", g, ",", b, ",", a, ")"].join("");

    

    const intervalID = setInterval(function decay() {
        //while (a > 0.0) {
        a = a - .01;
        //}
        const box = document.getElementById(boxId)

        box.style.backgroundColor = ["rgba(", r, ",", g, ",", b, ",", a, ")"].join("");
        if (a <= 0) {
            clearInterval(intervalID)
        }
    }, 1);
    if (box.dataset.fadeId) {
        clearInterval(parseInt(box.dataset.fadeId))
    }
    box.dataset.fadeId = intervalID
}


//make squares have opacity
//make their opacity fade