// 完成海葵
// 1.創建構造函數
var aneObj = function(){
    // 創建變量保存座標
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    // 創建變量保存左右浮動
    this.amp = [];
    // 創1建變兩保存-1+~1
    this.alpha = 0;
}
// 2.為海葵添加屬性
aneObj.prototype.num = 50;
// 3.添加方法init
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        // 初始化海葵起點
        this.rootx[i] = i*16+Math.random()*20;
        // 初始化終點座標
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight-250+Math.random()*50;
        // 初始化海葵擺動幅度
        this.amp[i] = Math.random()*30+20;
    }
    
}
// 4.添加方法draw
aneObj.prototype.draw = function(){
    // 計算小數
    this.alpha += deltaTime*0.0008;
    // 依據小數通過正弦函數獲取-1~1
    var l = Math.sin(this.alpha)
    // console.log(l)
    // 保存畫筆2狀態
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.7;
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    for(var i=0;i<this.num;i++){
        // 創建新路徑
        ctx2.beginPath();
        // 移動到起點座標
        ctx2.moveTo(this.rootx[i],canHeight);
        // 重新計算終點座標x
        this.headx[i] = this.rootx[i]+l*this.amp[i];
        // 繪製貝賽爾曲線
        ctx2.quadraticCurveTo(
            this.rootx[i],canHeight-100,this.headx[i],this.heady[i]
        );
        ctx2.stroke();    
    }
    ctx2.restore();

}
// 5.將文件添加到index.html中
// 6.在main.js創建海葵對象 並調用方法



