//simple function
function f1()
{
    console.log("Hii, This is Babloo singh");
}
f1();
//function with arguments

function f2(singh){
    console.log(singh);
}
f2(3);
//return by function

function f3(singh){
    console.log(singh);
    return "something";//if we return something then value will print something

}
let value=f3(6);
console.log(value);//it will give undefined because function is not returning any thing
