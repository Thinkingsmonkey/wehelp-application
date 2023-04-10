import React from "react";
import Question from "./Question";
import { v4 as uuidv4 } from 'uuid';
const QuestionList = () => {
  const todoLink = (<a className="link" href='https://thinkingsmonkey.github.io/Todo_list/'>Todo</a>)
  const guessNumLink = (<a className="link" href="https://thinkingsmonkey.github.io/guessNumber/" >GuessNumber</a>)
  const flopGame = (<a className="link" href="https://thinkingsmonkey.github.io/FlopGame/">FlopGame</a>)
  const questionArr = [
    {
      question: 
        "個人簡介",
      answer:
        "我原本是一位倉管人員，因為公司在疫情的影響下訂單逐漸減少，而薪資結構中加班是重要的部分，導致收入也受到影響，因此讓我開始思考自己未來的職涯發展，開始探索自己的興趣與職涯規劃。過程中發現我對程式語言有濃厚的興趣，也決定轉職成為一位前端工程師，以專業技能來保障自己的未來，並為社會創造更多價值。目前自學了前端基礎語言，最近又開始學習 React。也有開發一些小專案，這些專案讓我更深入了解程式開發並實際應用所學的技術。我希望透過 WeHelp 學到更多實戰技能並將所學應用到未來工作中。"
    },
    {
      question:
        "為了成為軟體工程師，曾做過什麼努力？若有具體專案作品請分享給我們。",
      answer:
        [`這半年來，我一開始透過搜尋網路資源，自行學習了 HTML、CSS、JavaScript 也開始學習 React。並且為了加速學習效果，我聘請了一位成功轉職為前端工程師的家教來指導我。他建議我透過開發小型專案來學習，我發現這種方式確實非常有效，因為它能夠幫助我更加確實地掌握技能。目前我已經用 JavaScript 開發了幾個小專案，例如：`, guessNumLink, `、`, todoLink, '、', flopGame, `、以及這次用 React 部屬的申請頁面。`]
    },
    {
      question: 
        "如果參與這個計畫，會怎麼安排學習時間？",
      answer:
        "因為我非常想在這個領域中學習和成長，如果我能參與這個計畫，每天我能投入八到十個小時的時間，利用Ticktick 來規劃時間塊，使用番茄畤鐘來保證專注度，以確保我能夠有效地學習和完成進度。我相信，以這樣的習慣與學習方式，能夠讓我在有限的時間內達成學習目標，同時也能夠兼顧好家庭和學習之間的平衡。",
    },
    {
      question: 
        "是否有想要加入的軟體公司？為什麼想加入該公司？",
      answer:
        ["我有一個明確的目標，希望在五年內加入 Google，成為一名優秀的軟體工程師。這個目標是我不斷學習和成長的動力來源。在眾多的公司中，我認為 Google 是一家非常具有創新力和影響力的公司，不僅在技術方面領先，而且在產品和服務方面也為全球用戶帶來了很多價值。我相信，這樣的公司可以提供我與眾不同的學習和成長環境，並幫助我實現個人目標。",(<p >因此，我會全力提升自己的語言掌握度、演算法、英文和溝通等技能，以達到 Google 的標準。同時，我會選擇那些能夠提供我更多挑戰和機會，同時符合我價值觀和學習目標的公司。這樣可以讓我更快速地實現加入 Google 的目標，並在這個過程中成為更好的軟體工程師。</p>)]
    },
    {
      question:
        "請描述一件讓你產生明顯負面情緒的事情，你如何處理該情緒？",
      answer:
        ["在一次專案中，我遇到了一個挑戰：為 select tag 中的 option 添加 click 事件。雖然我努力搜尋資訊，但未能找到解決方案，這讓我感到沮喪和困惑。面對這樣的情況，我採用了《薩提爾縱深對話》中的 6A 自我覺察方式來處理我的情緒。", 
        (<p>通過覺察、承認、允許和接納後感受負面情緒，我最終轉變成欣賞心態並積極面對挑戰。經過一番努力，我找到了一個替代方案：利用另一個標籤顯示選擇的選項，並在點擊選項時觸發事件。這個成果讓我非常滿意，因為我不僅解決了問題，還學到了有關 select tag 工作原理的更多知識。</p>), 
        (<p>現在，每當我面臨類似的挑戰時，我都會運用這種自我覺察方法來處理情緒，這讓我在困難面前變得更加堅定和自信。這種成長經歷使我相信，只要具備正確的心態和策略，我就能克服任何挑戰。</p>)
        ]
    },
    {
      question:
        "關於這份申請網頁，請分享一個你開發時的技術心得。",
      answer:
        [
          (<p className="shareTitle">如何將 React 部屬到 github pages 上：</p>),
          (<ul>
            <li>在命令列中輸入 "npm run build" 進行編譯。</li>
            <li>安裝 gh-pages 套件，輸入 "npm install gh-pages"。</li>
            <li>在 package.json 檔案中新增 homepage 欄位，值為專案在 GitHub 上的網址"homepage": "https://your-github-username.github.io/your-project-name"。</li>
            <li>在 package.json 檔案的 scripts 區塊中新增 deploy 與 predeploy 指令，"predeploy": "npm run build"，"deploy": "gh-pages -d build"。</li>
            <li>命令列中輸入 "npm run deploy"，讓 gh-pages 套件將編譯後的檔案發佈到 GitHub Pages 上。</li>
            <li>到 GitHub 頁面的  Pages 部分，選擇 "gh-pages" 分支並保存修改，並等一段時間就完成了。</li>
          </ul>)
        ]
    },
    {
      question: 
        "其他想要對我們說的事情？",
      answer:
        "在觀看完第二屆校友分享的影片後，我發現自己與求職成功還有一段距離。不過很幸運地，到 bootcamp 計畫開始前還有三個月左右的時間。所以我的目標是在 bootcamp 開始前，先將前兩個階段的相關技術與背景知識有一個大概的掌握。並透過完成第一階段的小專案來打好基礎，然後開始進行第二個電商平台的專案。期許自己能夠在學員中脫穎而出，也成為可以與大家分享經驗的人。",
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
