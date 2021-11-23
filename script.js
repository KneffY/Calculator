let screen = document.getElementById('display');
let lastButton = "";

let buttonClick = (a) => {
    lastButton+=a;
    screen.innerHTML = lastButton;
    console.log(a);
}
