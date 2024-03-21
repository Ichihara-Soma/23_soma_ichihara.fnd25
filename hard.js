'use strict'
// 1行目に記載している 'use strict' は削除しないでください



let i = 0;
let num = 1;
let keytapNum = 0;
// page2のコード
const degree = document.getElementById("")
const questionArray = [
  "let num = 0;",
  "const array = [];",
  "function getGreenting(name) { return `Hello, ${name}.`; }",
  "if (num > 10) { console.log(`numは10より大きい`); }",
  "for (const key in array) { console.log(array[key]); }",
  "for (const value of array) { console.log(value); }",
  "object = { name: `Hana`, dog: true, age: 12 };",
  "for (let i = 0; i < 10; i++) { console.log(`コーヒーが飲みたい`); }"
];

const mis = document.getElementById("false");       //false->間違えた時,正解した時の表示タグのid

document.addEventListener('DOMContentLoaded', pageLoad)
const question = document.getElementById("question2");
let questionNum = questionArray.length;
let randomQuestion = questionArray[Math.floor(Math.random() * questionNum)]
question.innerText = randomQuestion;

// ページをロードした時にテキストボックスにリスナを登録
function pageLoad() {
  let textbox = document.getElementById('input1');
  textbox.addEventListener('keydown', enterKeyPress);
}

function enterKeyPress(event) {
  //タイマー(30秒)
  const string = document.getElementById("string");
  
  const score = document.getElementById("score");

  if (num === 1) {
    num = 2;
    setTimeout(() => {
      let tapPerSec = Math.floor((keytapNum / 30) * 100);
      tapPerSec = tapPerSec / 100;
      score.innerText = `${i}個正解です!!`;   // 点数 
      string.innerText = `${tapPerSec} tap/secです。`;
    }, 30000);

  }

  mis.textContent = "";   //次の問題の

  if (event.key === `Enter`) {
    const text = document.getElementById("input1").value;   //inputの中身の取得
    if (text !== randomQuestion) {
      mis.textContent = "不正解!!次の問題は頑張って！";
    } else {
      mis.textContent = "正解!!";
      i += 1;
      console.log(i);
    }
    document.getElementById("input1").value = "";           //フォームの中身の削除
    randomQuestion = questionArray[Math.floor(Math.random() * questionNum     )]
    question.innerText = randomQuestion;
  }
  keytapNum += 1;

}

// const score = document.getElementById("score");
// score.textContent = "ああああ";
