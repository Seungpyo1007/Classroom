const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.2

// 캔버스 그려주기
c.fillRect(0,0, canvas.width, canvas.height);


class Sprite {
    constructor(position) {
        this.position = position;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, 50, 150);

    }

    // 그려줌 갱신
    update() {
        this.draw();

        this.position.y += this.velocity.y;

        if(this.position.y + this.height + thisl.velocity.y >= canvas.height)
        {
            this.velocity.y = 0;
        }
        else {
            this.velocicty.y += gravity;
        }
    }
}

const player = new Sprite( {

    position : {
        x : 0,
        y : 0,
    }

})  

const enemy = new Sprite( {

    position : {
        x : 400,
        y : 100,
    }

}) 

function animate() {
    //애니메이션 재생
    window.requestAnimationFrame(animate);
    console.log("go")

    c.fillStyle = "black";
    c.fillRect(0,0, canvas.width, canvas.height)


    player.update();
    enemy.update();
}

animate();