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

// jak napisać funkcję
function add(x, y) {
    return x + y;
}
console.log(add(5, 10));

// funkcje strzałkowe (funkcje anonimowe lambda)
let arrowAdd = (x, y) => x + y;
console.log(arrowAdd(5, 10));

// jak utworzyć tablicę
let numbers = [1, 2, 3, 4, 5];

// jak uzyskać dostęp do elementu w tablicy
let firstNumber = numbers[0];
let lastNumber = numbers[numbers.length - 1];
let lastNumber2 = numbers.at(-1); // to jest nowa metoda od ES2022

// tak samo można indeksować łańcuchy znaków
let firstChar = str[0];

// jak dodać element do tablicy
numbers.push(6);
numbers // to wypisze [1, 2, 3, 4, 5, 6]

// jak usunąć ostatni element z tablicy
let lastElement = numbers.pop();
numbers // to wypisze [1, 2, 3, 4, 5]

// jak usunąć dowolny element z tablicy
numbers.splice(1, 1); // usuń jeden element zaczynając od drugiego elementu
numbers // to wypisze [1, 3, 4, 5]

// jak utworzyć obiekt (słownik)
let person = {
    name: 'Jan',
    age: 30,
    isAdult: true
};
person // to wypisze { name: 'Jan', age: 30, isAdult: true }
person.name // to wypisze 'Jan'
person['name'] // to wypisze 'Jan'

// jak dodać lub zmodyfikować atrybut obiektu
person.city = 'Bydgoszcz';
person['city'] = 'Bydgoszcz';
person // to wypisze { name: 'Jan', age: 30, isAdult: true, city: 'Bydgoszcz' }

// jak usunąć atrybut obiektu
delete person.age;
person // to wypisze { name: 'Jan', isAdult: true, city: 'Bydgoszcz' }

// jak napisać funkcję zwracająca obiekt
function operators(x, y) {
    // Wykonujemy proste obliczenia
    let sum = x + y;
    let product = x * y;
    let difference = x - y;

    // Tworzymy i zwracamy obiekt
    return {
        sum: sum,
        product: product,
        difference: difference,
        average: sum / 2
    };
}

// jak napisać instrukcję warunkową
let age = 17;

if (age >= 18) {
    console.log('You are an adult');
} else if (age >= 13) {
    console.log('You are a teenager');
} else {
    console.log('You are a child');
}

// zamiast instrukcji warunkowej `if-else` można użyć `switch-case`
// po więcej szczegółów zajrzyj do dokumentacji 

// jednolinijkowa instrukcja if
console.log(age >= 18 ? 'You are an adult' : 'You are not an adult');

// jak napisać pętlę for (zwróć uwagę, ze różni się ona od Pythona!)
// for (inicjalizacja; warunek; krok) { ... }
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// jak iterować po tablicy
for (let number of numbers) {
    console.log(number);
}

// jak zastosować funkcję do każdego elementu tablicy
// zwróć uwagę, że jest to funkcja anonimowa
numbers.forEach(function (number) {
    console.log('Kwadrat liczby ' + number + ' to ' + number ** 2);
});

// jak napisać pętlę while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// jak napisać pętlę do-while
// zwróć uwagę, że pętla do-while zawsze wykona się przynajmniej raz!
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// przerywanie pętli i kontynuacja (analogicznie do Pythona)
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}