
// 1.1創建二個全局變量保存兩個畫布
var can1;
var can2;
// 1.2創建二個全局變量保存畫筆
var ctx1;
var ctx2;
// 1.3創建兩個全局變量保存畫布寬高
var canWidth;
var canHeight;
// 1.4創建瞭個全局變量保存時間差
var lastTime;
var deltaTime;
// 1.5 創建全局 保存背景圖對象
var bgPic;
// 1.6 創建全局保存海葵對象
var ane;


// 2.創建函數 game
function game(){
    // console.log(1)
    init();
    gameloop();
}
// 3.創建函數init
function init(){
    // console.log(2)
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    // 3.2獲取畫筆對象
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    // 3.3 初始化畫布寬高
    canWidth = can1.width;
    canHeight = can1.height;

    // 3.4初始化時間差
    // 3.5紀錄沒有繪圖開始時間
    lastTime = Date.now();

    // 3.6 時間差初始值0
    deltaTime = 0;
    // 3.7 創建背景圖對象 並下載
    bgPic = new Image();
    bgPic.src = "src/background.jpg"
    // 3.8 創建海葵對象並調用
    ane = new aneObj();
    ane.init();

}
// 4.創建函數gameloop
function gameloop(){
    // console.log(3)
    // 4.1創建定時器執行 gameloop 多次調用結果
    requestAnimationFrame(gameloop);
    // 4.2獲取剛才繪製完成時間點
    var now = Date.now() ;
    // 4.3將完成時間點減去沒繪製圖形時間點
    deltaTime = now - lastTime;
    // 4.4將上一個時間清零
    lastTime = now;
    // 4.5 繪製背景圖
    ctx2.drawImage(bgPic,0,0);
    // 4.6 繪製海葵
    ane.draw();

}
// 5.當網頁加載成功後調用 game
document.body.onload = game ;
