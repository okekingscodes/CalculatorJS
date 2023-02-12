
// Declaring constant variables

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Adding events and functions to each of the buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ace") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})