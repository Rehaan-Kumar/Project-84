canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
console.log(ctx);

car1_width = 120;
car1_height = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 100;

background_image = "canvas_bg.jpg";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car_1_imageTag = new Image();
    car_1_imageTag.onload = uploadcar1;
    car_1_imageTag.src = car1_image;

    car_2_imageTag = new Image();
    car_2_imageTag.onload = uploadcar2;
    car_2_imageTag.src = car2_image;

}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car_1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car_2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        car1_up();
        console.log("up arrow key")
    }

    if(keyPressed == "40") {
        car1_down();
        console.log("down arrow key")
    }

    if(keyPressed == "37") {
        car1_left();
        console.log("left arrow key")
    }

    if(keyPressed == "39") {
        car1_right();
        console.log("right arrow key")
    }

    if(keyPressed == "87") {
        car2_up();
        console.log("key w")
    }

    if(keyPressed == "65") {
        car2_left();
        console.log("key a")
    }

    if(keyPressed == "83") {
        car2_down();
        console.log("key s")
    }

    if(keyPressed == "68") {
        car2_right();
        console.log("key d")
    }

    if (car1_x >= 650) {
        console.log("Car 1 won");
        document.getElementById("game_status").innerHTML = "Car 1 Won! 🏆🏆🏅🏅";
    }
    
    if (car2_x >= 650) {
        console.log("Car 2 Won");
        document.getElementById("game_status").innerHTML = "Car 2 Won! 🏆🏆🏅🏅";
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_x <= 650) {
        car1_x = car1_x + 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if (car2_x <= 650) {
        car2_x = car2_x + 10
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}