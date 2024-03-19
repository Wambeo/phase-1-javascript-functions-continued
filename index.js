// code your solution here
function saturdayFun(target= "roller-skate"){
    return `This Saturday, I want to ${target}!`;
}

function mondayWork(uses = "go to the office"){
    return `This Monday, I will ${uses}.`
}

function wrapAdjective(result){
   
    return function(par = "special"){
       return `You are ${result}${par}${result}!`
   };
   
}
