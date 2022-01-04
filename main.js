function calc(){
    var obj = document.getElementById("result");
    obj.value = eval(obj.value);
}

function append(value){
   document.getElementById("result").value += value;
}

function push(value){
  if(['+','-','*','/'].includes(value) && ['+','-','*','/'].includes(document.getElementById("result").value.slice(-1))){
   delete_last();
}else if (['0','1','2','3','4','5','6','7','8','9'].includes(value) &&
['0','+0','-0','*0','/0'].includes(document.getElementById("result").value.slice(-2))){
   delete_last();
}

append(value);
}

function delete_last(){
  document.getElementById("result").value = document.getElementById("result").value.slice(0,-1)
}

function reset(){
  document.getElementById("result").value ='0';
}