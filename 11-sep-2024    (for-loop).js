//1st
let n=3;
let sum=0;
let table=5;
for (let i = 1; i <=n; i++) {
    sum+=i*table;
}
console.log(sum);

//2nd
let num=5;
let result="";
for (let i = 0; i <n; i++) {
    if(i==n-1){
        result+=`${num}`;
    }
    else{
        result+=`${num} `;
    }
    
}
console.log(result);

//3rd
let a=5;
let b=13;
for (let i=a; i<b; i++) {
     if (i % 2 == 0) {
        console.log(i);
    }
}
