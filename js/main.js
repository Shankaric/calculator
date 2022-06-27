const allclear=document.querySelector('.btnac');
const clear=document.querySelector('.btnc');
const equal=document.querySelector('.btnequal');
const firstval=document.querySelector('.firstval');
const secondval=document.querySelector('.secondval');
const total=document.querySelector('.total');
const btnnumbers=document.querySelectorAll('.btnnumbers');
const btnops=document.querySelectorAll('.btnops');
const btnval=document.querySelectorAll('.btnval');
const btndot=document.querySelector('.btndot');
let disfirstval = "";
let dissecondval = "";
let result = null;
let lastOp = "";
let btndots=""
btnnumbers.forEach(function(btn) {      //when click on buttons
    btn.addEventListener("click", function() {
        console.log(secondval.innerHTML);  
       if((secondval.innerHTML - Math.floor(secondval.innerHTML)) != 0 ){ //check its already have dots
        btndot.innerHTML='';
        dissecondval+=btn.innerHTML;
        secondval.innerHTML = dissecondval;
       }else{
        btndots='.'
        btndot.innerHTML=btndots;
        dissecondval+=btn.innerHTML;
        secondval.innerHTML = dissecondval;
       }  
    });
});
btnops.forEach(function(ops) {              //when click on operators
    ops.addEventListener("click", function() {
        disfirstval =secondval.innerHTML;
        dissecondval='';
        // console.log(disfirstval);
        firstval.innerHTML = disfirstval+ops.innerHTML;
        secondval.innerHTML ='0';
        var operation=ops.innerHTML;
    equal.addEventListener("click",function(){  //when click on equal

            let fvaluenumber;
            let svaluenumber;
            fvaluenumber=parseFloat(firstval.innerHTML);
            svaluenumber=parseFloat(secondval.innerHTML);
            // if(fvaluenumber)
            if(operation=="+"){
                result=fvaluenumber+svaluenumber;
                console.log(result);
                total.innerHTML=result;
            }
           else if(operation=="-"){
            result=fvaluenumber-svaluenumber;
            console.log(result);
            total.innerHTML=result;
           }
           else if(operation=="*"){
            result=fvaluenumber*svaluenumber;
            console.log(result);
            total.innerHTML=result;
           }
           else if(operation=="/"){
            result=fvaluenumber/svaluenumber;
            console.log(result);
            total.innerHTML=result;
           }
           else{
            total.innerHTML=svaluenumber;
           }
            // console.log(secondval.innerHTML);
          
            firstval.innerHTML= disfirstval+ops.innerHTML+dissecondval;
            secondval.innerHTML= '0';
              // result=(firstval.value) * (secondval.value);
            //   // console.log(result);
            //   console.log(disfirstval);
            //   console.log(dissecondval);
        
        });

    });
});
// equal.addEventListener("click",function(){

//     let fvaluenumber;
//     let svaluenumber;
//     fvaluenumber=parseFloat(firstval);
//     svaluenumber=parseFloat(secondval);
//     console.log(svaluenumber);
//     // console.log(secondval.innerHTML);
//     total.innerHTML=result;
//     firstval.innerHTML= disfirstval;
//     secondval.innerHTML= dissecondval;
      // result=(firstval.value) * (secondval.value);
    //   // console.log(result);
    //   console.log(disfirstval);
    //   console.log(dissecondval);

// });
// btnops.forEach(function(ops) {
//     ops.addEventListener("click", function() {
//        dissecondval += ops.innerHTML;
//        secondval.innerHTML = dissecondval;

//     });
// });

allclear.addEventListener("click",function(){ //allclear button
    result=0;
    disfirstval='';
    dissecondval='';
    firstval.innerHTML=0;
    secondval.innerHTML=0;
    total.innerHTML=0;

});

clear.addEventListener("click",function(){   //clear last digit

    var lastChar =  secondval.innerHTML.slice(0, -1); 
    console.log(lastChar);
    secondval.innerHTML=lastChar;
});