




window.onload = function () {

    const c = document.getElementById('canvas');

    c.width = 485; // Šírka canvasu
    c.height = 600; // Výška canvasu
    let vyskaPrechodu = 180; //Priestor pre vtáka v px

    const ctx = c.getContext('2d');

    const prostredie = new Prostredie(c,ctx); //c, ctx
    const vtak = new Vtak(242.5,250,ctx); //x,y,ctx
    const budovy = [];
    const menu = new Menu(200,250,50,50,ctx);

    pozadie();

    function pozadie (){
        prostredie.update();
        prostredie.render();
        menu.update();
        menu.render();
        window.requestAnimationFrame(pozadie);
    };

    document.addEventListener('keydown',function (menuklavesa) {

        if(menuklavesa.keyCode === 27){ //ovládanie pomocou MEDZERNIKA + treba pridať W alebo myš.
            pozadie();
        }


    });

    document.addEventListener('keydown',function (klavesa) {

        if(klavesa.keyCode === 13){ //ovládanie pomocou MEDZERNIKA + treba pridať W alebo myš.
            loopHry();

            setInterval(function () { //Interval na každých 3000 = 3 sekundy.
                let budovaSet = generovanieBudov(ctx,c.width,c.height);

                budovy.push(budovaSet.top,budovaSet.bottom);


            },1650) //sekundy 1,65 sekundy
        }


    });



    //hlavný loop
    function loopHry() {

        ctx.fillRect(0,0,c.width,c.height);
        prostredie.update();
        prostredie.render();

        budovy.forEach(function (budova) { //pre každý budova objekt sa updatuje aj renderuje horná aj spodná budova
            budova.update();
            budova.render();
        });

        vtak.update();
        vtak.render();
        window.requestAnimationFrame(loopHry);
    }



    //Vrátime dve hodnoty .top,.bottom
    function generovanieBudov(ctx) {
        let dlzkaTop = Math.round(Math.random()*200+100); //náhodné číslo okolo 300 //HORNá budova // výška
        let dlzaBottom = 600 - vyskaPrechodu - dlzkaTop;        //spodna budova hodnoty - generácoa
        let rBudova = { };
        rBudova.top = new Budova(600, 0 , dlzkaTop, 3, ctx); // Generovanie vrchnej budovy
        rBudova.bottom = new Budova(600, 600 - dlzaBottom, dlzaBottom, 3, ctx); // Generovanie spodnej budovy
        return rBudova;

    }


};

function testovanie() {
    console.log('Testovanie!');
}




