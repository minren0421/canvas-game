// 大魚文件

// 1.創建大魚構造函數
var momObj = function(){
    // 大魚位置
    this.x;
    this.y;
    //  魚游動角度
    this.angle;
    // 創建數組保存眼睛
    this.bigEye = [];
    // 保存身體
    this.bigBody = [];
    // 保存尾巴
    this.bigTail = [];
    // 眼睛
    this.bigEyeIndex = 0;
    this.bigEyeStart = 0; //計時開始
    this.bigEyeEnd = 3000;//結束
    // 尾巴
    this.bigTailIndex = 0;
    this.bigTailStart = 0;
    this.bigTailEnd = 200;
    // 身體
    this.bigBodyIndex = 0;
    this.bigBodyStart = 0;
    this.bigBodyEnd = 2000;

}
// 2.添加方法init
momObj.prototype.init = function(){
    // 初始化 中心
    this.x = canWidth*0.5;
    this.y = canHeight*0.5;
    // 初始化游動角度
    this.angle = 0;
    // 眼睛
    for(var i=0;i<2;i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "src/bigEye"+i+".png";
      } 
      //2.4:创建八个图片对象保存大鱼身体数组
      //    并且下载图片
      for(var i=0;i<8;i++){
        this.bigBody[i] = new Image();
        this.bigBody[i].src = "src/bigSwim"+i+".png";
      }
      //2.5:创建八个图片对象保存大鱼尾巴数组
      //    并且下载图片 9:50
      for(var i=0;i<8;i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail"+i+".png";
      }   
    console.log(this)
}
// 3.添加方法draw
momObj.prototype.draw = function(){
    // 3.1 大魚眼睛計時
    this.bigEyeStart+=deltaTime;
    if(this.bigEyeStart>this.bigEyeEnd){
        //切換下標
        this.bigEyeIndex = (this.bigEyeIndex+1)%2 ;
        this.bigEyeStart = 0 ; 
        if(this.bigEyeIndex == 0){
            this.bigEyeEnd = 3000;
        }

        if(this.bigEyeIndex==1){
            this.bigEyeEnd = 300;
        }
    }
    //3.2 大魚尾巴切換
    this.bigTailStart+=deltaTime ;
    if(this.bigTailStart>this.bigTailEnd){
        // 切換尾巴下標
        this.bigTailIndex = (this.bigTailIndex+1)%8 ;
        // 將計時清零
        this.bigTailStart = 0;
    }
    //3.3大魚身體切換
    this.bigBodyStart+=deltaTime ;
    if(this.bigBodyStart>this.bigBodyEnd){
        // 切換尾巴下標
        this.bigBodyIndex = (this.bigBodyIndex+1)%8 ;
        // 將計時清零
        this.bigBodyStart = 0;
    }
    // 將鼠標位置賦值大魚座標
    this.x = lerpDistance(mx,this.x,0.96);
    this.y = lerpDistance(my,this.y,0.97);

    //3.4 修改大魚游動角度
    //  (1) 算大魚跟鼠標之間座標
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    //  (2) 大魚跟鼠標之間角度
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;
    //  (3) 大魚向鼠標角度慢慢調整
    this.angle = lerpAngle(beta,this.angle,0.9);


    // 保存畫筆
    ctx1.save();
    // 將畫布原點移動到大魚身上中心
    ctx1.translate(this.x,this.y);
    // 設置大魚旋轉角度
    ctx1.rotate(this.angle);
    // 繪製身體->尾巴 眼睛
    ctx1.drawImage(this.bigBody[this.bigBodyIndex],
    -this.bigBody[this.bigBodyIndex].width*0.5,
    -this.bigBody[this.bigBodyIndex].height*0.5)
    // 尾巴
    ctx1.drawImage(this.bigTail[this.bigTailIndex],
    -this.bigTail[this.bigTailIndex].width*0.5+30,
    -this.bigTail[this.bigTailIndex].height*0.5)
    // 眼睛
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],
    -this.bigEye[this.bigEyeIndex].width*0.5,
    -this.bigEye[this.bigEyeIndex].height*0.5)
    // 恢復畫筆狀態
    ctx1.restore();
}
// 4.將文件添加到index.js
// 5.在main下調用方法



