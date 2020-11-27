function sumPrimes(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}

sumPrimes(10);