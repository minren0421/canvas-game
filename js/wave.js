//吃食物後產生光環 

var waveObj = function(){
    this.x = []; //圓心
    this.y = [];
    this.r = [];    //半徑
    this.alive = []; //狀態

}

waveObj.prototype.num = 10;

waveObj.prototype.init = function(){
     for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.r[i] = 0;
        this.x[i] = 0;
        this.y[i] = 0;

     }


}

waveObj.prototype.draw = function(){
    ctx1.save();
    ctx1.strokeStyle = "#fff";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.r[i] +=deltaTime * 0.015;  
            if(this.r[i]>35){ 
                this.alive[i] = false;
                return ; //一次隱藏一個光環
            }
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[0],0,2*Math.PI);
            ctx1.stroke(); //描邊
        }
        
    }
    
    ctx1.restore();
}


waveObj.prototype.born = function(x,y){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]==false){
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            return;
        }
    }

}

