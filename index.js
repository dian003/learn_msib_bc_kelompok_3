// Pembuatan Variabel
console.log("==============Pembuatan Variabel==================");
let name = "Dian Rizky Alfajri";
var names = "Dian Rizky Alfajri";
console.log("Nama Saya: ", name, names);

//Pembuatan Konstanta, dimana constanta ini valuenya tidak bisa diubah dan bersifat tetap.
console.log("==============Pembuatan Konstanta=================");
const PI = 3.14;
console.log("Nilai PI:  " ,PI);

//Pembuatan Kondisional
//Menggunakan If Else
//Disini saya menggunakan contoh pada nilai rapot 
/* Menentukan Grade
* Grade 1 Nilainya 90
* Grade 2 Nilainya 80
* Grade 3 Nilainya 70
Dibawah Grade 3 dinyatakan tidak lolos 
*/
console.log("==========Menggunakan Fungsi IF ELSE==============");
let grade;
var matematika = 80;
var bahasa_indonesia = 85;
var sosiologi = 80;
var sejarah = 90;
var geografi = 80;
var pkn = 80;
var rata2 = Math.round((matematika+bahasa_indonesia+sosiologi+sejarah+geografi+pkn)/6);
// var rata2 = "60";
if(rata2 >= 90){
    grade = "A";
} else if(rata2 >= 80){
    grade = "B";
} else if(rata2 >= 70){
    grade = "C";
} else {
   return console.log("Kamu dinyatakan tidak lolos");
   } 
console.log("Grade kamu adalah : ", grade, "Dengan Rata-Rata: ",rata2);
console.log("==========Menggunakan Fungsi Switch Case==========");
//Menggunakan Switch Case
let grades;
var matematika2 = 100;
var bahasa_indonesia2 = 100;
var sosiologi2 = 85;
var sejarah2 = 100;
var geografi2 = 80;
var pkn2 = 100;
var ratas2 = Math.round((matematika2+bahasa_indonesia2+sosiologi2+sejarah2+geografi2+pkn2)/6);
switch (true) {
    case ratas2 >=90:
        grades = "A";
        console.log("Grade kamu adalah : ", grades, "Dengan Rata-Rata: ",ratas2);
        break;

        case ratas2 >=80:
            grades = "B";
            console.log("Grade kamu adalah : ", grades, "Dengan Rata-Rata: ",ratas2);
            break;

            case ratas2 >=70:
                grades = "C";
                console.log("Grade kamu adalah : ", grades, "Dengan Rata-Rata: ",ratas2);
                break;                     

    default:
        return console.log("Kamu dinyatakan tidak loloss dengan nilai Rata-Rata adalah ", ratas2);
        break;
}
console.log("============Penggunaan Object & Array===========");
let nilai_pelajaran = {
    "matematika" : 100,
    "bahasa_indonesia" : 100,
    "sosiologi" : 85,
    "sejarah" : 100,
    "geografi" : 80,
    "pkn" : 100
    
}
console.log("Berikut Data Nilai Dari masing-masing mata pelajaran", nilai_pelajaran);
console.log("==================================================");
// Menemukan nilai dalam object yang di array
console.log("Nilai Bahasa Indonesia adalah :", nilai_pelajaran['bahasa_indonesia']);
console.log("Nilai Matematika adalah :", nilai_pelajaran['matematika']);
console.log("Nilai Sosiologi adalah :", nilai_pelajaran['sosiologi']);
console.log("Nilai Sejarah adalah :", nilai_pelajaran['sejarah']);
console.log("Nilai Geografi adalah :", nilai_pelajaran['geografi']);
console.log("Nilai PKN adalah :", nilai_pelajaran['pkn']);
console.log("==================================================");
