"use strict"

// Selecting Elements
const displayEL = document.querySelector("input");
const convertBtnEL = document.querySelector("button");

//Test cases :
/*
underscore_case
first_name
Some_Variable
calculated_departure
delayed_departure
*/

// Function to convert the strings to camelCase
convertBtnEL.addEventListener("click", function () {

    let arrInput = [];
    // Check if input contains "_"
    if (displayEL.value.includes("_")) {
        arrInput = displayEL.value.split("_");
        let result = [];
        for (let i = 0; i < arrInput.length; i++) {
            if (i < 1) {
                result.push(arrInput[0].toLowerCase());
            } else if (i >= 1) {
                result.push(arrInput[i].substring(0, 1).toUpperCase() +
                    arrInput[i].slice(1).toLowerCase());
            }
        }
        const camelCased = (String([...result]).replace(",", ""));
        // Displaying the camelCased string
        console.log(camelCased);
        displayEL.value = camelCased;
        displayEL.style.border = "2px solid green";
    }
})


