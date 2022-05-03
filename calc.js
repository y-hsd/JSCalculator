/*global $*/
$(document).ready(function(){
  
let result = document.getElementById("result");
//let btn = document.querySelectorAll(".num_btn");

let answer = 0;  //現在の計算途中経過を保有するもの
let number ="0";  //入力された文字列を受け取るもの(入力の途中経過)
let key = ""; //1回前に入力された値を記憶するもの
let ope = ""; //最後に入力された演算子を記憶するもの

//btn.addEventListener("click",calc_Value);
function calc_Value(myData){	// 0～9または小数点ボタンを押した後、一旦myDataで受け取る。
  if(!isNaN(myData)){     //今受取った値(myData)が数値の場合
    if(!isNaN(key)){      //今受け取った値(myData)が数値かつ1回前に入力された値(key)が数値の場合
      if(number =="0"){   //入力の途中経過が"0"そのものである場合
        number=""+myData; //numberを今受け取った値(数値)を文字列で置き換える
      }else{              //入力の途中経過が"0"ではない場合
        number+=""+myData;//入力の途中経過に今受け取った値を文字列でつなぐ
      }
      number+=""+myData;   //2回連続で数字が押されたので入力された数値を文字列(間に空の"")でつなぐ(numberが出来上がる)
    }else{                //１回前に入力された値(key)が演算子かつ今受け取った値(myData)が数値のとき
      number=""+myData;    //numberを今受け取った値(数値)を文字列で置き換える
    }
    result.innerHTML=number;
  }else{                  //今受け取った値(myData)が演算子の場合
    if(!isNaN(key)){      //今受け取った値(myData)が演算子かつ1回前に入力された値(key)が数値の場合
      answer=eval(answer+ope+number);
      number=0;
      document.getElementById("result").innerHTML=answer;
    }
    ope=myData;  //今受け取った値(myData)が演算子かつ1回前に入力された値(key)が演算子の場合、最終演算子(ope)を今受け取った演算子に更新する
  }
  key=myData; //今受け取った値(myData)をkeyに逃す(myData)は次の入力値を受け取るため空ける

  }

function calc_Period(){
  if (number.indexOf(".")<0) //"."が含まれていなければ-1を返すので0未満であれば"."を追加する
  number+=".";
  document.getElementById("result").innerHTML=number;
}

function calc_Equal(){
  if (key == "=") { //1回前に入力された値が"="の場合(2回連続で=が押された)
    answer = 0;  //計算結果を０に戻す
    key = ""; //1回前に入力された値を空にする
	}else{  //"="は1回しか押されていない
		answer = eval(answer + ope + number); //計算結果はこれまでの計算結果+今回の演算子+今回の入力数値
		key = "=";  //1回前に押されたのは"="とする
	}
	number = "0"; //計算後、今回の入力値は0にする
	ope = key;    //演算子は"="にする
	document.getElementById("result").innerHTML = answer;
}


});