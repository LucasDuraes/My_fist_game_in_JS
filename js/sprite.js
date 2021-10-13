function sprite(img) {
    //atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    this.srcX = this.srcY = 0;
    this.width = 64;
    this.heigth = 96;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1;
    this.countAnim = 0;
    //métodos

        //desenho personagem
    this.draw = function(ctx){
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.heigth,this.posX,this.posY,this.width,this.heigth);
        this.animation();
    }

        //colisão
    this.colisoa = function(cnvWidth, cnvHeigth){
        if(this.posX + this.width > cnvWidth){
            this.posX--;
        }
        if(this.posX < cnvWidth-cnvWidth){
            this.posX++;
        }
        if(this.posY < cnvHeigth-cnvHeigth){
            this.posY++;
        }
        if(this.posY + this.heigth > cnvHeigth){
            this.posY--;
        }
    }

        //movimentação
    this.move = function(){
        if(this.mvDown){
            this.posY += this.speed;
            this.srcY = this.heigth * 0;
        }else
        if(this.mvLeft){
            this.posX -= this.speed;
            this.srcY = this.heigth * 1;
        }else
        if(this.mvRight){
            this.posX += this.speed;
            this.srcY = this.heigth * 2;
        }else
        if(this.mvUp){
            this.posY -= this.speed;
            this.srcY = this.heigth * 3;
        }  
    }
    this.animation = function(){
        if (this.mvLeft || this.mvRight || this.mvUp || this.mvDown) {
            this.countAnim++;
            if (this.countAnim >= 20) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        }
    }
}