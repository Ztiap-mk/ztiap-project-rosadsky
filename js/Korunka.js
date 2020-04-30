const Koruna = function (xpos,ypos,speed,ctx) {


    this.ypos = ypos;
    this.xpos = xpos;

    this.koruna = document.getElementById('korunka') //61x48


    this.length = 50;
    this.ctx=ctx;
    this.speed = speed;
};


Koruna.prototype.update = function () {
    this.xpos -= this.speed; //Pohyb "Budov"- fungovanie podobné ako pozadie
    //rýchlosť posúvania sa zadávame pri volaní funkcie v main.js
};

Koruna.prototype.render = function () {



    this.ctx.drawImage(this.koruna,this.xpos,this.ypos,50,this.length);
    //this.ctx.fillRect(this.xpos,this.ypos,100,this.length); // 100 ->šírka // manuálne meniť hdnotu sems



    this.ctx.fillStyle = "green";

};

