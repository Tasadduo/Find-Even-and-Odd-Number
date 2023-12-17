var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var EvenArry=[];
var OddArry=[];
var iSEven;
for(var i=0;i<=numberArray.length;i++){
    iSEven=numberArray[i]%2==0;

    if(iSEven){
        EvenArry.push(numberArray[i]);
    }
    else{
        OddArry.push(numberArray[i]);
    }
}
console.log("Even Number: "+EvenArry);
console.log("Odd Numbers:"+OddArry);