alert("Juego de la viborita")

var speed = 80;
var size = 6;

class object {
    constructor() {
        this.size = size
    }
    break(obj){
        var difx = Math.abs(this.x - obj.x);
        var dify = Math.abs(this.y - obj.y);
        if(difx >= 0 && difx < size && dify >= 0 && dify < size) {
            return true;
        } else {
            return false;
        }
    }
}

class bodySnake extends object {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
    }
    paint(ctx) {
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    setxy(x, y) {
        this.x = x;
        this.y = y;
    }
}

//Objetos del juego

var headSnake = new bodySnake(20, 20);
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function movement () {
    var nx = headSnake.x + xdir;
    var ny = headSnake.y + ydir;
    headSnake.setxy(nx, ny)
}

function control (event) {
    var cod = event.keyCode;
    if (ejex) {
        if(cod == 38) {
            ydir = -size;
            xdir = 0;
            ejex = false;
            ejey = true;
        }
        if (cod == 40) {
            ydir = size;
            xdir = 0;
            ejex = false;
            ejey = true;
        }
    }
    if (ejey) {
        if(cod == 37) {
            ydir = 0;
            xdir = -size;
            ejey = false;
            ejex = true;
        }
        if(cod == 39) {
            ydir = 0;
            xdir = size;
            ejey = false;
            ejex = true;
        }
    }
}

function paint () {
    var container = document.getElementById("container");
    var ctx = container.getContext("2d");
    ctx.clearRect(0,0, container.width, container.height);

    headSnake.paint(ctx);
}

function main () {
    paint();
    movement();
}

setInterval(main(), speed)

