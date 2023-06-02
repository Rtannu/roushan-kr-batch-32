
// declare a variable environment with value based on the environment chagne sending amount for dev environment 
// it should be adding 10% , for test 20% , for stage 30% and for prod 5%
// and display sending amount  



// Environment variable
const DEV_ENV='DEV';
const TEST_ENV='TEST';
const STAGE_ENV='STAGE';
const PROD_ENV='PROD';

// Percentage 
const DEV_ENV_PER=.10;
const TEST_ENV_PER=.20;
const STAGE_ENV_PER=.30;
const PROD_ENV_PER=.05;




let env=DEV_ENV;
const sendingAmount=100;
let finalSendingAmount=null;

// Using if else
if(env==DEV_ENV){
    finalSendingAmount= (sendingAmount+(sendingAmount*DEV_ENV_PER));
}else if(env==TEST_ENV){
    finalSendingAmount= (sendingAmount+(sendingAmount*TEST_ENV_PER));
}else if(env==STAGE_ENV){
    finalSendingAmount= (sendingAmount+(sendingAmount*STAGE_ENV_PER));
}else if(env==PROD_ENV){
    finalSendingAmount= (sendingAmount+(sendingAmount*PROD_ENV_PER));
}else{
    finalSendingAmount=0
}

document.getElementById('if-else').innerHTML=`Final Amount Using If Else: ${finalSendingAmount}`;
console.log(`Final Amount Using If Else: ${finalSendingAmount}`)

finalSendingAmount=null;


// Using switch
switch(env){
    case DEV_ENV:
        finalSendingAmount= (sendingAmount+(sendingAmount*DEV_ENV_PER));
        break;
    case TEST_ENV:
        finalSendingAmount= (sendingAmount+(sendingAmount*TEST_ENV_PER));
        break;
    case STAGE_ENV:
        finalSendingAmount= (sendingAmount+(sendingAmount*STAGE_ENV_PER));
        break;
    case PROD_ENV:
        finalSendingAmount= (sendingAmount+(sendingAmount*PROD_ENV_PER));
        break;
    default:
        finalSendingAmount=0
        break
}
document.getElementById('switch').innerHTML=`Final Amount Using SWitch: ${finalSendingAmount}`;
console.log(`Final Amount Using SWitch: ${finalSendingAmount}`)


  
