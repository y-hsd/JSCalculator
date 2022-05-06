/*global $*/
$(document).ready(function(){

//HTMLより今画面に表示されている数字（計算式）のdocumentを取得しresultに代入する
let result = document.getElementById("result");
//初期値を少数点入力可能モードにする
let mode = 'integer_mode';

//「=」が入力されたら、、
window.equal = function() {
//今の画面表示の末尾1桁が「-」or「+」or「*」or「/」orの場合
   if(result.innerHTML.slice(-1)=="-"
   || result.innerHTML.slice(-1)=="+"
   || result.innerHTML.slice(-1)=="*"
   || result.innerHTML.slice(-1)=="/"
   || result.innerHTML.slice(-1)=="."){
//今の画面表示の末尾1桁の演算子を削除する
      result.innerHTML= result.innerHTML.slice(0,-1);
//今の画面表示の末尾1桁に受け取った演算子(input)を文字列で付け加える   
      result.innerHTML= eval(result.innerHTML)
   }
//画面表示の計算式の文字列をevalで計算する
   result.innerHTML = eval(result.innerHTML);
};

//「AC」が入力されたら、、
window.reset = function() {
//少数点入力可能モードにする
   mode="integer_mode";
//画面表示を初期値"0"にする
   result.innerHTML= "0";
};

//数字が入力されたらthisからtargetで値を受け取る
window.click_num = function(target) {
//targetのHTMLをinputに代入する
  let input = target.innerHTML;
//今の画面表示が初期値"0"の場合
  if(result.innerHTML == "0"){
//今の画面表示に受け取った数値(input)をそのまま代入する
     result.innerHTML = input;
//今の画面表示が0でない場合
  }else{
//今の画面表示に受け取った数値(input)を文字列で付け加える
   result.innerHTML += ""+input;
  }
};

//ダブルゼロが入力されたらthisからtargetで値を受け取る
window.dbzero = function(target) {
//targetのHTMLをinputに代入する
  let input = target.innerHTML;
//今の画面表示が初期値"0"の場合
  if(result.innerHTML == "0"){
//ダブルゼロは押せない、反映させずにreturnする
     return;
//今の画面表示が0でない場合
  }else{
//今の画面表示に受け取ったダブルゼロ(input)を文字列で付け加える
   result.innerHTML += ""+input;
  }
};

//少数点が入力されたらthisからtargetで値を受け取る
window.click_point = function(target) {
//targetのHTMLをinputに代入する
  let input = target.innerHTML;
//少数点入力不可モードの場合
   if(mode == 'decimal_mode'){
//少数点は押せない、反映させずにreturnする
      return;
//今の画面表示が初期値"0"の場合
   }else if(result.innerHTML == ""){
//0に少数点を付け加える
      result.innerHTML = "0"+input;
//今の画面表示の末尾1桁が「-」or「+」or「*」or「/」の場合
   }else if(result.innerHTML.slice(-1) == "-"
      || result.innerHTML.slice(-1) == "+"
      || result.innerHTML.slice(-1) == "*"
      || result.innerHTML.slice(-1) == "/"){
//今の画面表示に"0"と受け取った少数点(input)を文字列で付け加える       
   result.innerHTML += ""+"0"+input;
//今の画面表示の末尾1桁が「.」の場合
   }else if(result.innerHTML.slice(-1) == "."){
//少数点は押せない、反映させずにreturnする
      return;
//それ以外の場合
   }else{
//今の画面表示に受け取った少数点(input)を文字列で付け加える
      result.innerHTML += ""+input;
   }
//処理完了後、小数入力不可モードに変更
   mode = 'decimal_mode';
};

//演算子が入力されたらthisからtargetで値を受け取る
window.calculate = function(target) {
//targetのHTMLをinputに代入する
   let input = target.innerHTML;
//今の画面表示が初期値"0"、または今の画面表示の末尾1桁が「.」の場合
   if(result.innerHTML =="0" || result.innerHTML.slice(-1)=="."){
//演算子は押せない、反映させずにreturnする
      return;
//今の画面表示の末尾1桁が「-」or「+」or「*」or「/」orの場合
   }else if(result.innerHTML.slice(-1)=="-"
   || result.innerHTML.slice(-1)=="+"
   || result.innerHTML.slice(-1)=="*"
   || result.innerHTML.slice(-1)=="/"){
//今の画面表示の末尾1桁の演算子を削除する
      result.innerHTML= result.innerHTML.slice(0,-1);
//今の画面表示の末尾1桁に受け取った演算子(input)を文字列で付け加える   
      result.innerHTML+= ""+input;
//それ以外の場合
   }else{
//今の画面表示に受け取った少数点(input)を文字列で付け加える
      result.innerHTML += ""+input;
   }
//処理完了後、小数入力可能モードに変更
   mode ='integer_mode';
};

});