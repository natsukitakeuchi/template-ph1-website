"use strict";

let question = [
    {
        "id": 1,
        "question_title": "日本のIT人材が2030年には最大それくらい不足すると言われているでしょうか？",
        option: ["約28万人", "約79万人", "約183万人"],
        "img": ["img-quiz01.png", "めっちゃ人いる"],
        answer_number: 0,
        "note": ["経済産業省2019年3月-IT人材需要に関する調査"]
    },
    {
        "id": 2,
        "question_title": "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
        option: ["INTECH", "BIZZTECH", "X-TECH"],
        "img": ["img-quiz02.png", "パソコン、スマホ"],
        answer_number: 2
    },
    {
        "id": 3,
        "question_title": "IoTとは何の略でしょう？",
        option: ["Internet of Things", "Integrate into Technology", "Information on Tool"],
        "img": ["img-quiz03.png", "人とロボット"],
        answer_number: 0
    },
    {
        "id": 4,
        "question_title": "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
        option: ["Society 5.0", "CyPhy", "SDGs"],
        "img": ["img-quiz04.png", "街"],
        answer_number: 0,
        "note": ["Society5.0-科学技術政策-内閣府"]
    },
    {
        "id": 5,
        "question_title": "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
        option: ["Web3.0", "NFT", "メタバース"],
        "img": ["img-quiz05.png", "白い四角"],
        answer_number: 0
    },
    {
        "id": 6,
        "question_title": "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
        option: ["約2倍", "約5倍", "約11倍"],
        "img": ["img-quiz06.png", "棒線グラフ"],
        answer_number: 1,
        "note": ["Accenture Technology Vision 2021"]
    }
]
// ""で囲っても囲わなくてもラベル。囲うと文字列。持ってきかた　
// console.log( user['name'] );
// console.log( user.name );
const shuffle=(question)=>{
    console.log(question)
    for(let j=question.length-1; j>=0; j--){
        const k= Math.floor(Math.random()*(j+1));
        [question[j],question[k]]=[question[k],question[j]];
        }
        return question;
}
const shuffled_question=shuffle(question);
let html = ""
for (let i = 0; i < shuffled_question.length; i++) {
    const note=shuffled_question[i]["note"] ? `<button class="reference"><img class="reference-icon" src=".//assets/img/icon/icon-note.svg" alt="scholar-hat"><p class="reference-letter">${shuffled_question[i]["note"]}</p>
    </button>` : "";
    // console.log(question[i]["note"])
    html += `<div class="q1 js-quiz" data-id=${i}>
        <div class="question-1">
        <div class="question-1-box">
        <p class="question-1-letter">Q${i + 1}</p></div>
        <div class="question-1-mondai">${shuffled_question[i]["question_title"]}</div>
        <div class="question-1-pic"><img src=./assets/img/quiz/${shuffled_question[i]["img"][0]} alt=${shuffled_question[i]["img"][1]} width="800"></div>
        </div>
        <div class="answer-1">
        <div class="answer-1-box">
        <div class="answer-1-letter">A</div>
        </div>
        <div class="options">
        <button class="option-1 js-answer" data-answer="0">
        <div class="option-1-letter">${shuffled_question[i]["option"][0]}</div><img class="option-arrow"
            src=./assets/img/icon/icon-arrow.svg>
        </button>
        <button class="option-2 js-answer" data-answer="1">
        <div class="option-2-letter">${shuffled_question[i]["option"][1]}</div><img class="option-arrow" src="./assets/img/icon/icon-arrow.svg" alt=""></button>
        <button class="option-3 js-answer" data-answer="2">
        <div class="option-3-letter">${shuffled_question[i]["option"][2]}</div><img class="option-arrow" src=./assets/img/icon/icon-arrow.svg>
        </button>
        </div>
        <div class="answer-hako" id="answer-box">
            <p class="answer-box-correct" id="answer-box-correct"></p>
            <p class="answer-box-A" id="answer-box-A">A</p>
            <p class="answer-box-correct-figure" id="answer-box-figure"></p>
        </div>
        ${note}
        </div>
        </div>
        </div>`
}

let idname = document.getElementById("question")
idname.innerHTML = html

// 何をしてるか書く！！
// .queryselectorの.前は参照する範囲
// 今回のfunctionはclickされた時に実行する内容が{}以下に書いてある。普通だったら、（）の中に引数が入ってあるはず

// クイズ全体を指す
const all_quiz=document.querySelectorAll(".js-quiz")

all_quiz.forEach(quiz => {
    const selected_quiz=quiz.getAttribute("data-id")
    const correct_number=shuffled_question[selected_quiz].answer_number
    const answers=quiz.querySelectorAll(".js-answer")
    // const answer_box=queryselector("answer-box")
    const answer_box_correct=quiz.querySelector(".answer-box-correct")
    const answer_box_figure=quiz.querySelector(".answer-box-correct-figure")
    // const answer_incorrect=quiz.querySelector(".answer_box")
    answers.forEach(answer =>{
        answer.addEventListener('click',function(){
            const selected_answer=Number(answer.getAttribute('data-answer'));
            // answerが押された時に、３つの選択肢のanswsersを持ってきてanswerを2度押せなくする
            answers.forEach(answer=>{
                answer.disabled = true;
            })
            answer.classList.add('answer-option-highlight')
            const answer_box_A=quiz.querySelector('.answer-box-A')
            // 押した時に出てくるように
            answer_box_A.style.display ="block";
            if(correct_number==selected_answer){
                answer_box_correct.innerHTML="正解！"
                answer_box_figure.innerHTML=shuffled_question[selected_quiz].option[correct_number]
                // correct_number=shuffled_question[selected_quiz].answer_number
                const answer_correct=quiz.querySelector(".answer-hako")
                // const answer_correct_figure=quiz.querySelector(".answer-box-correct")107行目と同じだったから消した
                answer_correct.classList.add('answer-box')
                answer_box_correct.classList.add('answer-box-correct')
            }else{
                answer_box_correct.innerHTML="不正解..."
                answer_box_figure.innerHTML=shuffled_question[selected_quiz].option[correct_number]
                const answer_incorrect=quiz.querySelector(".answer-hako")
                const answer_incorrect_figure=quiz.querySelector(".answer-box-correct")
                answer_incorrect.classList.add('answer-incorrect-background')
                answer_incorrect_figure.classList.add('answer-incorrect-figure')
                answer_box_correct.classList.add('answer-box-correct')
            }
        })
    })
})


// function doReload(){
//     // これがreloadメソッド。これでリロードができている。
//     window.location.reload();
// }
// window.addEventListener('doReload',function(){
//     // setTimeout(doReload,5000);
//     const shuffle=(shuffled_question)=>{
//         for(let j=question.length-1; j>=0; j--){
//             const k= Math.floor(Math.random()*(j+1));
//             [question[j],question[k]]=[question[j],question[k]];
//         }
//         return question;
//     }
// })

// const shuffle=(question)=>{
//     for(let j=question.length-1; j>=0; j--){
//         const k= Math.floor(Math.random()*(j+1));
//         [question[j],question[k]]=[question[j],question[k]];
//         }
//         return question;
// }

// const shuffled_question=shuffle(question);