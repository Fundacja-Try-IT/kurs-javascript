// jak wypisać wiadomość do konsoli
// zwróć uwagę na średnik na końcu instrukcji
console.log('Hello world!');

// jak napisać komentarz
// to jest komentarz jednolinijkowy

/*
to jest komentarz wielolinijkowy
to jest komentarz wielolinijkowy
to jest komentarz wielolinijkowy
*/

// utwórz zmienną
let x = 5;
let y = 10;
let z = x + y;
z // to wypisze liczbę 15 do konsoli

// operatory matematyczne
x + y;
x - y;
x * y;
x / y;
x % y;
x ** y;
x++; // to jest równoważne z x = x + 1
x--; // to jest równoważne z x = x - 1

// operatory porównania
x == y;
x != y;
x > y;
x >= y;

// podwójny znak równości vs potrójny znak równości (ścisła równość)
// należy być ostrożnym przy porównywaniu wartości różnych typów!
1 == '1'; // to wypisze true
1 === '1'; // to wypisze false

// operatory logiczne (inaczej niż w języku Python!)
true && false;
true || false;
!true;

// pytanie: jaki jest wynik następujących wyrażeń?
0 == false;
0 === false;

// JS jest dynamicznie typowany - typ zmiennej jest określany w trakcie działania programu
let changeVar = 5;   // zwróć uwagę na konwencję nazewnictwa camelCase
changeVar = 'Hello'; // to jest dozwolone w JS

// jak utworzyć wielolinijkowy łańcuch znaków
// zwróć uwagę na użycie backticków
let message = `Hello,
world!`;

// jak łączyć łańcuchy znaków (concatenation)
console.log('Hello' + ' ' + 'world!');

// jak uzyskać długość łańcucha znaków
let str = 'Hello world!';
str.length;

// jak utworzyć sformatowany łańcuch znaków
// zwróć uwagę na użycie backticków
console.log(`The length of the string is ${str.length}`);

// można zadeklarować zmienną bez przypisywania wartości
let emptyVar;

// null vs undefined
let nullVar = null; // oznacza brak wartości
let undefinedVar;   // oznacza zmienną, która nie została zainicjalizowana

// zmienną można zdefiniować za pomocą starego słowa kluczowego `var`,
// ale zaleca się jednak używanie `let` zamiast `var`
// (więcej informacji w dokumentacji: https://javascript.info/var)
// podobnie można zdefiniować zmienną globalną bez słowa kluczowego
// jednak nie jest to zalecany sposób definiowania zmiennych

// jak utworzyć stałą
// konwencja nazewnictwa stałych to wielkie litery
const CONST_VALUE = 5;
CONST_VALUE = 10; // to spowoduje błąd