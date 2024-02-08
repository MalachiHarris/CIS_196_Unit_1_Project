
var top_left = document.getElementById("top_left");
var top_right =  document.getElementById("top_right");
var bottom_left = document.getElementById("bottom_left");
var bottom_right = document.getElementById("bottom_right");

var outputBox = document.getElementById("output_box");

var clr_itemcard = 'rgb(78, 25, 0)';


var sum = 0;


var playing = false;



//ORIGINAL EVENT LISTENER ADD
//event listener for button. Calls requirments() function
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("requirements");
    button.addEventListener("click", function() {

        if (!playing){

            requirements();
        }
    });
});





//FOR LOOP
//Calls color change and send i for on screen effect
async function requirements() {
    var inputValue = document.getElementById('user_input').value;
    
    if(!isNaN(parseInt(inputValue))){
        playing = true;
            for (let i = 0; i < 6; i++) {
                if (i<1) {
                changeColorSequentially(i);
                sum += parseInt(inputValue);
                outputBox.textContent = "Input * # of greys: " + sum;
            }
            else if (i<5){
                await delay(500); // Wait for 500 ms
                changeColorSequentially(i);
                sum +=parseInt(inputValue)
                outputBox.textContent = "Input * # of greys: " + sum;
            }
            else{
                await delay(500); // Wait for 500 ms
                changeColorSequentially(i);
                playing = false;
            }
        }
    }
    else
        alert("please enter a number to add.");
}




//DELAY FUNCTION
//Used simply for delay between color changes
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



        
//CHANGE COLOR FUNCTION
//takes i from loop and will change different segment.
function changeColorSequentially(i) {
    switch (i) {
        case 0:
            top_left.style.backgroundColor = "rgb(111,111,111)";
            break;
        case 1:
            top_left.style.backgroundColor = clr_itemcard;
            top_right.style.backgroundColor = "rgb(111,111,111)";
            break;
        case 2:
            top_right.style.backgroundColor = clr_itemcard;
            bottom_right.style.backgroundColor = "rgb(111,111,111)";
            break;
        case 3:
            bottom_right.style.backgroundColor = clr_itemcard;
            bottom_left.style.backgroundColor = "rgb(111,111,111)";
            break;
        case 4:
            bottom_left.style.backgroundColor = clr_itemcard;
            top_left.style.backgroundColor = "rgb(111,111,111)";
            break;
        case 5:
            top_left.style.backgroundColor = clr_itemcard;
            break;
    }


   
}
        
  


