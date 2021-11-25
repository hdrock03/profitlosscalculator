const initial=document.getElementById("initial");
const quantity=document.getElementById("qnt");
const current=document.getElementById("current");
const output=document.getElementById("output");
const button=document.getElementById("button");

button.addEventListener("click", calculator);

function calculator(){
     if(current.value>initial.value){
         const finalProfit=getProfit(initial,quantity,current);
         output.innerText="Hey. the profit is " +finalProfit
     }
     else if(initial.value>current.value){
         const finalLoss=getLoss(initial,quantity,current);
         output.innerText="Hey. the Loss is " +finalLoss;
     }
     else{
         output.innerText="No pain No gain";
     }

 }

function getProfit(initial,quantity,current){
   const profit= Number(current.value) - Number(initial.value);
   const totalProfit= (Number(quantity.value)) * profit;
  // console.log(totalProfit)
   return totalProfit;
}

 function getLoss(initial,quantity,current){
     const loss= Number(initial.value) - Number(current.value);
     const totalLoss= (Number(quantity.value)) * loss;
     return totalLoss;
  }

//  function noProfitLoss(initial,quanity,current){
//     const profit= Number(current.value) - Number(initial.value);
//     const totalProfit= (Number(quantity.value)) * profit;
//     return totalProfit;
//  }