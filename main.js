'use strict'

function demicalToBinary() {

    let inputNumber = +prompt("Enter the decimal number to be converted to binary:", "");


    if(isNaN(inputNumber)) {
        alert("Please enter the decimal number!");
    } else if (inputNumber === 0) {
return alert('0');
} else {
    
    
        function searchNearestNumber(num) { // Search the nearest number for input number
        let nearNumber = 1;
        while (num >= nearNumber) {
            nearNumber = nearNumber * 2;
        }
        return nearNumber / 2;
    }


    let nearestNumber = searchNearestNumber(inputNumber);
    let difference = inputNumber - nearestNumber;
    let arr = [];
    arr[0] = 1;

    for (let i = 1;; i++) {
        nearestNumber = nearestNumber / 2;
        if (difference >= nearestNumber) {
            arr[i] = 1;
            difference = difference - nearestNumber;
        } else {
            arr[i] = 0;
        }

        console.log(nearestNumber);
        if (nearestNumber == 1) {
            break;
        }
        console.log(arr);
    }
    
    alert(`Demical number ${inputNumber} in binary ${arr.join('')}`);
    }
}


demicalToBinary();