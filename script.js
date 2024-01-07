const box = document.getElementById('box');
let mousedown = false;
let position_x = 0;
let position_y = 0;

function change() {
    box.style.left = position_x + "px";
    box.style.top = position_y + "px";
}

box.addEventListener("mousedown", function (e) {
    mousedown = true;
});

document.addEventListener("mousemove", function (e) {
    if (mousedown) {
        position_x = e.clientX - 200;
        position_y = e.clientY - 200;
        change();
        console.log(position_x);
        console.log(position_y);
    }
});

document.addEventListener("mouseup", function (e) {
    mousedown = false;
});
