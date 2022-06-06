function changeMoney(){
var Amount= document.getElementById("amount").value;
var FormC =document.getElementById("form").value;
var To=document.getElementById("to").value;
var Result;
if (FormC=="usd"&& To =="vnd"){
    Result= "Result:"+ (Amount*23000)+"Đ";
}else if(FormC=="vnd"&& To =="usd"){
    Result="Result:"+ (Amount/23000)+"$";
}else if(FormC=="usd"){
    Result="Result:"+ Amount+"$"
}else{
    Result="Result"+Amount + "Đ"
}

document.getElementById("result").innerHTML= Result;

}