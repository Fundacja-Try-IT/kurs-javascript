// Informacje o typach zmiennych można znaleźć tutaj: https://javascript.info/types
// Dodatkowo, warto przeczytać o konwersjach typów: https://javascript.info/type-conversions

// 1. Porównanie liczby i łańcucha znaków za pomocą ==
let liczba = 5;
let tekst = "5";

if (liczba == tekst) {
    console.log("liczba jest równa tekstowi (==)");
} else {
    console.log("liczba nie jest równa tekstowi (==)");
}

// 2. Porównanie liczby i łańcucha znaków za pomocą ===
if (liczba === tekst) {
    console.log("liczba jest równa tekstowi (===)");
} else {
    console.log("liczba nie jest równa tekstowi (===)");
}

// 3. Porównanie wartości logicznej i liczby za pomocą ==
let wartoscLogiczna = true;
let innaLiczba = 1;

if (wartoscLogiczna == innaLiczba) {
    console.log("wartoscLogiczna jest równa innaLiczba (==)");
} else {
    console.log("wartoscLogiczna nie jest równa innaLiczba (==)");
}

// 4. Porównanie wartości logicznej i liczby za pomocą ===
if (wartoscLogiczna === innaLiczba) {
    console.log("wartoscLogiczna jest równa innaLiczba (===)");
} else {
    console.log("wartoscLogiczna nie jest równa innaLiczba (===)");
}

// 5. Porównanie null i undefined za pomocą ==
let wartoscPusta = null;
let niezdefiniowane = undefined;

if (wartoscPusta == niezdefiniowane) {
    console.log("wartoscPusta jest równa niezdefiniowane (==)");
} else {
    console.log("wartoscPusta nie jest równa niezdefiniowane (==)");
}

// 6. Porównanie null i undefined za pomocą ===
if (wartoscPusta === niezdefiniowane) {
    console.log("wartoscPusta jest równa niezdefiniowane (===)");
} else {
    console.log("wartoscPusta nie jest równa niezdefiniowane (===)");
}

// 7. Porównanie dwóch obiektów za pomocą ==
let obiekt1 = { imie: "Alicja" };
let obiekt2 = { imie: "Alicja" };

if (obiekt1 == obiekt2) {
    console.log("obiekt1 jest równy obiekt2 (==)");
} else {
    console.log("obiekt1 nie jest równy obiekt2 (==)");
}

// 8. Porównanie dwóch zmiennych wskazujących na ten sam obiekt za pomocą ===
let obiekt3 = obiekt1;

if (obiekt1 === obiekt3) {
    console.log("obiekt1 jest równy obiekt3 (===)");
} else {
    console.log("obiekt1 nie jest równy obiekt3 (===)");
}