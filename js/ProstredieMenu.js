



const ProstredieMenu = function (c, ctx) {
    this.c = c;
    this.ctx = ctx;
    this.pozMenuPoz = 0;
    //this.pozSpeed = 1.33; // Rýchlosť pozadia
    //this.pozWidth = 765;
    this.pozImg = document.getElementById('poz');
};



//-----------------------GENEROVANIE POZADIA ZA SEBOU ------------------------------//

ProstredieMenu.prototype.update= function () {
    this.pozMenuPoz--;
    if(this.pozMenuPoz < -765)
        this.pozMenuPoz = 0;

};

ProstredieMenu.prototype.render = function () {
    for(let i = 0; i <= 1;i++ ) {
        this.ctx.drawImage(this.pozImg, this.pozMenuPoz+i*765, 0);
    }
};