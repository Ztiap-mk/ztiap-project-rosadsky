//
// OTÁZKY : Problém smenu nejak zresetovať funciu ?
//
//





window.onload = function () {

    const c = document.getElementById('canvas');
    const hudbaPozadie = document.getElementById('hudba');

    c.width = 485; // Šírka canvasu
    c.height = 600; // Výška canvasu


    let vyskaPrechodu = 180; //Priestor pre vtáka v px

    const ctx = c.getContext('2d');
    const prostredie = new Prostredie(c,ctx); //c, ctx
    const vtak = new Vtak(242.5,250,ctx); //x,y,ctx
    const budovy = [];
    const korunky = [];



    /*
    setInterval(function () { //Interval na každých 3000 = 3 sekundy.
        let budovaSet = generovanieBudov(ctx,c.width,c.height);

        budovy.push(budovaSet.top,budovaSet.bottom);


    },1650)
        */

    setInterval(function () { //Interval na každých 3000 = 3 sekundy.
        let korunaSet = generovanieKoruniek(ctx,c.width,c.height);

        korunky.push(korunaSet.top,korunaSet.bottom);

    },1000)


    loopHry();

    //hlavný loop
    function loopHry() {

        if (vtak.gameover){
            koniecHry(ctx, c);
            hudbaPozadie.pause();
        } else {

            if(vtak.hudbaPoz){
                hudbaPozadie.play();
            }
            if(!vtak.hudbaPoz ){
                hudbaPozadie.pause();
            }




            ctx.fillRect(0,0,c.width,c.height);
            prostredie.update();
            prostredie.render();

            /*budovy.forEach(function (budova) { //pre každý budova objekt sa updatuje aj renderuje horná aj spodná budova
                budova.update();
                budova.render();
            });
            */
            korunky.forEach(function (korunka) {
                korunka.update();
                korunka.render();

            })

            vtak.update();
            vtak.render();
        }


        window.requestAnimationFrame(loopHry);
    }



    //Vrátime dve hodnoty .top,.bottom
    /*
    function generovanieBudov(ctx) {
        let dlzkaTop = Math.round(Math.random()*200+100); //náhodné číslo okolo 300 //HORNá budova // výška
        let dlzaBottom = 600 - vyskaPrechodu - dlzkaTop;        //spodna budova hodnoty - generácoa
        let rBudova = { };
        rBudova.top = new Budova(600, 0 , dlzkaTop, 3, ctx); // Generovanie vrchnej budovy
        rBudova.bottom = new Budova(600, 600 - dlzaBottom, dlzaBottom, 3, ctx); // Generovanie spodnej budovy
        return rBudova;
    }
    */

    function generovanieKoruniek(ctx) {
        let dlzkaTop = Math.round(Math.random()*200+100); //náhodné číslo okolo 300 //HORNá budova // výška
        let dlzaBottom = 600 - vyskaPrechodu - dlzkaTop;        //spodna budova hodnoty - generácoa
        let rBudova = { };
        rBudova.top = new Korunka(600, 0 , dlzkaTop, 3, ctx); // Generovanie vrchnej budovy
        rBudova.bottom = new Korunka(600, 600 - dlzaBottom, dlzaBottom, 3, ctx); // Generovanie spodnej budovy
        return rBudova;
    }

};

function koniecHry(ctx, c){
    ctx.font="50px Helvetica";
    ctx.textAlign="center";
    ctx.fillStyle = "red";
    ctx.fillText("KONIEC HRY :(",c.width/2 , c.height/2);
}





