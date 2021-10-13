window.onload = function () {
    var arrowLEFT = 37, arrowUP = 38, arrowRIGHT = 39, arrowDOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "imagens-para-meu-jogo/boneco-estranho-mas-legal.png";
    var kai = new sprite(spriteSheet);
    
    window.addEventListener("keydown",keydownHandler,false);
    window.addEventListener("keyup",keyupHandler,false);

    function keydownHandler(e){
        switch(e.keyCode){
            case arrowRIGHT:
                kai.mvRight = true;
                kai.mvLeft  = false;
                kai.mvUp    = false;
                kai.mvDown  = false;
            break;

            case arrowLEFT:
                kai.mvRight = false;
                kai.mvLeft  = true;
                kai.mvUp    = false;
                kai.mvDown  = false;
            break;

            case arrowUP:
                kai.mvRight = false;
                kai.mvLeft  = false;
                kai.mvUp    = true;
                kai.mvDown  = false;
            break;

            case arrowDOWN:
                kai.mvmvRight = false;
                kai.mvLeft  = false;
                kai.mvUp    = false;
                kai.mvDown  = true;
            break;
        }
    }

    function keyupHandler(e){
        switch(e.keyCode){
            case arrowRIGHT:
                kai.mvRight = false;
                break;

            case arrowLEFT:
                kai.mvLeft = false;
                break;

            case arrowUP:
                kai.mvUp = false;
                break;

            case arrowDOWN:
                kai.mvDown = false;
                break;
        }
    }

    spriteSheet.onload = function(){
        int();
    }

    function int(){
        loop();
    }

    function update(){
        kai.move();
        kai.colisoa(cnv.width,cnv.height);
    }

    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        kai.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        draw();
    }
}