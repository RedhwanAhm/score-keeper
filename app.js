const s1 = document.querySelector("#pl1");
const s2 = document.querySelector("#pl2");
const points = document.querySelector("#points");
const buttons = document.querySelector(".buttons");

let p1 = 0;
let p2 = 0;
let pts = parseInt(points.value);


points.addEventListener("change", () => {
    pts = parseInt(points.value);
    reset();
});

buttons.addEventListener("click", (e) => {
    let selection = parseInt(e.srcElement.value);
    switch(selection) {
        case 1:
            p1++;
            s1.textContent = `${p1}`;
            checkScores();
            break;

        case 2:
            p2++;
            s2.textContent = `${p2}`;
            checkScores();
            break;

        case 3:
           reset();
            break;
    }
});

function checkScores() {
    if(p1 === pts) {
        s1.style.color = "green";
        s2.style.color = "red";
        buttons.children[0].disabled =  buttons.children[1].disabled = true
        buttons.children[0].style.opacity = buttons.children[1].style.opacity = "0.5";
    }
    else if(p2 === pts) {
        s2.style.color = "green";
        s1.style.color = "red";
        buttons.children[0].disabled =  buttons.children[1].disabled = true;
        buttons.children[0].style.opacity = buttons.children[1].style.opacity = "0.5";
    }
}  

function reset() {
    p1 = p2 = 0;
    s1.textContent = s2.textContent = "0";
    s1.style.color = s2.style.color = "black";
    buttons.children[0].disabled =  buttons.children[1].disabled = false;
    buttons.children[0].style.opacity = buttons.children[1].style.opacity = "1";
}