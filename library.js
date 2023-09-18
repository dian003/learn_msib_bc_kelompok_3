const random = require('randomstring')
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// contoh penggunaan dari array dan object
let nilai_pelajaran = {
    "matematika" : 100,
    "bahasa_indonesia" : 100,
    "sosiologi" : 85,
    "sejarah" : 100,
    "geografi" : 80,
    "pkn" : 100
    
}

function get_type(nilai){
    if(nilai > 90){
         types = 1;
    } else if(nilai > 80){
         types = 2;
    } else if(nilai > 70){
         types = 3;
    }

    let grades = ["", "A" , "B" , "C"];
// nilai index    0    1     2     3
    if(grades[types] = 1){
         nilai_type = "Lulus dengan nilai sempurna";

    } else if(grades['types'] = 2){
         nilai_type = "Lulus dengan nilai baik";

    } else if(grades['types'] = 3){
         nilai_type = "Lulus dengan nilai cukup";
    } else {
         nilai_type = "Mata pelajaran ini tidak lulus";
    }
    hasil = nilai_type;
    return hasil;  
}

console.log("Berikut Data Nilai Dari masing-masing mata pelajaran", nilai_pelajaran);
console.log("==================================================");
// Menemukan nilai dalam object x
console.log("1. Bahasa Indonesia adalah :", nilai_pelajaran['bahasa_indonesia']);
console.log(get_type(nilai_pelajaran['bahasa_indonesia']))
console.log("==================================================");
console.log("2. Matematika adalah :", nilai_pelajaran['matematika']);
console.log(get_type(nilai_pelajaran['matematika']))
console.log("==================================================");
console.log("3. Sosiologi adalah :", nilai_pelajaran['sosiologi']);
console.log(get_type(nilai_pelajaran['sosiologi']))
console.log("==================================================");
console.log("4. Sejarah adalah :", nilai_pelajaran['sejarah']);
console.log(get_type(nilai_pelajaran['sejarah']))
console.log("==================================================");
console.log("5. Geografi adalah :", nilai_pelajaran['geografi']);
console.log(get_type(nilai_pelajaran['geografi']))
console.log("==================================================");
console.log("6. PKN adalah :", nilai_pelajaran['pkn']);
console.log(get_type(nilai_pelajaran['pkn']))
console.log("==================================================");

// contoh penggunaan do while / loop
let x = 1;
while(x <= 6){
    console.log('Menggunakan While Nilai ke ', x);
    x++;
}
let y = 10
do {
    console.log('Menggunakan Do While dengan Nilai ke', y);
    y--;
}while(y>= 1);
console.log("==================================================");
// contoh penggunaan function dan loop / perulangan
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(15));
