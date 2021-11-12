let num=56;
function isPrime(num){
    let flag=true;
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
}
isPrime(num);
