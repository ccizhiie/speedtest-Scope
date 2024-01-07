const box = document.getElementById('box'); 
const text = document.getElementById('text'); 
let mousedown = false; // simpan status klik mouse
let position_x; // simpan posisi horizontal
let position_y; // simpan posisi vertikal

function change() {
    box.style.left = position_x  + "px"; // ubah posisi horizontal elemen box
    box.style.top = position_y + "px"; // ubah posisi vertikal elemen box
    text.style.left = -position_x + "px"; // ubah posisi horizontal elemen text
    text.style.top = -position_y + "px"; // ubah posisi vertikal elemen text
}

box.addEventListener("mousedown", function (e) {
    mousedown = true; // Saat ditekan pada elemen box, ubah nilai mousedown menjadi true
});

document.addEventListener("mousemove", function (e) {
   if (mousedown) {
        // Jika mouse digerakkan saat masih ditekan, ubah posisi_x dan position_y berdasarkan posisi mouse relatif terhadap elemen box
        position_x = e.clientX - 200; // Menghitung posisi horizontal berdasarkan posisi mouse
        position_y = e.clientY - 200; // Menghitung posisi vertikal berdasarkan posisi mouse
        change(); // Memanggil fungsi change untuk memperbarui tampilan elemen box dan text
        console.log(position_x); // Mencetak posisi_x ke konsol
        console.log(position_y); // Mencetak posisi_y ke konsol
   } 
})

document.addEventListener("mouseup", function (e) {
    mousedown = false; // Saat mouse dilepas, ubah nilai mousedown menjadi false
});

change(); 