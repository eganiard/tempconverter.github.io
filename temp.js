// alert('test')
// TEMPERATURE CONVERSION PROGRAM

const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;

// function for the conversion of entries.
function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }

}