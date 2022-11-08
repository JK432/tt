
    let num1=0;
    let num2=0;
    let result=0;    
    var str= "";



var butclick = function(id){
    var s = document.getElementById(id).value;
   str=str+s;

   document.getElementById("screen").innerHTML=str;
console.log(str);
}

var equal = function (){

     str = eval(str);
    
    document.getElementById("screen").innerHTML=str;
}

var clear = function (){

    
    str="";
    s="";
    document.getElementById("screen").innerHTML=str;
}


// num1 = document.getElementsByClassName("inbut").value;
// str = str + num1;





// console.log(str);


// function calcu(){


//     num1=document.getElementById("num1").value;
//     num2=document.getElementById("num1").value;
//     result = num1+num2;
//     document.getElementById("ans").innerHTML = result;
// }

