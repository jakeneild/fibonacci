var fibo = [0, 1]

function findFibo(limit){
    for(let i=1; i <= limit; i++){
        fibo[i+1] = fibo[i] + fibo[i-1];
    }
    return fibo[limit];
}
console.log(fibo);

console.log(findFibo(8));