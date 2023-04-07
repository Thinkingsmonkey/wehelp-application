import React from "react";
import Question from "./Question";
import { v4 as uuidv4 } from 'uuid';
const QuestionList = () => {
  const questionArr = [
    {
      question: "1: 個人簡介",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question:
        "2: 為了成為軟體工程師，曾做過什麼努力？若有具體專案作品請分享給我們。",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question: "3: 如果參與這個計畫，會怎麼安排學習時間？",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question:
        "2: 為了成為軟體工程師，曾做過什麼努力？若有具體專案作品請分享給我們。",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question: "4: 是否有想要加入的軟體公司？為什麼想加入該公司？",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question:
        "5: 請描述一件讓你產生明顯負面情緒的事情，你如何處理該情緒？",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question:
        "6: 關於這份申請網頁，請分享一個你開發時的技術心得。",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
    {
      question: "7:其他想要對我們說的事情？",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt. At quam ipsam necessitatibus. In obcaecati aperiam amet! Odit voluptatibus voluptate consequuntur totam tempora incidunt itaque eos. Natus, ratione vero..(使用db.json)",
    },
  ];

  return (
    <div className="question-list">
      {questionArr.map((q) => (
        <Question key={uuidv4()} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

export default QuestionList;
