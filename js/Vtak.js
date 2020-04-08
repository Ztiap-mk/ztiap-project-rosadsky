

const Vtak = function (x,y,ctx) {
    this.x =x;
    this.y =y;
    this.ctx = ctx;
    this.velY = 0;
    this.width= 61; //
    this.height = 48; // ROZMERY TESTO COMMIT
    this.vtaky = document.getElementById('vtak1') //61x48

    var skok = this; //niesom si istý prečo je toto takto

    document.addEventListener('keydown',function (klavesa) {

        if(klavesa.keyCode === 32){ //ovládanie pomocou MEDZERNIKA + treba pridať W alebo myš.
            skok.velY = -13;
        }

    })
};

Vtak.prototype.update = function () {
    this.y += this.velY; //
    this.velY += 1; // padanie vtáka

};

Vtak.prototype.render = function () {
    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;

    this.ctx.drawImage(this.vtaky,renderX,renderY);

}