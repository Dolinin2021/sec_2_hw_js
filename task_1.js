function createArrPrimes(count) {
    let arr = [];
    let cursorNumber = 2;
    while(count != 0) {
        if(isPrime(cursorNumber)) {
            arr.push(cursorNumber);
            count--;
        } 
        cursorNumber++;
    }
    return arr;
}


function isPrime(number) {
    var i = 2;
    while(i <= number/2) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}


console.log(createArrPrimes(process.argv[2]));