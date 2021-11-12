// let a=[];
// a[0]=6;
// a[1]=8;
// a[2]=27;
// console.log(a);
// ////////in one line

// let b=[1,2,3,56,7]
// console.log(b);

// // Array in function
// b=[24,32,66,7,8,887,87];
// function f1(singh){
//     console.log(singh);
// }
// f1(b);



//to find lrgest and smallest number in array;


let arr=[2,7,9,54,3,67];
//console.log(arr.length);
function f2(sing)

{ 
    let largest=-1;
    let smallest=100000;
    for(let i=0;i<arr.length;i++){ 
        if(sing[i]>largest){
            largest=sing[i];
        }if(sing[i]<smallest){
            smallest=sing[i]
        }
    }
    console.log(smallest+" "+largest); 
    return ([smallest,largest])
}

let result=f2(arr);
console.log(result);


