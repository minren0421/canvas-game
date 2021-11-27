
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
// 1.7 創建全局保存食物對象
var fruit;
// 1.8 創建全局保存大魚對象
var mom;
// 1.9 創建全局保存鼠標位置
var mx = 0;
var my = 0;
// 1.10 創建全局保存分數
var data;
// 1.11 創建全局保存光環
var wave;


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
    // 3.9 創建食物對象調用
    fruit = new fruitObj();
    fruit.init();
    // 3.10 創建大魚對象
    mom = new momObj();
    mom.init();
    // 3.11 在畫布一上綁定鼠標移動事件
    can1.addEventListener("mousemove",handlemove);
    // 3.12 創建分數對象
    data = new dataObj; 
    // 3.13 創建光環對象
    wave = new waveObj;
    wave.init();
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
    // 4.5.1 調用大魚碰撞食物方法
    momFruitsCollison();

    // 4.6 繪製海葵
    ane.draw();
    // 4.6.1 調用監聽畫布函數
    fruitMonitor();
    // 4.7 繪製食物
    fruit.draw();
    // 4.7.1 清除畫布一所有元素
    ctx1.clearRect(0,0,canWidth,canHeight)
    // 4.8 繪製大魚
    mom.draw();
    // 4.9 繪製分數
    data.draw();
    // 4.10 繪製光環
    wave.draw();

}
// 5.當網頁加載成功後調用 game
document.body.onload = game ;

// 6. 創建函數處理鼠標移動事件
function handlemove(event){
    // 獲取鼠標座標
    mx = event.offsetX ;
    my = event.offsetY ;
}


