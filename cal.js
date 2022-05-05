/*global $*/
$(document).ready(function(){

//HTMLより画面に表示されている数字（計算式）のdocumentを取得
let result = document.getElementById("result");

//「=」が入力されたら画面表示の計算式の文字列をevalで計算する
function equal(){
   result.innerHTML = eval(result.innerHTML);
}

//「AC」が入力されたら画面表示を「0」にそのまま書き換える
function reset(){
   result.innerHTML= "0";
}

//数字が入力されたらthisからtargetで値を受け取る
function click_num(target){
   //targetの入力値をinputに代入する
  let input = target.innerHTML;
 //今の画面表示がそのまま"0"の場合
  if(result.innerHTML == "0"){
   //画面表示をinputに置き換える
     result.innerHTML = input;
   //今の画面表示が0でない場合
  }else{
   //今の画面表示にinputを文字列で加える
   result.innerHTML += ""+input;
  }
}

//演算子が入力されたらthisからtargetで値を受け取る
function calculate(target){
   //targetの入力値をinputに代入する
   let input = target.innerHTML;
   //今の画面表示の最後の1桁が演算子だったら、上書きする
   if(result.innerHTML.slice(-1)=="-"){
      return;
   }else if(result.innerHTML.slice(-1)=="+"){
      return;
   }else if(result.innerHTML.slice(-1)=="*"){
      return;
   }else if(result.innerHTML.slice(-1)=="/"){
      return;
   }else if(result.innerHTML.slice(-1)=="."){
      return;
   //今の画面表示の最後の1桁が数字だったら、文字列で加える
   }else{
      result.innerHTML += ""+input;
   }
}
});