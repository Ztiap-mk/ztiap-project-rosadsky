


window.onload = function () {

    const c = document.getElementById('canvas');

    c.width = 485; // Šírka canvasu
    c.height = 600; // Výška canvasu

    const ctx = c.getContext('2d');

    const prostredie = new Prostredie(c,ctx);
    const vtak = new Vtak(50,250,ctx);
    loopHry();


    //hlavný loop
    function loopHry() {
        ctx.fillRect(0,0,c.width,c.height);
        prostredie.update();
        prostredie.render();
        vtak.update();
        vtak.render();
        window.requestAnimationFrame(loopHry);
    }

};




