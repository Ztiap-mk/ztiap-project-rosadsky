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

    const gameovertext = document.getElementById('gameover');
    
    setInterval(function () { //Interval na každých 3000 = 3 sekundy.
        let budovaSet = generovanieBudov(ctx,c.width,c.height);

        budovy.push(budovaSet.top,budovaSet.bottom);


    },1650)


    setInterval(function () { //Interval na každých 3000 = 3 sekundy.
        let korunaSet = generovanieKoruniek(ctx,c.width,c.height);

        korunky.push(korunaSet);

    },3300)


    loopHry();

    //hlavný loop
    function loopHry() {

        if (vtak.gameover){
            hudbaPozadie.pause();
            gameOverText();
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

            budovy.forEach(function (budova) { //pre každý budova objekt sa updatuje aj renderuje horná aj spodná budova
                budova.update();
                budova.render();
            });

            korunky.forEach(function (korunka) {
                korunka.update();
                korunka.render();

            })

            vtak.update(budovy);
            vtak.render();




            if (detectCollision(vtak,budovy)) {
                alert("Koniec");
            }

            if (detekciaKorunky(vtak,korunky)) {
                alert("KORUNKA");
            }


        }


        window.requestAnimationFrame(loopHry);
    }



    //Vrátime dve hodnoty .top,.bottom

    function generovanieBudov(ctx) {
        let dlzkaTop = Math.round(Math.random()*200+50); //náhodné číslo okolo 300 //HORNá budova // výška
                let dlzaBottom = 600 - 175 - dlzkaTop;        //spodna budova hodnoty - generácoa
        let rBudova = { };
        rBudova.top = new Budova(600, 0 , dlzkaTop, 3, ctx); // Generovanie vrchnej budovy
        rBudova.bottom = new Budova(600, 600 - dlzaBottom, dlzaBottom, 3, ctx); // Generovanie spodnej budovy
        return rBudova;
    }


    function generovanieKoruniek(ctx) {
        let dlzkaTop = Math.round(Math.random()*333+150); //náhodné číslo okolo 300 //HORNá budova // výška
        let rKoruna = { };
        rKoruna = new Koruna(780, dlzkaTop , 3, ctx); // Generovanie vrchnej budovy
        return rKoruna;
    }

    function gameOverText() {
        ctx.drawImage(gameovertext,40,30,416,114);

    }
    
    function detectCollision(vtak,budovy) {
        for(var i = 0; i < budovy.length; i++ )  {
            let e = budovy[i];

            let highPipe = e.ypos <=0;
            let x0 = e.xpos,x1 = e.xpos + 100;
            if(highPipe){ //Vrchná pipe
                let y0 = e.ypos + e.length+16;
                let alpha = vtak.x;
                let beta = vtak.y - vtak.height/2;
                if(alpha>x0 && alpha < x1 && beta < y0){
                    return  true;
                }
            }
            else { //Spodná  pipe
                let y2 = e.ypos+40;
                let a = vtak.x;
                let b = vtak.y + vtak.height/2;
                if(a > x0 && a <x1 && b > y2){
                    return true;
                }
            }

        }

        return false;
    }

    function detekciaKorunky(vtak,korunky) {
        for(var i = 0; i <korunky.length; i++ ) {
            let e = korunky[i];

            let highPipe = e.ypos <=0;
            let x0 = e.xpos,x1 = e.xpos + 100;
            if(highPipe){ //Vrchná pipe
                let y0 = e.ypos + e.length+16;
                let alpha = vtak.x;
                let beta = vtak.y - vtak.height/2;
                if(alpha>x0 && alpha < x1 && beta < y0){
                    return  true;
                }
            }


        }
    }




};






