// console.log("selam");
// document.writeln("<br><br>Selamlar");
// console.log(window);

// for(var i = 0; i < 5; i++){
//     document.writeln("<br><br> Selam" + i)
// }


/* var ve let/const farkı

var function scope;
let/const block scope;

*/


// let a = 12;
// let b = 26;
// alert("A + B " + (a+b) + "'e eşittir");


/*
? Veri Tipleri

1-String
2-Number
3-Boolean
4-Null
5-Undefined -- tanımsız
6-Object
7-Function

typeof(variable)  ile  variable'ın veri tipi
görülebilir.

== ile sadece içerik,
=== ile hem içerik hem veri tipi kontrol edilir
örnek : == 5 ile "5"' i aynı olarak görür o yüzden true döner
ancak === false döner.
x**y = x^y.
*/


// function varTest(){
//     var selam = "Selam";
//     if(true){
//         var varTest01 = 27;
//         const constTest0 = 37;
//         let letTest0 = 47;
//         console.log(constTest0);
//         console.log(letTest0);
//     }

//     console.log(varTest01);
//     console.log(constTest0); //Çalışmadı
//     console.log(letTest0); // Çalışmadı
//     console.log(selam);
// }

// varTest();

// javadaki scanner = prompt

// prompt("Adınızı\n ve soyadınızı giriniz.")

// debugger;
// var isim = prompt("Adınızı giriniz");
// console.log(isim);

// var tercih = confirm("Emin misiniz ?")

// console.log(typeof tercih);
// Confirm evet hayır kutucuğu çıkartır
// tamama basılırsa true iptale basılırsa false döner.
// if (tercih === true) {
//     console.log("Onay verdiniz.")
// } else {
//     console.log("Ret verdiniz.")
// }

// javadaki typecasting gibi Number(string) denebilir.
// parseInt() de kullanılabilir.
// parseFloat() floatlar için.
// toString() veya String() ile stringe çevrilebilir.
// arrayin içindekiler string,numbera çevrilebilir aynı yöntemlerle.
// Math.floor() sayının tam sayı kısmını döner
// Math.ceil() sayının 1 üstüne yuvarlar 3.01'i 4'e gibi.
// Math.round() en yakına yuvarlar.
// Math.max() en büyük sayı
// Math.min() en küçük sayı
// Math.pow() üslü sayı için
// Math.PI() pi sayısı
// Math.random() 0 ile 1 arasında rastgele bir sayı verir.

// array için || var arrayName = [deger1,deger2]

// ! Dizinin Metotları
/*
?push: dizinin sonuna eleman ekler, ayrica dizinin uzunlugunu döner
?unshift : dizinin basina eleman ekler, eleman sayisini geriye döner

?pop: dizinin sonundan eleman siler , eleman sayisini döner
?shift : dizinin basindan eleman sile , eleman sayisini döner

?splice(index, incdex) :eleman eklemek ve silmek için kullanilir.

?toString: diziyi stringe cevirebiliriz.
?join: diziyi stringe cevirir Fark ise araya eleman ekleyebiliriz

?concat: dizileri birlestirmek için kullanilir.
?slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi olustu
?length : dizinin uzunlugunu verir.
?reverse : dizinin elemanlarin ters cevirmek
?split(bölmek) : belirli bir ifadeye göre bölüp diziye cevirmek.
?indexOf : elemanin index numarasini verir.
?includes: verilen eleman içeriyor mu ona bakar

*/

/*
! String methotları

?  charAt
?  indexOf
?  toUpperCase
?  toLowerCase
?  trim -->> sağ ve sol taraftaki boşlukları siler.
?  replace verilen 2 stringin yerlerini değiştirir

*/

// let num = prompt("1-3 arasında bir sayı seçiniz.");

// switch (num) {
//     case "1":
//         console.log("1'i seçtiniz")
//         break;
//     case "2":
//         console.log("2'yi seçtiniz")
//         break;
//     case "3":
//         console.log("3'ü seçtiniz")
//         break;
// }

// var sayi = 21;
// stringg = sayi.toString();

// console.log(typeof stringg);

// var num0 = 27;
// var num1 = num0 / 2;
// document.write(num1);

let yakalama = document.getElementById("todoAddButton");
let classYakalama = document.getElementsByClassName("card-body")
console.log(yakalama);
console.log(yakalama.getAttribute("class"));
console.log(yakalama.className);
console.log(yakalama.classList[2]);
console.log(yakalama.id);
console.log("");

const classListesi = yakalama.classList;

classListesi.forEach(function(classlar){
    console.log(classlar);
})

// textContent konsola string olarak döner
// innerHTML etrafında HTML tagı varsa onları algılayıp
// silip öyle döner.
let buttonText = yakalama.textContent;
let buttonText2 = yakalama.innerHTML;

console.log(buttonText);
console.log(buttonText2);

yakalama.textContent = "<b>Deneme</b>"
yakalama.innerHTML = "<b>Deneme</b>"

console.log(classYakalama);

// cssdeki gibi class/id seçilir.
// id/classtan 1 tane varsa querySelector();
// 1'den fazla varsa querySelectorAll()
const clearButton = document.querySelector("#clearButton");
console.log(clearButton);

// cssdeki gibi selectorlar kullanılabilir.
const todoList = document.querySelectorAll(".list-group-item")[0];
console.log(todoList);

todoList.style.fontWeight = "bold";
todoList.style.backgroundColor = "purple";
todoList.style.color = "#fff";
todoList.style.paddingTop = "20px";
todoList.style.paddingBottom = "20px";
todoList.style.borderRadius = "15px"

const todoList2 = document.querySelector(".list-group-item");

// Array.from ile arraye çevirip forEach yazılabilir.
// let value = Array.from(todoList2);

// value.forEach(function(funTest){
//     console.log(funTest.textContent);
// })

let parent = todoList2.parentElement;
let children = todoList2.children;


console.log(parent);
console.log(children);

let container = document.querySelector(".container");
let todo2 = container.children[0].children[0].children[3].children[2].children[1];
todo2.textContent = "Todo 2 Değişti";
todo2.style.backgroundColor = "black";
todo2.style.color = "#fff";
todo2.style.fontWeight = "bold"
todo2.style.padding = "20px"
todo2.style.marginTop = "5px"
todo2.style.borderRadius = "15px"
console.log(todo2);