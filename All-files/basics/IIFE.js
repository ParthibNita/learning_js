//Immediately Invoked Function Expressions (IIFE)
(function print(){
    console.log('Yoo');
})(); //semicolon is imp before declaring another IIFE as it doesnt know when to end, so the next IIFE will not execute

((name)=>{
    console.log(`My name is ${name}`);
})('PARTHIB DEB');
