var searchDb = [
  // 玩家先查這個案件編號。頁面檔名是 EX_0913，內文寫 EX-0913
  {
    keys: ["EX-0913"],
    title: "EX-0913",
    page: "EX_0913.html"
  },
  {
    keys: ["J"],
    title: "J",
    page: "J的個人資料.html"
  },
  {
    keys: ["H"],
    title: "H",
    page: "10-H的人事頁.html"
  },
  {
    keys: ["D"],
    title: "D",
    page: "08-搜尋D.html"
  },
  // 事件編號和 D-001 是同一份包裹紀錄，不再經過 09
  {
    keys: ["事件編號", "D-001"],
    title: "包裹攔截紀錄",
    page: "12-包裹攔截紀錄.html"
  },
  {
    keys: ["P"],
    title: "P",
    page: "16-P的人名頁.html"
  },
  {
    keys: ["B"],
    title: "B",
    page: "17-B的人名頁.html",
    locked: true
  },
  {
    keys: ["PIYAL"],
    title: "PIYAL",
    page: "PIYAL.html"
  },
  {
    keys: ["新藥列表"],
    title: "新藥列表",
    page: "新藥列表.html"
  },
  // 包裹攔截紀錄只放在 h.search
  {
    keys: ["包裹攔截紀錄"],
    title: "包裹攔截紀錄",
    page: "12-包裹攔截紀錄.html"
  },
  // 爆炸事件紀錄代號先用 123。這一邊給 H 的 PDF
  {
    keys: ["123"],
    title: "爆炸事件紀錄 123",
    page: "pdf/H-123.pdf"
  },
  // 死亡名單。H 這邊這一份，頁面內嵌 PDF
  {
    keys: ["死亡名單"],
    title: "爆炸案死亡與受傷名冊",
    page: "20-死亡名單-hver.html"
  },
  // B 的藥歷，用來對批號
  {
    keys: ["藥歷"],
    title: "B 的藥歷",
    page: "26-B的藥歷.html"
  },
  // H 奪權便條。D 搜同一個詞會進同一頁
  {
    keys: ["奪權便條"],
    title: "H 奪權的便條",
    page: "29-奪權的內部便條.html"
  },
  // 記事本寫 package : 0426，搜 package 進包裹頁
  {
    keys: ["package"],
    title: "package",
    page: "02-網頁包裹.html"
  },
  // 點下去不開頁，在搜尋結果頁跳出小窗
  {
    keys: ["CL(*)CK"],
    title: "CL(*)CK",
    notice: "沒反應"
  },
  // H 這邊的爆炸策畫
  {
    keys: ["爆炸策畫"],
    title: "行動計畫書",
    page: "21-爆炸內部策畫紀錄.html"
  }
];
