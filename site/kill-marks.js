/* 擊殺頁整頁散佈紅色 (*) ，大小不一，可以蓋住下面的東西 */
(function () {
  var layer = document.createElement("div");
  var style = document.createElement("style");
  var count = 72;
  var n;
  var mark;
  var size;
  style.textContent = "#kill-marks{position:absolute;left:0;top:0;width:100%;z-index:80;pointer-events:none;overflow:visible}#kill-marks span{position:absolute;color:#ff0000;font-family:Consolas,\"Courier New\",monospace;line-height:1;white-space:nowrap}";
  document.head.appendChild(style);
  if (window.getComputedStyle(document.body).position === "static") {
    document.body.style.position = "relative";
  }
  layer.id = "kill-marks";
  document.body.appendChild(layer);
  layer.style.height = Math.max(document.documentElement.scrollHeight, window.innerHeight) + "px";
  for (n = 0; n < count; n++) {
    mark = document.createElement("span");
    mark.textContent = "(*)";
    size = 14 + Math.floor(Math.random() * 170);
    mark.style.left = (Math.random() * 100) + "%";
    mark.style.top = (Math.random() * 100) + "%";
    mark.style.fontSize = size + "px";
    mark.style.transform = "translate(-50%,-50%) rotate(" + Math.floor(Math.random() * 70 - 35) + "deg)";
    layer.appendChild(mark);
  }
})();
