let display = document.getElementById(`display`);
let result;
function num(no) {
  display.value = display.value + no;
}

function op(op) {
  display.value = display.value + op;
}

function back() {
  display.value = display.value.slice(0, -1);
}
 function equal() {
   "use strict";
  try{
   
  display.value = eval(display.value);
  }
  catch(error){
    display.value=`invalid`;
  }

}


function clr(){
  display.value = ``;
}
