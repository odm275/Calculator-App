//Here is where it all starts;
var arr = [];//Holds our numbers and operators
var total = 0;//Calculates the operation derivative of our numbers and operators

//This function is going work like a RESET;
function AC(){
  arr = [];
  total = 0;
  document.getElementById("output").innerHTML = total;
}
function CE(){
  arr.pop();
  var out = arr.join('');//String for display;
  document.getElementById("output").innerHTML = out;

}
//Decides how to play with our symbols and operators;
function PI(){
  var pi = Math.PI;
  number(pi);
}
function number(x){
    if(x==='='){
      var expr = arr.join('');
      /* Look inside expression for math functions;*/
      re = /[*+\-\/]/gi;
      var operation = expr.match(re);//if we match symbol, store symbols array;
      var split = expr.split(re);//store numbers array
      var counter = 0;
      var str= " ";
      console.log(operation);

      var total = split.reduce(function(a,b){
      a = parseFloat(a);
      b = parseFloat(b);
      if(operation[counter] ==='+'){
        str += a+operation[counter]+b;
        counter++;
        return parseFloat(a)+parseFloat(b);
      }else if(operation[counter] ==='-'){
          str += a+operation[counter]+b;
          counter++;
        return parseFloat(a)-parseFloat(b);
      }else if(operation[counter] ==='*'){
          str += a+operation[counter]+b;
          counter++;
        return parseFloat(a)*parseFloat(b);
      }else if(operation[counter] ==='/'){
          str += a+operation[counter]+b;
          counter++;
        return parseFloat(a)/parseFloat(b);
      }else{
        return a;
      }
    });

    document.getElementById("output").innerHTML = total;
    console.log(str);
    console.log("Result is: " + total);
  }else{
      arr.push(x);
      var out = arr.join('');//string for display;
      document.getElementById("output").innerHTML = out;
      console.log(arr);
    }
}
