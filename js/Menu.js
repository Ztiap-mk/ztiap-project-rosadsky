const Menu = function (xpos,ypos,length,speed,ctx) {


    this.ypos = ypos;
    this.xpos = xpos;
    this.vtakys = document.getElementById('vtak1') ;//61x48

    this.length = length;
    this.ctx=ctx;
    //this.speed = speed;
};


Menu.prototype.update = function () {
    //this.xpos -= this.speed; //Pohyb "Budov"- fungovanie podobné ako pozadie
};

Menu.prototype.render = function () {

    this.ctx.drawImage(this.vtakys,200,250);
    this.ctx.font="26 Helvetica";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Stlač ENTER pre začatie hry !", 250, 200);



    this.ctx.fillStyle = "white";
    this.ctx.fillRect(160, 330, 150, 50); // 100 ->šírka // manuálne meniť hdnotu sems

    this.ctx.font="22px Helvetica";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText("INŠTRUKCIE", 235, 363);


   // this.ctx.fillStyle = "white";

}
