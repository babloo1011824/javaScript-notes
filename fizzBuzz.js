//fizzBuzz means the number should be divided by both 3 and 5;
for(let i=1;i<36;i++){
    if(i%3==0 && i%5==0){
        console.log(i,"FIZZBUZZ");

    }else if(i%3==0){
        console.log(i,"Fizz");

    }else if(i%5==0){
        console.log(i,"Buzz");
        
    }
}