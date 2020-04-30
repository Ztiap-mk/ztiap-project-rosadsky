

// Dorobiť animáciu vtáka nech mu lietajú krídla

const Vtak = function (x,y,ctx) {
    this.x =x;
    this.y =y;
    this.ctx = ctx;
    this.velY = 0;
    this.width= 61; //
    this.height = 48; // ROZMERY
    this.vtaky = document.getElementById('vtak1') //61x48
    this.gameover = false;
    this.hudbaPoz = true;

    var stop = this;
    var skok = this;

    document.addEventListener('keydown',function (klavesa) {

        if(klavesa.keyCode === 32 || klavesa.keyCode === 87){ //ovládanie pomocou MEDZERNIKA + treba pridať W alebo myš.
            skok.velY = -13;
        }

        if(klavesa.keyCode === 88){ //ovládanie pomocou MEDZERNIKA + treba pridať W alebo myš.
            if(stop.hudbaPoz){
                stop.hudbaPoz= false;
            } else {
                stop.hudbaPoz = true;
            }



        }

    })




};

Vtak.prototype.update = function () {
    this.y += this.velY; //
    this.velY += 1; // padanie vtáka

    if(this.y>600){
        this.gameover = true;
    }


};

Vtak.prototype.render = function () {
    let renderX = this.x - this.width;
    let renderY = this.y - this.height;

    this.ctx.drawImage(this.vtaky,renderX,renderY);

    this.ctx.font = "30px Helvetica";
    this.ctx.fillStyle = "purple";
    this.ctx.textAlign = "center";
    this.ctx.fillText("12", 242, 140);

}