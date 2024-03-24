'use strict'
// 1行目に記載している 'use strict' は削除しないでください



let i = 0;
let num = 1;
let keytapNum = 0;
let stopping = 0;

// page2のコード
const degree = document.getElementById("")
const questionArray = ["let", "const", "if()", "for()", "while()", "function()", "array.map", "array.filter", "for(const key in array)", "for(const value of array)", "<h1>", "object = {}", "array = []", "getElementsByTagName", "getElementById", "document", "<a>"];

document.addEventListener('DOMContentLoaded', pageLoad)
const question = document.getElementById("question2");
let questionNum = questionArray.length;
let randomQuestion = questionArray[Math.floor(Math.random() * questionNum)]
question.innerText = randomQuestion;

/* ページをロードした時にテキストボックスにリスナを登録 */
function pageLoad() {
  let textbox = document.getElementById('input1');
  textbox.addEventListener('keydown', enterKeyPress);
}

function enterKeyPress(event) {
  //タイマー(30秒)
  const string = document.getElementById("string");
  const score = document.getElementById("score");
  
  if (num === 1){
    num = 2;
    setTimeout(() => {
      let tapPerSec = Math.floor((keytapNum / 30) * 100);
      tapPerSec = tapPerSec / 100;
      score.innerText = `${i}個正解です!!`;   // 点数 
      string.innerText = `${tapPerSec} tap/secです。`;
      stopping = 1;
      question.textContent = "~~終了~~";
    }, 30000);

  }
  const mis = document.getElementById("false");       //false->間違えた時,正解した時の表示タグのid
  mis.textContent = "";

  if (event.key === `Enter` && stopping === 0) {
    const text = document.getElementById("input1").value;   //inputの中身の取得
    if (text !== randomQuestion) {
      mis.textContent = "不正解!!次の問題は頑張って！";
    } else {
      mis.textContent = "正解!!";
      i += 1;
    }
    document.getElementById("input1").value = "";           //フォームの中身の削除
    randomQuestion = questionArray[Math.floor(Math.random() * questionNum)]
    question.innerText = randomQuestion;
  }
  keytapNum += 1;

}
