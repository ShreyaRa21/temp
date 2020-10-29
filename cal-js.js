function insert(num){
    $('#val1').val($('#val1').val()+num);
}
function eql(){
    $('#val1').val(eval($('#val1').val()));
}
function C(){
    $('#val1').val(value="");
}
function del(){
   value = $('#val1').val();
   $('#val1').val(value.substring(0, value.length-1));
}