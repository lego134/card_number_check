let cardNumberEl = document.querySelector(".cardNumber");
let btn = document.querySelector(".btn")
let checkValueEl = document.querySelector(".checkValue")
//  We have an function that is call work it is trigered by onclick event.
function Work(){
    /* We have a variable that is call number,
     that take the value of the card number enter.*/
    let number = cardNumberEl.value;
    // We have a empty array.
    let cardNumberArray = [];
    /* Variable that is call sNumber that is set to the number variable.
    number we convernt to an string */
    let sNumber = number.toString();
    // We have a empty array.
    aboveTen = [];
    // We have a empty array.
    Total = [];
    // We have a empty array.
    finalNumber = [];
    for(let i = 0; i < sNumber.length; i++){
        cardNumberArray.push(Number(sNumber.charAt(i)));
        function evenNumber(){
            if(i % 2 === 0){
                aboveTen.push(cardNumberArray[i] * 2);
            }else{
                Total.push(cardNumberArray[i]);  
            }
        }
        function aboveTenFunction(){
            for(let j = 0; j < aboveTen.length; j++){
                if(aboveTen[j] > 9){
                    Total.push(aboveTen[j] - 9)
                }else{ 
                    Total.push(aboveTen[j]);       
                }
            }  
        }
            function checkNumberFuncton(){
                let sumCardNumber = 0;
                for(let i = 0; i < Total.length; i++){
                    sumCardNumber += Total[i]
                }
                let sNumber2 = sumCardNumber.toString();
                    for(let i = 0; i < sNumber2.length; i++){
                        finalNumber.push(Number(sNumber2.charAt(i)));
                    }
                    let numberOut = finalNumber[finalNumber.length - 1];
                    let checkNumber = (10 - Number(numberOut)) 
                    if(checkNumber === 10){
                        checkValueEl.innerText = 0
                    }else{
                        checkValueEl.innerText = checkNumber   
                    }
                       
            }
            evenNumber()   
    }
    aboveTenFunction()
    checkNumberFuncton()
}   