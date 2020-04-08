const Budova = function (xpos,ypos,length,speed,ctx) {


    this.ypos = ypos;
    this.xpos = xpos;


    this.length = length;
    this.ctx=ctx;
    //this.speed = speed;
};


Budova.prototype.update = function () {
    //this.xpos -= this.speed; //Pohyb "Budov"- fungovanie podobné ako pozadie
};

Budova.prototype.render = function () {
   // this.ctx.fillStyle = "white";

        this.ctx.fillRect(this.xpos,this.ypos,150,this.length);
        this.ctx.fillStyle = "blue";
        console.log('TEST!')







};

