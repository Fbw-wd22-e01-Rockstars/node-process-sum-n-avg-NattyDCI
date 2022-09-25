

const operation = function (oper, num1, num2) {

    let numero1 = isNaN(num1)
    let  numero2 = isNaN(num2);
    if (numero1 === true || numero2 === true) {
        return "the parameters must be numbers";}
    else {
            
            if (oper == "add") {
                return num1 + num2;
            }
            else if (oper == "avg") {
                return ((num1 + num2) / 2).toFixed(2);
            }    
            
        }
     
}

console.log(operation("add", "wait", 2)); //The Parameters must be numbers 
console.log(operation("avg", 7, 2));


/* 

console.log(operation("add", 1, 2)); 

const num1 = isNaN("hello"); 

if (num1 == true) {
    console.log("true");
}
 */