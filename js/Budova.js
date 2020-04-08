const Budova = function (xpos,ypos,length,speed,ctx) {


    this.ypos = ypos;
    this.xpos = xpos;


    this.length = length;
    this.ctx=ctx;
    this.speed = speed;
};


Budova.prototype.update = function () {
    this.xpos -= this.speed; //Pohyb "Budov"- fungovanie podobné ako pozadie
                            //rýchlosť posúvania sa zadávame pri volaní funkcie v main.js
};

Budova.prototype.render = function () {

        this.ctx.fillRect(this.xpos,this.ypos,100,this.length); // 100 ->šírka // manuálne meniť hdnotu sems
        this.ctx.fillStyle = "green";
        console.log('TEST!')

};
