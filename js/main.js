


window.onload = function () {

    const c = document.getElementById('canvas');

    c.width = 485; // Šírka canvasu
    c.height = 600; // Výška canvasu
    let vyskaPrechodu = 180; //Priestor pre vtáka v px

    const ctx = c.getContext('2d');

    const prostredie = new Prostredie(c,ctx); //c, ctx
    const vtak = new Vtak(50,250,ctx); //x,y,ctx

    const budovy = [];

    //const budova = new Budova(200 ,  0,  200,    3  ,ctx);
                            //xpos,ypos,length,speed,ctx
                            //dialka, vyska

    setInterval(function () { //Interval na každých 3000 = 3 sekundy.

        let budovaSet = generovanieBudov(ctx,c.width,c.height);
        budovy.push(budovaSet.top,budovaSet.bottom);
    },1500) //sekundy

    loopHry();


    //hlavný loop
    function loopHry() {
        ctx.fillRect(0,0,c.width,c.height);
        prostredie.update();
        prostredie.render();
        budovy.forEach(function (budova) {
            budova.update();
            budova.render();
        });
        vtak.update();
        vtak.render();
        window.requestAnimationFrame(loopHry);
    }
    //Vrátime dve hodnoty
    function generovanieBudov(ctx) {
        let dlzkaTop = Math.round(Math.random()*200+100); //náhodné číslo okolo 300
        let dlzaBottom = 600 - vyskaPrechodu - dlzkaTop;
        let rBudova = { };
        rBudova.top = new Budova(600, 0 , dlzkaTop, 3, ctx); // Generovanie vrchnej budovy
        rBudova.bottom = new Budova(600, 600 - dlzaBottom, dlzaBottom, 3, ctx); // Generovanie spodnej budovy
        return rBudova;

    }


};



