# Podstawowy kurs języka JavaScript

Chcesz nauczyć się JavaScript w ciekawy i angażujący sposób? Zapraszamy na nasz kurs, który łączy naukę podstaw tego języka z tworzeniem prostej, ale wciągającej gry! Kurs jest przede wszystkim skierowany do uczestniczek programu Girls Go IT, ale także dla każdego, kto chce w ciekawy sposób poznać podstawy JavaScript. Wymagana jest umiejętność programowania w dowolnym innym języku, abyś posiadała znajomość podstawowych struktur używanych w programowaniu.

Podczas kursu nauczysz się podstaw składni JavaScript, manipulacji DOM, a na koniec zbudujesz grę "Łapanie Jabłek" przy użyciu biblioteki PixiJS. Po ukończeniu kursu będziesz umiała:

- pisać skrypty JavaScript od podstaw,
- wykorzystywać obiektowy model dokumentu (DOM) do manipulacji stroną,
- tworzyć gry 2D z użyciem PixiJS.

Link do [filmiku na YouTube](https://www.youtube.com/).

## Spis treści

1. [Środowisko pracy](#1-środowisko-pracy)
2. [Czysty JavaScript](#2-czysty-javascript)
3. [Obiektowy Model Dokumentu](#3-obiektowy-model-dokumentu)
4. [Gra w Łapanie Jabłek](#4-gra-w-łapanie-jabłek)
5. [Podsumowanie](#5-podsumowanie)
   
## 1. Środowisko pracy

### Nawigacja po kursie 

Kurs składa się z kilku części (patrz [spis treści](#spis-treści)), każda z nich jest na wydzielonym branchu wraz z utworzonym Pull Requestem. Dodatkowo, części podzielone są na zadania reprezentowane przez commity danej części kursu. W trakcji realizacji kurs, kursant powinien przechodzić przez poszczególne branche i commity, aby ostatecznie zrealizować wszystkie zadania. Kurs nie ma na celu nauki systemów wersjonowania kodu, jednak dla wygody kursantów, przedstawiamy potrzebne komendy do nawigacji po kursie:

Pierwszym krokiem jest sklonowanie repozutorium z kursem na lokalny komputer. W tym celu, należy wykonać komndę:
```bash
git clone https://github.com/Fundacja-Try-IT/kurs-javascript.git
cd motorola
```

Po sklonowaniu repozytorium znajdujemy się na branchu `main`, czyli głównym branchu repozytorium. Aby przejść do konkretnej części kursu, reprezentowanej przez oddzielny branch, należy wykonać komendę:
```bash
git checkout nazwa_brancha
```

Po przejściu na odpowiedni branch, możemy sprawdzić listę commitów, które reprezentują zadania do wykonania w danej części kursu. W tym celu, należy wykonać komendę:
```bash
git log
```

Każdy commit odpowiada konkretnemu zadaniu. Aby poruszać się między commitami (zadaniami) w obrębie danego brancha (części kursu), należy wykonać komendę:
```bash
git checkout id_commitu
```

### Edytor kodu

Zalecanym edytorem kodu do realizacji zadań w kursie jest VS Code. Można go pobrać ze strony [Visual Studio Code](https://code.visualstudio.com/). Wspiera wszystkie popularne systemy operacyjne (Windows, Linux, MacOS).

### Rozszerzenie "Live Server"

Aby uruchamiać pliki HTML z kodem JavaScript w przeglądarce, należy zainstalować rozszerzenie "Live Server", które umożliwia automatyczne przeładowywanie strony po zapisaniu zmian w pliku. W tym celu, należy:
- uruchomić VS Code
- przejść do zakładki *Extensions* i wyszukać rozszerzenie "Live Server"
- Zainstalować rozszerzenie

## 2. Czysty JavaScript

Pierwsza właściwa część kursu ma na celu zapoznać kursanta ze składnią języka JavaScript, podstawowymi instrukcjami oraz obsługi konsoli dewelopera JS w przeglądarce. Aby przejść do tej części kursu, należy wykonać komendę:

```bash
git checkout javascript
```

### Konsola dewelopera

Aby wykonywać proste skrypty JS, zalecamy korzystanie z konsoli dewelopera w przeglądarce. Aby otworzyć konsolę dewelopera w polecanej przeglądarce Chrome, można użyć klawisza `F12`. Taka konsola, oprócz wyświetlania komunikatów i błędów, pozwala na interaktywne uruchamianie kodu JS (aby umożliwić wklejanie kodu do konsoli, należy zaznaczyć opcję `allow pasting`).

#### **Zadanie domowe 1**

Przeanalizuj zawartość strony internetowej [https://www.tryit.org.pl/pl/](https://www.tryit.org.pl/pl/). Zbadaj menu "O NAS" i sprawdź jak wygląda struktura tego elementu oraz pojawiającego się menu. Jakie `id` mają poszczególne elementy menu?

*Rozwiązanie*: przykładowe rozwiązanie znajduje się na branchu [`zadanie-domowe-1`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/1).

### Nauka składni języka JavaScript

Mając dostęp do interaktywnej konsoli, możemy wykonać zadania z pliku [`main.js`](https://github.com/Fundacja-Try-IT/kurs-javascript/blob/javascript/main.js). Nawigujemy po kolejnych zdanaiach (commitach):

- [`commit 7cd7df6`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/7cd7df6c26fd6a64a1d750fcec2be7cc1456c1a2) Nauka wypisywania na ekran i tworzenia komentarzy
- [`commit 3e0432a`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/3e0432a5f036b825249a5f6c56ec2a39aeb8455d) Nauka używania zmiennych i operatorów
- [`commit 38cfa07`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/38cfa079e8610f7c6e7afa214ea33de68a148429) Nauka pisania prostych funkcji
- [`commit 8f58513`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/8f58513cedb4ee04ce8d5556e2bc791741c24ce2) Nauka używania list i obiektów
- [`commit ade61ff`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/ade61ffa130959dc7f5a3c3b4691c54535ba04c0) Przykład z funkcją zwracającą obiekt
- [`commit 51272c8`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/51272c88c8bd1a10b5e32fc0e473245b64f0ddde) Nauka pisania instrukcji warunkowych (if-else)
- [`commit 81fc398`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/81fc398da33423ec5ea3958144e16d3621987114) Nauka pisania pętli (for, while)
- [`commit 184a76d`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/6/commits/184a76df03ac340b9f28f037f92bc3169c5dbc5d) Nauka tworzenia prostej klasy

#### **Zadanie domowe 2**

Napisz funkcję, której argumentami jest imię i wiek użytkownika. Funkcja powinna zwracać obiekt z imieniem i wiekiem, a także informację o tym czy użytkownik jest dorosły oraz czy jego wiek jest liczbą parzystą. Następnie utwórz listę z 5 imionami i napisz pętlę, która przechodzi po wszystkich elementach listy. W każdej iteracji podaj imię użytkownika i wylosuj wiek. Jeśli wiek użytkownika jest parzysty, wypisz jego dane na ekran.

*Podpowiedź*: poniżej znajduje się funkcja, która pozwala wylosować liczbę całkowitą z zadanego przedziału:
```JavaScript
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

*Rozwiązanie*: przykładowe rozwiązanie znajduje się na branchu [`zadanie-domowe-2`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/2).

### Więcej informacji

Gdzie szukać więcej informacji:
- [The Modern JavaScript Tutorial](https://javascript.info)
- [w3schools](https://www.w3schools.com/js)

#### **Zadanie domowe 3**

W dokumentacji JavaScript znajdź informacje o typach zmiennych, takich jak liczby, łańcuchy znaków (string), wartości logiczne (bool), `null` czy `undefined`. Zwróć uwagę na konwersję typów, która może występować automatycznie podczas porównywania zmiennych. Następnie napisz kilka instrukcji warunkowych, które pokazują różnicę między operatorem porównania (==) i ścisłego porównania (===). Porównaj liczby z łańcuchami znaków, wartości logiczne z liczbami, `null` z `undefined`, a także obiekty. W każdym przypadku użyj zarówno operatora ==, jak i ===, aby zobaczyć różnice.

*Rozwiązanie*: przykładowe rozwiązanie znajduje się na branchu [`zadanie-domowe-3`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/3).

## 3. Obiektowy Model Dokumentu

Obiektowy Model Dokumentu (ang. Document Object Model, DOM) to reprezentacja dokumentu HTML w postaci drzewa obiektów. Pozwala na manipulację zawartością strony internetowej za pomocą języka JavaScript. Aby przejść do tej części kursu, należy wykonać komendę:

```bash
git checkout dom
```

### Praca z DOM

W tej części, kursant poznaje DOM poprzez następujące zadania:

- [`commit 4670d72`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/4670d72a478ce538d36a2b429b2ef1225c622f3a) Szablon strony
- [`commit d21c68a`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/d21c68a0be6b1766e8a28fe716588e7bc423571d) Nauka wyświetlania alertów i okienek dialogowych
- [`commit a2bb84a`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/a2bb84ad2023d9d7390075cb3619f8c2f3ee0066) Nauka manipulowania elementami
- [`commit 0ab84d5`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/0ab84d57ab975c1d59c2a41024961d6f67ef1765) Nauka reagowania na akcje użytkownika
- [`commit 035d1b0`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/035d1b021ac8f6e98bb809e589d17b3403eeb2ef) Nauka ustawiania opóźnień czasowych (timeouts)
- [`commit 11b6d58`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/7/commits/11b6d58eb4924063a86bdb9d0e34bbd6d4e2f580) Nauka ustawiania interwałów

#### **Zadanie domowe 4**

Zmień kolor pudełka na jasnozielony, jeśli liczba kliknięć jest parzysta, a w przeciwnym przypadku zmień kolor na czerwony.

*Rozwiązanie*: przykładowe rozwiązanie znajduje się na branchu [`zadanie-domowe-4`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/4).

## 4. Gra w Łapanie Jabłek

Ostatnia część kursu to zebranie wszystkich dotychczasowych umiejętności w jednym projekcie - grze w łapanie jabłek. Aby przejść do tej części kursu, należy wykonać komendę:

```bash
git checkout czesc-4
```

### PixiJS

PixiJS to biblioteka JavaScript, która ułatwia tworzenie gier i animacji 2D w przeglądarce. Działa jak zestaw narzędzi, które pozwalają rysować, animować i dodawać interakcje do elementów graficznych, takich jak obrazki czy kształty. Wykorzystamy PixiJS do stworzyć gry, w której postać poruszają się po planszy, reagują na kliknięcia klawiaturą, a wszystko wygląda atrakcyjnie i działa płynnie. Wykorzystywane elementy biblioteki PixiJS będziemy tłumaczyć na bieżąco, w trakcie tworzenia gry.

Jeśli chcesz dowiedzieć się więcej o PixiJS, zapraszamy do zapoznania się z literaturą:
- [Dokumentacja PixiJS](https://pixijs.com/8.x/guides)
- [Interaktywny samouczek](https://pixijs.com/8.x/tutorials/getting-started#1)

### Projektowanie gry

W tej części kursu, kursant poznaje podstawy tworzenia gier w PixiJS poprzez projekt gry w łapanie jabłek. Zadania składające się na projekt:

- [`commit 80a16f8`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/80a16f80b51516ff7019d866f999129f88b48ced) Materiały do budowy gry
- [`commit 62b27b1`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/62b27b139dcc21a58538305bd6f8993e6a77abde) Dodanie skryptów PixiJS
- [`commit 20427d9`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/20427d9b91f2a3571c501a7cd6605ba467a1d2ec) Stworzenie aplikacji PixiJS
- [`commit 26758ef`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/26758efcf5c8c8cfc7207f628dac2fc87de6e0d2) Dodanie pierwszego zasobu (gracz.png) i stworzenie gracza
- [`commit d407ef9`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/d407ef95381b15454e11cf64459393fbbe434fe4) Załadowanie i dodanie tła
- [`commit 9d71622`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/9d71622ce5c55bf82f03e88ca982f2014cb1afc3) Sterowanie klawiaturą
- [`commit da20a06`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/da20a0603d8feb48c61f5c862eb0613f6f1983dc) Spadające obiekty
- [`commit 4e4c131`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/4e4c1313051da78447b005d72cd197cf4e1c8183) Aktualizacja pozycji spadających obiektów
- [`commit aad9b86`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/aad9b866394fa81f371da085080e322951672bf2) Wykrywanie kolizji
- [`commit 2e792cf`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/2e792cf87da32c04203628f472ef7e1ba6fbbb20) Wyświetlanie wyniku i liczby żyć
- [`commit 89c03f8`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/89c03f88783102ca814139fc45699b19ff7f4de8) Ładowanie i dodawanie dźwięków
- [`commit e1de4ed`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/8/commits/e1de4eddaddfe5611cb0d9f6aafa2c4d3ccff99c) Zwiększanie trudności gry z czasem

#### **Zadanie domowe 5**
1. Zmień teksturę gracza w zależności od ruchu (twarz w lewo lub w prawo).  
   *Podpowiedź*: obiekt można odbić lustrzanie przez ustawienie ujemnej skali.
2. Dodaj wiatr - spraw, aby jabłka spadały krzywo (pamiętaj, że jabłka nie mogą wyjść poza ekran!)
3. Dodaj restart (naciśnij spację na początku i po zakończeniu gry)
4. Dodaj tablicę wyników (pokaż 3 najlepsze wyniki na ekranie końca gry)

*Rozwiązanie*: przykładowe rozwiązania znajdują się na branchu [`zadanie-domowe-5`](https://github.com/Fundacja-Try-IT/kurs-javascript/pull/5).

## 5. Podsumowanie

Gratulacje! Ukończyłaś podstawowy kurs języka JavaScript. Teraz powinieneś znać podstawy składni języka, umieć pracować z DOM, a także tworzyć proste gry w PixiJS. Jeśli masz jakieś pytania, uwagi lub sugestie, napisz do nas!

Całość kursu oraz rozwiązań znajdziesz na branchu [`wszystko`](https://github.com/Fundacja-Try-IT/kurs-javascript/tree/wszystko).