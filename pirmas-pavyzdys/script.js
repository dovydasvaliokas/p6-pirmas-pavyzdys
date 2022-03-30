// Pagrindinė funkcija (pagrindinė kodo dalis)
window.onload = function() {
    // Viršuje tiek pagrindinės funkcijos, tiek papildomų funkcijų susikuriame kintamuosius, kuriuos naudosime toje funkcijoje.
    // Pirmam pavyzdyje pabandome susikurti x ir y ir apskaičiuoti jų sumą ir atimtį (nenaudojant papildomų funkcijų)
    // Kuriame kintamąjį rašydami "let kintamojoPavadinimas;"
    let x;
    let y;

    let suma;
    let atimtis;

    // Norint priskirti reikšmę kintamajui/išsaugoti rezultatą kintamajame, tai rašome "kintamojoPavadinimas = reikšmė"
    x = 5;
    y = 10;


    // Toliau, reikėtų susikurti sumos kintamąjį ir jame išsaugoti sumos rezultatą. Tačiau, kintamuosius JavaScript'e pagal "negriežtą" taisyklę reikia visada kurti viršuje.
    suma = x + y;


    // išvedimas į konsolę yra daromas console.log(kintamasis arba reikšmė ką norite išvesti);
    console.log(suma);


    // Jeigu norime išvesti į konsolę kelis kintamuosius arba kelias reikšmes, tai galime juos atskirti su pliuso ženklu skliausteliuose.
    // Pavyzdžiui, jeigu norime išvesti "x reikšmė yra 5", tai darytume taip:
    // Norint naudoti teksto reikšmę (o ne kintamąjį), tą tekstą reikia įrašyti tarp kabučių
    console.log("X reikšmė yra " + x);
    console.log("Y reikšmė yra " + y);
    console.log("Suma tarp x ir y yra: " + suma);



    // atimties dalis
    atimtis = x - y;
    console.log("Atimtis yra: " + atimtis);
}



// Papildomos funkcijos