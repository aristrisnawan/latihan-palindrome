// ===============
// =  Palindrome =
// ===============

// cara pertama menggunakan methode reverse

var a = "malam";

let tampung = "";

tampung = tampung + a.split("").reverse().join("");

if (tampung === a) {
    console.log(tampung + " Is Palindrome");
} else console.log(tampung + " Bukan Palindrome");

// Menggunakan perulangan

var b = "kodok";
let tamp = "";

//membuat comparator dulu, index pertama dan terkahir begitupun setrerusnya
for (let i = b.length - 1; i >= 0; i--) {
    tamp = tamp + b.charAt(i);
}

if (tamp === b) {
    console.log(tamp + " Is Palindrome");
} else console.log(tamp + " Not Palindrome");