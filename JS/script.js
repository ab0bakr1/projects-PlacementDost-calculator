let output = document.getElementById('output');

function display(value){
    output.value += value;
}
function Clear(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0,-1);
}
function solve(){
    output.value = eval(output.value);
}
