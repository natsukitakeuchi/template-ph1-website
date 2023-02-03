"use strict";

let question = [
    {
        "id": 1,
        "question_title": "日本のIT人材が2030年には最大それくらい不足すると言われているでしょうか？",
        "option": ["約28万人", "約79万人", "約183万人"],
        "img": ["img-quiz01.png", "めっちゃ人いる"],
        "answer_number": 0,
        "note": ["経済産業省2019年3月-IT人材需要に関する調査"]
    },
    {
        "id": 2,
        "question_title": "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
        "option": ["INTECH", "BIZZTECH", "X-TECH"],
        "img": ["img-quiz02.png", "パソコン、スマホ"],
        "answer_number": 2
    },
    {
        "id": 3,
        "question_title": "IoTとは何の略でしょう？",
        "option": ["Internet of Things", "Integrate into Technology", "Information on Tool"],
        "img": ["img-quiz03.png", "人とロボット"],
        "answer_number": 0
    },
    {
        "id": 4,
        "question_title": "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
        "option": ["Society 5.0", "CyPhy", "SDGs"],
        "img": ["img-quiz04.png", "街"],
        "answer_number": 0,
        "note": ["Society5.0-科学技術政策-内閣府"]
    },
    {
        "id": 5,
        "question_title": "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
        "option": ["Web3.0", "NFT", "メタバース"],
        "img": ["img-quiz05.png", "白い四角"],
        "answer_number": 0
    },
    {
        "id": 6,
        "question_title": "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
        "option": ["約2倍", "約5倍", "約11倍"],
        "img": ["img-quiz06.png", "棒線グラフ"],
        "answer_number": 1,
        "note": ["Accenture Technology Vision 2021"]
    }
]
let html = ""
for (let i = 0; i < question.length; i++) {
    const note=question[i]["note"] ? `<button class="reference"><img class="reference-icon" src=".//assets/img/icon/icon-note.svg" alt="scholar-hat"><p class="reference-letter">${question[i]["note"]}</p>
    </button>` : "";
    console.log(question[i]["note"])
    html += `<div class="q1">
        <div class="question-1">
        <div class="question-1-box">
        <p class="question-1-letter">Q${i + 1}</p></div>
        <div class="question-1-mondai">${question[i]["question_title"]}</div>
        <div class="question-1-pic"><img src=./assets/img/quiz/${question[i]["img"][0]} alt=${question[i]["img"][1]} width="800"></div>
        </div>
        <div class="answer-1">
        <div class="answer-1-box">
        <div class="answer-1-letter">A</div>
        </div>
        <div class="options">
        <button class="option-1">
        <div class="option-1-letter">${question[i]["option"][0]}</div><img class="option-arrow"
            src=./assets/img/icon/icon-arrow.svg>
        </button>
        <button class="option-2">
        <div class="option-2-letter">${question[i]["option"][1]}</div><img class="option-arrow" src="./assets/img/icon/icon-arrow.svg" alt=""></button>
        <button class="option-3">
        <div class="option-3-letter">${question[i]["option"][0]}</div><img class="option-arrow" src=./assets/img/icon/icon-arrow.svg>
        </button>
        </div>
        ${note}
        </div>
        </div>
        </div>`
}
console.log()

// let html=for
let idname = document.getElementById("question")
idname.innerHTML = html
