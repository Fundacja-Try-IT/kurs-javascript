# Scenariusz filmiku na YouTube: "Podstawowy kurs języka JavaScript - Część 1"

---

### Slajd 1: Wprowadzenie

**Opis slajdu**:
- Tytuł: "Podstawowy kurs języka JavaScript - Część 1"

**Narracja**:
"Witaj w pierwszej części kursu opracowanego przez fundację TryIT, poświęconego językowi programowania JavaScript! Dzięki niemu będziesz mogła rozszerzyć wiedzę zdobytą podczas warsztatów. Przystępna forma filmiku instruktażowego pozwala na podążanie za kolejnymi etapami we własnym tempie. W tym odcinku nauczymy Cię podstaw języka JavaScript oraz pracy z Obiektowym Modelem Dokumentu (DOM). Już teraz zachęcamy Cię do rozwiązania dodatkowych zadań, które dla Ciebie przygotowaliśmy, które mają na celu ugruntowanie zdobywanej wiedzy. 

Niniejszy kurs jest przeznaczony dla uczestniczek programu "Girls Go IT" oraz wszystkich, którzy chcą nauczyć się JavaScript w ciekawy sposób. Aby w pełni skorzystać z kursu, wymagana jest umiejętność programowania w dowolnym innym języku, w szczególności znajomość podstawowych struktur używanych w programowaniu."

---

### Slajd 2: Spis treści

**Opis slajdu**:
- Tytuł: "Spis treści - Część 1"
- Lista:
  1. Środowisko pracy
  2. Czysty JavaScript
  3. Obiektowy Model Dokumentu

**Narracja**:
"Przed Wami plan naszego pierwszego odcinka. Zaczniemy od przygotowania środowiska pracy, przejdziemy przez podstawy języka JavaScript, a na końcu zajmiemy się manipulacją DOM. Zaczynajmy!"

---

### Nagranie 1: Nawigacja po kursie

**Opis nagrania**:
- Prezentacja strony z instrukcją instalacji git (https://github.com/git-guides/install-git).
- Prezentacja repozytorium i branchów:
  1. Otwórz w przeglądarce repozytorium github z kodem.
  2. Pokaż listę branchy.
  3. Przejdź do pull requests, pokaż przykładowy PR z częścią 1.
  4. Pokaż spis commitów, kliknij przykładowy.
  5. Pokaż PR z zadaniem domowym i jak podejrzeć rozwiązanie, sprawdzając wszystkie zmiany.
- Klonowanie repozytorium kursu:
  1. Otwórz terminal lub konsolę.
  2. Wykonaj polecenie: `git clone [link do repozytorium]`.
- Przechodzenie między branchami i commitami:
  1. Aby przejść do odpowiedniego branchu, użyj polecenia: `git checkout [nazwa brancha]`.
  2. Aby zobaczyć historię commitów, użyj polecenia: `git log`.

**Narracja**:
"Aby móc z łatwością korzystać z tego kursu, warto użyć oprogramowania do kontroli wersji kodu. Najpopularniejszym rozwiązaniem jest `git`, na temat którego możesz znaleźć w internecie wiele wartościowych materiałów. Jeśli nie masz jeszcze zainstalowanego gita, możesz skorzystać z instrukcji instalacji na stronie GitHub (https://github.com/git-guides/install-git).

Zobacz, jak poruszać się po kursie. Na początek, otwórz w przeglądarce repozytorium z kodem. Po lewej stronie widnieje zakładka "branches". Kliknij na nią, aby zobaczyć listę wszystkich dostępnych branchy (odgałęzień) w repozytorium. Jak widzisz, mamy kilka branchy (gałęzi), które odpowiadają poszczególnym fragmentom kursu i zadaniom domowym. Teraz przejdź do zakładki "Pull requests" i wybierz "pull request" związany z pierwszą częścią kursu. Widoczny jest spis commitów, które były częścią tego "pull request". Kliknij na jeden z nich, aby zobaczyć zmiany w kodzie dotyczące danego zadania. Teraz znajdź "pull request" z zadaniem domowym. Otwierając go, możesz przejrzeć przykładowe rozwiązania zadania domowego w zakładce "Files changed".

Przejdź teraz do sklonowania repozytorium kursu. Otwórz terminal lub konsolę na swoim komputerze. Użyjesz polecenia: git clone wraz z linkiem do naszego repozytorium. Pobierze ono całe repozytorium na twój komputer. Aby przejść do odpowiedniego brancha, użyjesz polecenia: git checkout. Aby zobaczyć historię commitów, które zostały wykonane w repozytorium, użyj polecenia: git log. Wyświetli ono listę wszystkich commitów wraz z ich identyfikatorami, autorami i wiadomościami."

---

### Nagranie 2: Instalacja i konfiguracja VS Code oraz Live Server

**Opis nagrania**:
- Krok po kroku instalacja VS Code:
  1. Otwórz stronę Visual Studio Code i pobierz wersję dla swojego systemu operacyjnego.
  2. Zainstaluj VS Code, postępując zgodnie z instrukcjami instalatora.
- Instalacja rozszerzenia Live Server:
  1. Otwórz VS Code.
  2. Przejdź do zakładki "Extensions" (rozszerzenia) po lewej stronie.
  3. Wyszukaj "Live Server" i kliknij "Install".

**Narracja**:
"Przejdź teraz do instalacji i konfiguracji środowiska pracy. Zalecamy użycie edytora kodu Visual Studio Code oraz przeglądarki Google Chrome. Dodatkowo, zainstalujemy rozszerzenie Live Server, aby łatwo uruchamiać pliki HTML z poziomu edytora z możliwością automatycznego przeładowania strony po zapisaniu pliku. Otwórz stronę Visual Studio Code i pobierz wersję dla swojego systemu operacyjnego. Po zainstalowaniu, otwórz VS Code i zainstaluj rozszerzenie Live Server."

---

### Nagranie 3: Konsola dewelopera

**Opis nagrania**:
- Otwieranie konsoli dewelopera w przeglądarce Chrome:
  1. Otwórz przeglądarkę Chrome.
  2. Naciśnij klawisz F12 lub kliknij prawym przyciskiem myszy na stronie i wybierz "Zbadaj" (Inspect).
  3. Przejdź do zakładki "Console".

**Narracja**:
"Aby wykonywać proste skrypty JavaScript, będziemy korzystać z konsoli dewelopera w przeglądarce Chrome. Otwórz ją za pomocą klawisza F12. Konsola pozwala na interaktywne uruchamianie kodu JavaScript."

---

### Slajd 3: Zadanie domowe 1

**Opis slajdu**:
- Tytuł: "Zadanie domowe 1"
- Treść:
  - Przeanalizuj zawartość strony internetowej [https://www.tryit.org.pl/pl/](https://www.tryit.org.pl/pl/). Zbadaj menu "O NAS" i sprawdź, jak wygląda struktura tego elementu oraz pojawiającego się menu. Jakie `id` mają poszczególne elementy menu?

**Narracja**:
"Pierwsze zadanie domowe polega na analizie zawartości strony internetowej tryit.org.pl. Użyj konsoli dewelopera, aby zobaczyć kod źródłowy wskazanych elementów strony i odpowiedzieć na powyższe pytania."

---

### Nagranie 4: Nauka składni JavaScript

**Opis nagrania**:
- Wykonywanie sekwencyjnie wszystkich poleceń z pliku czesc_2.js z równoległym komentarzem.

**Narracja**:
"Teraz przejdziemy przez podstawy programowania w JavaScript, omawiając kluczowe elementy tego języka.

Zaczniemy od najprostszej operacji, jaką jest wypisanie wiadomości do konsoli. Aby to zrobić, używamy funkcji `console.log`, po której umieszczamy tekst, który chcemy wyświetlić. Pamiętaj, aby każdą instrukcję kończyć średnikiem, co jest dobrą praktyką w przypadku języka JavaScript.

Kolejny ważny element to komentarze. Komentarze pozwalają na dodawanie notatek do kodu, które nie są wykonywane przez program. Mamy dwa rodzaje komentarzy: jednolinijkowe, które zaczynają się od dwóch ukośników, oraz wielolinijkowe, które zaczynają się od ukośnika i gwiazdki, a kończą na odwrót.

W JavaScript tworzymy zmienne używając słowa kluczowego `let`. Zmiennym możemy przypisywać różne wartości i wykonywać na nich operacje matematyczne, takie jak dodawanie, odejmowanie, mnożenie, dzielenie, modulo oraz potęgowanie. W JavaScript istnieją również specjalne operatory inkrementacji oraz dekrementacji zmiennych, które pozwalają na łatwe zwiększenie oraz zmniejszenie wartości zmiennej o jeden. Następnie mamy operatory porównania: są to między innymi operatory równości, nierówności, większe niż, mniejsze niż oraz porównanie większe/mniejsze lub równe. Różnica między podwójnym a potrójnym znakiem równości polega na tym, że potrójny znak równości sprawdza również typ danych. Operatory logiczne, takie jak AND, OR i NOT, pozwalają na tworzenie złożonych warunków logicznych. Są one przydatne w sytuacjach, gdy chcemy sprawdzić więcej niż jeden warunek naraz.

JavaScript jest językiem dynamicznie typowanym, co oznacza, że typ zmiennej jest określany podczas działania programu. Możemy zmieniać typ wartości przypisanej do zmiennej w trakcie działania programu, co daje dużą elastyczność.

Łańcuchy znaków, czyli stringi, możemy tworzyć używając pojedynczych, podwójnych cudzysłowów lub specjalnych znaków zwanych backtickami. Backticki pozwalają na tworzenie wielolinijkowych łańcuchów znaków i interpolację zmiennych, co oznacza, że możemy wstawiać wartości zmiennych bezpośrednio do tekstu.

Stałe deklarujemy używając słowa kluczowego `const`. Stałym nie można przypisać nowej wartości po ich zdefiniowaniu, co jest przydatne w sytuacjach, gdy chcemy, aby pewna wartość pozostała niezmienna.

Funkcje w JavaScript można tworzyć na kilka sposobów. W tradycyjnej deklaracji funkcji używamy słowa kluczowego `function`, po którym następuje nazwa funkcji, parametry i jej zawartość. Możemy również użyć funkcji strzałkowych, które są bardziej zwięzłe i czasami wygodniejsze w użyciu. W JavaScript bloki kodu otoczone są nawiasami klamrowymi, w przeciwieństwie do Pythona, gdzie do wyodrębnienia bloku używane są spacje lub tabulatory.

Tablice pozwalają na przechowywanie listy wartości. Możemy uzyskać dostęp do elementów tablicy za pomocą indeksów lub metody `at` w nowych wersjach JavaScript. Analogicznie zachowują się łańcuchy znaków. Za pomocą metody `push` można dodać nowy element na końcu tablicy, natomiast `pop` pozwala usuwać ostatni element. Możemy również usuwać dowolne elementy z tablicy za pomocą specjalnej metody `splice`, której argumentami jest pozycja w tablicy oraz liczba elementów do usunięcia.

W JavaScript możemy tworzyć obiekty, które są zbiorami par klucz-wartość, podobnie do słowników w Pythonie. Dostęp do atrybutów obiektu uzyskujemy za pomocą notacji kropkowej lub nawiasów kwadratowych. Możemy dodawać lub modyfikować atrybuty obiektu, a także usuwać je, jeśli są już niepotrzebne.

Prześledźmy jeszcze jeden przykład dotyczący funkcji w JavaScript. Napisz funkcję, która zwraca obiekt na podstawie dwóch argumentów `x` i `y`: zacznij od zdefiniowania funkcji i przekazania do niej argumentów. W ciele funkcji wykonaj obliczenia, takie jak suma, iloczyn, różnica oraz średnia tych argumentów. Następnie utwórz obiekt, w którym kluczami będą na przykład `sum`, `product`, `difference`, `average`, a wartościami wyniki obliczeń. Na końcu funkcji użyj `return`, aby zwrócić ten obiekt. Przetestuj funkcję, wywołując ją z różnymi argumentami i sprawdź, czy zwraca poprawne wyniki.

Instrukcje warunkowe pozwalają na wykonanie kodu w zależności od spełnienia określonych warunków. Możemy używać instrukcji `if-else`, podobnej do tej z Pythona. Zwróć jednak uwagę na konieczność dodania nawiasów wokół warunku, a także inny zapis `else if` zamiast `elif`. Podobnie jak przy funkcjach, należy użyć nawiasów klamrowych. Istnieje również skrócona wersja instrukcji warunkowej, w której w jednej linijce podajemy warunek (bez nawiasów), następnie pytajnik, a na koniec wartości w przypadku gdy warunek jest prawdziwy lub fałszywy oddzielone dwukropkiem.

Pętla `for` jest najbardziej popularna i pozwala na iterację przez określoną liczbę kroków lub przejście po całej sekwencji. W pierwszym przypadku użyj składni pozwalającej na zdefiniowanie zmiennej, warunku stopu oraz inkrementacji w jednej linijce. Przy iteracji po sekwencji wystarczy zdefiniować zmienną i podać nazwę sekwencji, podobnie jak w Pythonie. Możliwe jest również wywołanie funkcji na wszystkich elementach sekwencji przez wywołanie na niej metody `forEach` i podanie funkcji. Możemy również używać pętli `while` i `do-while`, które wykonują kod tak długo, jak długo spełniony jest określony warunek. Różnica pomiędzy nimi polega na tym, że `do-while` zawsze wykona się przynajmniej jeden raz. Analogicznie do Pythona, możemy przerywać pętle za pomocą instrukcji `break` lub przechodzić do następnej iteracji za pomocą instrukcji `continue`.

Na koniec omówimy klasy w JavaScript. Klasa to definicja struktury danych zawierająca właściwości i metody. Stwórz klasę `Person` (osoba), która będzie zawierać własności `name` (imię) oraz `age` (wiek). W tym celu dodaj konstruktor za pomocą słowa kluczowego `constructor`, który przyjmuje dwa argumenty i przypisuje wartości odpowiednim polom przez odwołanie do `this` (analogicznie do `self` w Pythonie). Dodaj również metodę `isAdult` sprawdzającą czy osoba jest pełnoletnia. Zwróć uwagę, że nie używamy słowa kluczowego `function`. Możemy tworzyć obiekty na podstawie klasy, dlatego stwórz dwa obiekty - osobę o imieniu "Jan" i wieku 15 lat. Wywołaj metodę `isAdult` i sprawdź czy wynik jest poprawny, a następnie stwórz obiekt dla 30-letniej "Janiny" i sprawdź wynik wywołania metody.
""

---

### Slajd 4: Zadanie domowe 2

**Opis slajdu**:
- Tytuł: "Zadanie domowe 2"
- Treść:
  - Napisz funkcję, której argumentami jest imię i wiek użytkownika.
  - Funkcja powinna zwracać obiekt z imieniem i wiekiem, a także informację o tym, czy użytkownik jest dorosły oraz czy jego wiek jest liczbą parzystą.
  - Utwórz listę z 5 imionami.
  - Napisz pętlę, która przechodzi po wszystkich elementach listy. W każdej iteracji podaj imię użytkownika i wylosuj wiek. Jeśli wiek użytkownika jest parzysty, wypisz jego dane na ekran.
- Podpowiedź:
  - Funkcja, która pozwala wylosować liczbę całkowitą z zadanego przedziału:
    ```
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ```

**Narracja:**

"W zadaniu domowym 2 należy stworzyć funkcję, która przyjmuje dwa argumenty: imię i wiek użytkownika. Twoim celem jest, aby funkcja zwracała obiekt zawierający imię, wiek, informację o pełnoletniości użytkownika oraz informację o parzystości wieku.

Następnie powinnaś utworzyć listę z 5 imionami i napisać pętlę, która przechodzi po wszystkich elementach tej listy. W każdej iteracji powinnaś podać imię użytkownika i wylosować jego wiek przy użyciu funkcji `getRandomInt`. Jeśli wiek użytkownika będzie liczbą parzystą, wypisz jego dane na ekranie.

Oto funkcja `getRandomInt`, która losuje liczbę całkowitą z zadanego przedziału (min, max). Użyj jej do losowania wieku użytkowników."

---

### Slajd 5: Dodatkowe materiały

**Opis slajdu**:
- Tytuł: "Co dalej?"
- Treść:
  - Gdzie szukać informacji?
  - Linki: The Modern JavaScript Tutorial (https://javascript.info), w3schools (https://www.w3schools.com/js)

**Narracja**:
"Chcemy zachęcić Cię do dalszego zgłębiania wiedzy na temat JavaScript. W Internecie dostępnych jest wiele zasobów, które pomogą Ci w nauce i rozwijaniu umiejętności.

Jednym z najlepszych źródeł informacji jest strona javascript.info, która oferuje szczegółowe i dobrze zorganizowane artykuły na temat JavaScript. Kolejnym wartościowym źródłem jest w3schools.com/js, gdzie znajdziesz mnóstwo praktycznych przykładów i interaktywnych samouczków.

Zachęcamy Cię do regularnego odwiedzania dokumentacji, eksperymentowania z kodem i samodzielnego rozwiązywania problemów. Im więcej praktyki, tym lepiej opanujesz JavaScript i zrozumiesz, jak tworzyć dynamiczne i interaktywne strony internetowe."

---

### Slajd 6: Zadanie domowe 3

**Opis slajdu**:
- Tytuł: "Zadanie domowe 3"
- Treść:
  - W dokumentacji JavaScript znajdź informacje o typach zmiennych, takich jak liczby, łańcuchy znaków (string), wartości logiczne (bool), `null` czy `undefined`. Zwróć uwagę na konwersję typów, która może występować automatycznie podczas porównywania zmiennych. Następnie napisz kilka instrukcji warunkowych, które pokazują różnicę między operatorem porównania (==) i ścisłego porównania (===). Porównaj liczby z łańcuchami znaków, wartości logiczne z liczbami, `null` z `undefined`, a także obiekty. W każdym przypadku użyj zarówno operatora ==, jak i ===, aby zobaczyć różnice.

**Narracja**:
Trzecie zadanie domowe polega na zapoznaniu się z typami zmiennych w języku JavaScript. Zacznij od przeszukania dokumentacji, aby znaleźć szczegółowe informacje o różnych typach zmiennych, takich jak zmienne łańcuchowe (string), liczby, wartości logiczne (boolean), zmienne bez przypisanej wartości (typ null), zmienne niezdefiniowane (typ undefined).

Następnie spróbuj napisać kilka instrukcji warunkowych, w których użyjesz zmiennych różnych typów. Możesz na przykład sprawdzić, czy zmienna jest liczbą, czy stringiem, albo porównać dwie zmienne różnych typów.

To ćwiczenie pomoże Ci lepiej zrozumieć, jak działają typy zmiennych w języku JavaScript oraz jak można je efektywnie wykorzystać podczas pisania kodu Twoich przyszłych programów."

---

### Slajd 7: Obiektowy Model Dokumentu (DOM)

**Opis slajdu**:
- Tytuł: "3. Obiektowy Model Dokumentu (DOM)"
- Treść:
  - Obiektowy model dokumentu (ang. Document Object Model, DOM) jest to sposób reprezentacji złożonych dokumentów XML i HTML w postaci modelu obiektowego. 
- Ilustracja: 
  - Duże drzewo z rozgałęzieniami. Na samej górze drzewa znajduje się prostokąt oznaczony jako document lub HTML. Bezpośrednio pod nim, jako dzieci, są dwa prostokąty oznaczone jako `head` i `body`. Pod `head` mogą być pokazane przykładowe dzieci, takie jak `title` czy `meta`. Pod `body` narysowane są różne węzły reprezentujące typowe elementy HTML, takie jak `h1`, `a`. Na przykład, `h1` może mieć pod sobą element text "A heading", co ilustruje pojęcie dziecka w węzłach DOM. Każdy węzeł może być przedstawiony jako prostokąt w różnych kolorach w zależności od typu.
  - Jeśli się zmieści, to wynikowa strona HTML odpowiadająca temu drzewu DOM, ewentualnie strzałki pomiędzy wybranymi węzłami i elementami strony.

**Narracja**:
"Document Object Model, w skrócie DOM, jest hierarchiczną strukturą danych, która reprezentuje stronę HTML jako zestaw połączonych ze sobą obiektów. Możemy myśleć o DOM jak o drzewie, gdzie każdy element strony jest węzłem tego drzewa. Węzły mogą mieć dzieci, które są innymi węzłami. Na przykład, element `ul` może mieć dzieci w postaci elementów `li`.

Dzięki tej strukturze drzewa, skrypty, np. napisane z użyciem języka JavaScript, mogą dynamicznie manipulować treścią, strukturą i stylami strony internetowej. Możemy używać skryptów JavaScript do zmiany tekstu nagłówka, dodawania nowych elementów do strony, czy też modyfikacji atrybutów istniejących elementów. DOM umożliwia łatwy dostęp do każdej części dokumentu poprzez nawigację po węzłach drzewa. Dzięki temu możemy tworzyć interaktywne i dynamiczne strony internetowe."

---

### Nagranie 5: Selekcja i manipulacja elementami DOM

**Opis nagrania**:
- Otworzenie strony z VS Code i Live Server.
- Wykonywanie sekwencyjnie wszystkich poleceń z pliku czesc_3.html z równoległym komentarzem. 
- Po każdym fragmencie przeładowanie strony i pokazanie oczekiwanego efektu.

**Narracja**:
"Zaczynamy od struktury dokumentu HTML. W naszym przykładzie definiujemy styl dla całej strony, używając selektora body i klasy `container` oraz `box`. Te style określają wygląd elementów, takie jak czcionka, układ oraz kolory. W sekcji `body` mamy dwa główne elementy `div` z klasą `box`. Jeden z nich ma identyfikator `click`, a drugi `list`. Element `click` wyświetla tekst 'Kliknij!', a element list zawiera ukrytą listę punktowaną, która stanie się widoczna po przeprowadzeniu pewnych operacji w dalszej części kursu. Otwórz plik w VS Code i użyj Live Server, aby na żywo obserwować zmiany na stronie. Po każdym zapisie pliku, strona zostanie przeładowana i od razu zobaczysz wprowadzone zmiany.

Zobacz teraz, jak wyświetlić wiadomość użytkownikowi. Użyj funkcji `alert`, `prompt` oraz `confirm`, aby wyświetlić okno dialogowe, zapytać użytkownika o imię i sprawdzić, czy jest pewien swojego wyboru. Te komunikaty są przydatne do interakcji z użytkownikiem bezpośrednio z poziomu strony.

Aby uzyskać dostęp do elementu DOM i zmienić jego styl, warto zwrócić uwagę na funkcję `document.querySelector`, która pozwala na uzyskanie uchwytu do odpowiedniego elementu DOM. W naszym przypadku będzie to element o identyfikatorze `click`, dlatego użyj selektora `#click`. Można również uzyskiwać dostęp do obiektów wyszukując po klasie lub strukturze, po więcej szczegółów odsyłamy Was do dokumentacji funkcji `querySelector`. Za pomocą funkcji `setTimeout` ustal opóźnione wywołanie wewnętrznej strzałkowej funkcji i zmień kolor tła elementu `click` po trzech sekundach.

Za pomocą funkcji `addEventListener` skrypt może nasłuchiwać kliknięcia na element `click`. Każde kliknięcie wywołuje funkcję, która zwiększa wartość zmiennej `score` i aktualizuje tekst wewnątrz elementu.

Zobaczmy również jak utworzyć nowy element DOM i go usunąć. Utwórz nowy element `div` za pomocą `document.createElement` i nadaje mu tekst "Dodatkowa wiadomość" używając `textContent`. Aby wyróżnić ten nowy element, zmień jego kolor tekstu na czerwony, przypisując odpowiednią wartość do stylu `color`. Ten nowo utworzony element dodaje jako dziecko do elementu `box` za pomocą metody `appendChild`. Dzięki temu nowy element staje się widoczny na stronie wewnątrz elementu `click`. Ponownie użyj `setTimeout`, tym razem aby po dwóch sekundach od dodania elementu usunąć go. Wywołaj metodę `removeChild` na elemencie `box`. W ten sposób, po upływie określonego czasu, element ten zostaje usunięty ze strony.

Przejdźmy teraz do modyfikacji listy. Używając `setInterval`, a więc metody, która pozwala na wywoływanie funkcji w określonych odstępach czasu, zmień tekst każdego elementu listy co sekundę. Zmień również widoczność elementów `click` i `list`, aby zarządzać widocznością elementów na stronie.

---

### Slajd 8: Zadanie domowe 4

**Opis slajdu**:
- Tytuł: "Zadanie domowe 4"
- Treść:
  - Zmień kolor pudełka na jasnozielony, jeśli liczba kliknięć jest parzysta.
  - Zmień kolor pudełka na czerwony, jeśli liczba kliknięć jest nieparzysta.

**Narracja**:
"Czwarte zadanie domowe polega na manipulacji elementami HTML przy użyciu skryptu napisanego w języku JavaScript. Twoim zadaniem jest stworzenie prostego interaktywnego pudełka, którego kolor zmienia się w zależności od liczby kliknięć.

Wykorzystaj element `div` o klasie typu `box`. Następnie w JavaScript napisz funkcję, która będzie zliczać kliknięcia na pudełko. W zależności od tego, czy liczba kliknięć jest parzysta czy nieparzysta, zmień kolor pudełka odpowiednio na jasnozielony lub czerwony. W rozwiązaniu tego zdania przydadzą Ci się funkcje, których używaliśmy w przedstawionych przykładach, m.in. `addEventListener`."

---

### Slajd 9: Zakończenie

**Opis slajdu**:
- Tytuł: "Koniec części 1"

**Narracja**:
"To już koniec części 1. tego kursu. Nie zapomnij obejrzeć drugiej części naszego kursu, gdzie stworzysz własną grę w przeglądarce za pomocą JavaScript!"

---

### Nagranie 6: Zapowiedź części 2

**Opis nagrania**:
- Krótki filmik pokazujący gotową grę.

**Narracja**:
"W drugiej części nauczysz się, jak stworzyć własną grę przeglądarkową przy użyciu biblioteki PixiJS. Przejdziemy przez cały proces – od podstawowej konfiguracji, przez dodawanie elementów gry, aż po implementację dynamicznych interakcji i efektów dźwiękowych. To idealna okazja, aby w praktyce wykorzystać JavaScript i stworzyć coś wyjątkowego!"

---

# Scenariusz filmiku na YouTube: "Podstawowy kurs języka JavaScript - Część 2"

---

### Slajd 1:

**Opis slajdu**:
- Tytuł: "Podstawowy kurs języka JavaScript - Część 2"

**Narracja**:
"Witaj w drugiej części kursu dotyczącego języka JavaScript stworzonego przez fundację TryIT! W tym odcinku nauczysz się jak stworzyć własną grę w przeglądarce, za pomocą języka JavaScript! Jeśli nie oglądałaś jeszcze pierwszej części tego kursu, sugerujemy obejrzenie jej w pierwszej kolejności, jeszcze przed przystąpieniem do implementacji gry. Ułatwi Ci to wykonanie zadań z drugiej części kursu."

---

### Nagranie 1: PixiJS

**Opis nagrania**:
- Poruszanie się po dokumentacji biblioteki PixiJS (https://pixijs.com i https://pixijs.com/8.x/guides)
- Pokazanie prostych przykładów gier z dokumentacji (https://pixijs.com/8.x/playground)

**Narracja**:
"W tym nagraniu przyjrzymy się bibliotece PixiJS, która jest przydatnym narzędziem do tworzenia gier i aplikacji graficznych w języku JavaScript. Zacznijmy od odwiedzenia dokumentacji biblioteki PixiJS, dostępnej pod adresem `pixijs.com` oraz `pixijs.com/8.x/guides`. Dokumentacja jest świetnym źródłem informacji, które pomogą Wam zrozumieć podstawowe oraz zaawansowane funkcje biblioteki PixiJS.

W sekcji 'Guides' znajdziesz szczegółowe przewodniki, które krok po kroku wprowadzą Cię w różne aspekty używania PixiJS, takie jak tworzenie scen, zarządzanie obiektami graficznymi czy obsługa zdarzeń. Każdy przewodnik jest dobrze opisany i ilustrowany, co ułatwia naukę i implementację.

Następnie, odwiedź stronę z przykładami gier, która znajduje się pod adresem pixijs.com/8.x/playground. Na tej stronie znajdziesz różne przykłady zastosowań biblioteki PixiJS, które możecie przetestować na żywo. Przykłady te pokazują, jak tworzyć proste gry i efekty graficzne, co może być doskonałym punktem wyjścia dla własnych projektów.

Zapraszamy Cię do zapoznania się z dokumentacją oraz przykładami dostępnymi dla biblioteki PixiJS. Realizacja rzeczywistych przykładów pomoże Ci lepiej zrozumieć jak korzystać z tej biblioteki i z pewnością przyspieszy Twoją naukę tworzenia dynamicznych i interaktywnych aplikacji graficznych."

---

### Nagranie 2a: Tworzenie gry od początku do końca

**Opis nagrania**:
- Implementacja gry krok po kroku, a w wyznaczonych momentach zaprezentowanie obecnego stanu gry w przeglądarce (uruchomiona w tle w Live Server). Fragmenty pomiędzy prezentacjami stanu gry odpowiadają kolejnym commitom na branchu `gra`.

**Narracja**:
"Wszystkie materiały niezbędne w trakcie budowy gry znajdziesz na branchu `materialy`, dlatego przed rozpoczęciem implementacji, warto przełączyć się na ten branch.

Zacznijmy od stworzenia szkieletu gry 'Łapacz jabłek'. Pierwszym krokiem jest przygotowanie strony HTML, która będzie bazą dla powstającej gry. Ustaw kodowanie znaków, tytuł strony i styl strony z grą. Ustaw marginesy html i body na 0px, co usunie domyślne odstępy wokół treści. Następnie, dla obu tych elementów, ustaw wysokość na 99.5%, co sprawi, że strona zajmuje praktycznie całą wysokość przeglądarki. Gotowy szablon znajdziesz w pliku `index.html`.

[PREZENTACJA STANU GRY]

Teraz, gdy masz gotowy podstawowy szkielet strony HTML, możesz przejść do integracji z biblioteką PixiJS, która będzie podstawą dla Twojej gry. Zacznij od dodania skryptu, który pobiera bibliotekę PixiJS bezpośrednio z jej oficjalnego źródła. W sekcji `script`, wskaż na wersję 8.2.0 tej biblioteki. Następnie dodaj kolejny skrypt, tym razem z biblioteki Pixi Sound. Pobierz ją z repozytorium na GitHubie i wskaż na wersję 6.0.0. Pixi Sound to rozszerzenie PixiJS, które pozwoli Ci na łatwe dodawanie dźwięków do gry. Dźwięki w grze to bardzo ważny element, który zwiększa immersję i sprawia, że rozgrywka staje się bardziej angażująca.

Po zaimportowaniu tych bibliotek, stwórz kolejny blok `script`, w którym ustawiasz `type` na `module`. Na razie zostaw ten blok pusty, ale to właśnie tutaj będziesz pisać kod, który będzie odpowiedzialny za całą logikę naszej gry. W kolejnych krokach zaczniesz implementować poszczególne funkcje i elementy, które sprawią, że Twoja gra ożyje na ekranie.

Utwórz teraz instancję aplikacji PixiJS, która będzie podstawowym narzędziem do renderowania grafiki na tworzonej stronie. Aby to zrobić, wywołaj konstruktor `PIXI.Application`, co stworzy nową aplikację PixiJS.

Kolejnym krokiem jest inicjalizacja aplikacji PixiJS przy użyciu metody `init`. Przekaż konfigurację tworzonej aplikacji. Po pierwsze, ustaw `autoDensity`, co sprawia, że PixiJS automatycznie dostosuje rozdzielczość renderowania w zależności od urządzenia, na którym gra jest uruchamiana. Dalej, skonfiguruj aplikację tak, aby jej rozmiar był automatycznie dopasowany do rozmiaru okna przeglądarki. Ustaw opcję `resizeTo` na document.body, co oznacza, że Twoja gra zawsze będzie wypełniać całe dostępne okno przeglądarki. Na koniec, dodaj aplikację do strony HTML. Zrobisz to, dołączając płótno (`canvas`), na którym PixiJS będzie rysować naszą grę, bezpośrednio do elementu body tworzonej strony. Użyj do tego metody `appendChild`, która wstawia płótno PixiJS jako ostatni element w `body`.

[PREZENTACJA STANU GRY]

W tym etapie zajmiesz się dodaniem głównego bohatera Twojej gry, czyli postaci gracza, na ekran. Rozpocznij od załadowania tekstury dla gracza, czyli obrazu, który będzie reprezentował postać. Użyj do tego funkcji `PIXI.Assets.load`, która wczytuje grafikę z pliku o nazwie `gracz.png`. Po załadowaniu, ustaw tryb skalowania tej tekstury na `nearest`, co zapewni, że podczas powiększania lub pomniejszania, obraz zachowa ostre krawędzie, zamiast być rozmyty.

Kiedy tekstura jest już gotowa, tworzysz na jej podstawie obiekt gracza przy użyciu `PIXI.Sprite.from`. Obiekty `Sprite` to podstawowe elementy graficzne w PixiJS, które możemy dowolnie pozycjonować, skalować i animować na scenie.

Kolejnym krokiem jest ustawienie pozycji gracza na ekranie. Umieść go na środku szerokości ekranu, co osiągniesz, dzieląc szerokość płótna przez dwa i przypisując tę wartość do współrzędnej x gracza. Następnie ustaw gracza tuż nad dolną krawędzią ekranu, odejmując wysokość jego postaci i 10 pikseli marginesu od wysokości płótna i przypisując to do współrzędnej y.

Dostosuj skalę gracza, aby był dobrze widoczny na ekranie. Użyj do tego metody `scale.set`, aby powiększyć jego rozmiar trzykrotnie w obu kierunkach - zarówno poziomym, jak i pionowym. Dzięki temu postać będzie wystarczająco duża, aby była łatwo rozpoznawalna podczas rozgrywki.

Ustaw też punkt obrotu gracza na środek jego postaci, używając metody `anchor.set(0.5)`. Dzięki temu wszelkie obracanie i skalowanie postaci będzie odbywać się względem jej środka, co jest szczególnie istotne w przypadku animacji i interakcji z obiektami w grze.

Na końcu, dodaj postać gracza do sceny gry za pomocą `app.stage.addChild(player)`. W ten sposób nasz bohater pojawi się na ekranie i jest gotowy do dalszych interakcji w grze.

[PREZENTACJA STANU GRY]

---

### Slajd 2: Prawa autorskie

**Opis slajdu**:

- Tytuł: "Prawa autorskie w tworzeniu gier i aplikacji"
- Treść:
  - Logotypy licencji?

**Narracja**:
"Przy tworzeniu gier i aplikacji, ważne jest, aby pamiętać o przestrzeganiu praw autorskich oraz licencji dotyczących używanych materiałów. Korzystanie z cudzych zasobów, takich jak grafiki, dźwięki czy tekstury, wymaga przestrzegania licencji, które mogą określać sposób, w jaki można używać, modyfikować i udostępniać te materiały.

Warto zwrócić uwagę na otwarte licencje, które mogą ułatwić proces twórczy. Jednym z przykładów jest licencja Creative Commons Zero (CC0). Licencja ta pozwala na korzystanie z materiałów w sposób całkowicie wolny – możesz je używać, modyfikować i rozpowszechniać, bez obaw o naruszenie praw autorskich. Jest to szczególnie przydatne dla twórców gier i aplikacji, szukających darmowych zasobów, które mogą legalnie wykorzystać w swoich projektach.

Istnieje wiele serwisów internetowych, które oferują materiały objęte licencjami typu CC0 oraz innymi otwartymi licencjami. Jednym z takich serwisów jest OpenGameArt. Na tej stronie znajdziesz bogaty zbiór darmowych grafik, dźwięków i innych zasobów, które możesz wykorzystać w swoich projektach, oszczędzając czas i środki, a także unikając problemów związanych z licencjami. Materiały używane w tej grze pochodzą właśnie z tej strony i są wykorzystywane na licencji CC0.

Pamiętaj, aby zawsze sprawdzać warunki licencji i respektować prawa twórców. Korzystając z materiałów zgodnie z ich licencjami, wspierasz kreatywność w społeczności i zapewniasz sobie spokój, że Twoje projekty są zgodne z prawem."

---

### Nagranie 2b: Tworzenie gry od początku do końca [kontynuacja]

**Opis nagrania**:
- Implementacja gry krok po kroku, a w wyznaczonych momentach zaprezentowanie obecnego stanu gry w przeglądarce (uruchomiona w tle w Live Server). Fragmenty pomiędzy prezentacjami stanu gry odpowiadają kolejnym commitom na branchu `gra`.

**Narracja**:
"Dodaj teraz tło, analogicznie do tekstury gracza: załaduj tło i ustaw tryb skalowania, a następnie stwórz obiekt `Sprite`. Następnie, aby tło idealnie wypełniało cały obszar gry, ustaw jego szerokość na szerokość płótna, czyli okna przeglądarki, oraz wysokość na pełną wysokość ekranu. Dodaj tło do sceny gry.

[PREZENTACJA STANU GRY]

Dodaj teraz podstawowe sterowania postacią gracza. Zacznij od ustawienia początkowej prędkości gracza na wartość zero, co oznacza, że na początku gry postać nie porusza się w żadnym kierunku.

Aby umożliwić graczowi kontrolowanie postaci, dodaj nasłuch na zdarzenia klawiatury, które będą reagować na naciśnięcia i puszczenie klawiszy strzałek. Pierwszy nasłuch to `keydown`, który uruchamia się w momencie wciśnięcia klawisza. Jeżeli gracz naciśnie strzałkę w lewo, prędkość gracza zostanie ustawiona na wartość ujemną, co spowoduje, że postać zacznie poruszać się w lewo. Analogicznie, jeżeli gracz naciśnie strzałkę w prawo, prędkość zostanie ustawiona na wartość dodatnią, co sprawi, że postać będzie poruszać się w prawo.

Kolejny nasłuch, `keyup`, działa wtedy, gdy gracz przestaje naciskać klawisz. Jeśli gracz puści strzałkę w lewo lub w prawo, prędkość gracza zostanie zresetowana do zera, co zatrzyma ruch postaci.

Aby zapewnić płynność ruchu, użyj mechanizmu `app.ticker`, który uruchamia się w każdej klatce animacji. W każdej klatce aktualizuj pozycję gracza, dodając do jego współrzędnej poziomej wartość jego prędkości. Dzięki temu gracz będzie poruszał się w zadanym kierunku z odpowiednią prędkością.

Na koniec, aby zapobiec sytuacji, w której postać gracza wychodzi poza ekran, dodaj następujące ograniczenie. Zastosuj funkcje `Math.max` i `Math.min`, które kontrolują, czy postać nie przekroczyła granic ekranu. Jeśli gracz zbliży się do lewej lub prawej krawędzi, jego pozycja zostanie odpowiednio skorygowana, aby nie wyszedł poza widoczny obszar gry.

[PREZENTACJA STANU GRY]

Wprowadźmy mechanizm generowania spadających jabłek, które gracz będzie musiał złapać. Podobnie jak poprzednio, załaduj teksturę obiektu. Następnie stwórz tablicę `objects`, która będzie przechowywać wszystkie aktualnie spadające obiekty w grze.

Główna część kodu to funkcja `spawnObject`, która odpowiada za tworzenie nowych spadających obiektów. Na początku w tej funkcji stwórz nowy obiekt typu `Sprite` na bazie załadowanej wcześniej tekstury. Ustaw jego początkową pozycję poziomą na losową wartość w obrębie szerokości ekranu, ale tak, aby nie wykraczał on poza granice. Pozycja pionowa jest ustawiona tuż nad górną krawędzią ekranu.

Prędkość pionowa (`vy`) jest ustalona na wartość 1, co oznacza, że obiekt będzie się poruszał w dół ze stałą prędkością. Dodatkowo obiekt jest skalowany, aby był nieco większy niż jego pierwotny rozmiar.

Następnie dodaj ten nowo utworzony obiekt do sceny oraz do tablicy `objects`, dzięki czemu będziesz mogła zarządzać jego ruchem oraz interakcjami w kolejnych krokach. Ostatnim elementem jest wywołanie funkcji `spawnObject`, która inicjuje cały proces. Funkcja ta będzie wywoływać samą siebie z określoną częstotliwością co 3 sekundy.

[PREZENTACJA STANU GRY]

W tej chwili jabłka jeszcze nie spadają z góry ekranu, dlatego w tym momencie skupimy się na aktualizowaniu pozycji spadających obiektów. Najpierw dodaj funkcję, która będzie regularnie wywoływana, dzięki mechanizmowi `ticker` wbudowanemu w PixiJS. Funkcja ta jest kluczowa, ponieważ umożliwia na aktualizowanie stanu gry w każdym klatce animacji.

Główna część funkcji to pętla, która przechodzi przez każdy obiekty w tablicy `objects`. Dla każdego z tych obiektów zwiększ jego współrzędną pionową y o wartość `vy`, co sprawia, że obiekt będzie przesuwał się w dół ekranu z ustaloną wcześniej prędkością.

Kolejnym krokiem jest sprawdzenie, czy obiekt nie wyszedł poza dolną krawędź ekranu. Jeśli tak się stanie, obiekt zostaje usunięty zarówno ze sceny, jak i z tablicy objects. Wykorzystujemy do tego metodę `getBounds()`, która zwraca aktualne granice obiektu. Sprawdź, czy dolna krawędź obiektu (`maxY`) znajduje się poniżej wysokości ekranu. Jeśli tak, usuń obiekt ze sceny za pomocą `removeChild`, a następnie zaktualizuj tablicę `objects`, usuwając z niej referencję do tego obiektu. Ten proces jest istotny dla optymalizacji gry, ponieważ zapobiega nadmiernemu obciążeniu pamięci poprzez usuwanie obiektów, które nie są już widoczne i nie mają wpływu na rozgrywkę.

[PREZENTACJA STANU GRY]

Zaimplementuj teraz funkcję odpowiedzialną za wykrywanie kolizji między graczem, a spadającymi obiektami. Stwórz funkcję `hitTestRectangle`, która przyjmuje dwa argumenty: gracza oraz obiekt. Wewnątrz tej funkcji najpierw pobierz granice obu elementów na ekranie, czyli obszary, w których się one znajdują. Granice te są reprezentowane przez współrzędne krawędzi prostokątów otaczających te elementy.

Następnie sprawdź, czy obiekt znajduje się całkowicie nad lub pod graczem, poprzez porównanie współrzędnych pionowych ich granic. Jeśli obiekt nie nakłada się na gracza w pionie, zwróć wartość `false`, co oznacza brak kolizji.

Jeśli jednak obiekt znajduje się na tej samej wysokości co gracz, przejdź do sprawdzenia współrzędnych poziomych. Jeśli granice obiektu i gracza przecinają się w poziomie, mamy do czynienia z kolizją, a funkcja zwraca `true`.

Następnie, w funkcji odpowiedzialnej za aktualizację pozycji obiektów, dodaj dodatkową logikę do wykrywania kolizji. Dla każdego obiektu, który spada w dół, najpierw dokonaj aktualizacji jego pozycji. Następnie, używając funkcji `hitTestRectangle`, sprawdź, czy obiekt zderzył się z graczem. Jeśli kolizja zostanie wykryta, natychmiast usuń obiekt ze sceny oraz z tablicy `objects`.

[PREZENTACJA STANU GRY]

Teraz dodaj elementy informujące o wyniku, życiach oraz końcu gry. Stwórz trzy elementy tekstowe przy użyciu PIXI. Pierwszy z nich to tekst wyniku, który wyświetla aktualny wynik w lewym górnym rogu ekranu. Drugi to tekst liczby żyć, który umieszczamy w prawym górnym rogu. Ostatni element to główny tekst, który będzie wyświetlał komunikaty końcowe i umieszczamy go w centrum ekranu.

Stworzone elementy tekstowe są aktualizowane dynamicznie w trakcie gry. Zacznij od dodania logiki do zwiększania wyniku. W momencie, gdy zostanie wykryta kolizja między graczem a obiektem, dodaj do wyniku 10 punktów. Tekst wyświetlający wynik jest aktualizowany, aby odzwierciedlić nową wartość punktacji. To sprawia, że gra staje się bardziej dynamiczna i nagradza gracza za udane interakcje. Jeśli obiekt spadnie poza ekran, zmniejsz liczbę żyć gracza o 1 i zaktualizuj tekst wyświetlający liczbę pozostałych żyć. Kiedy liczba żyć spadnie do 0, oznacza to koniec gry. Wtedy wyświetl na środku ekranu komunikat 'Koniec gry!', wyśrodkowując tekst zarówno w pionie, jak i w poziomie. Kiedy gra się skończy powinnaś zatrzymać animację i generator obiektów, aby uniknąć dalszego tworzenia nowych przeszkód.

[PREZENTACJA STANU GRY]

Teraz dodaj elementy dźwiękowe, które wzbogacą Twoją grę i uczynią ją bardziej angażującą.

Zacznij od załadowania dźwięków, które będą odtwarzane w różnych sytuacjach w grze. Użyj funkcji `PIXI.sound.add` do dodania trzech różnych dźwięków. Pierwszy z nich to dźwięk przechwycenia obiektu. Drugi to dźwięk upadku obiektu, a ostatni to dźwięk końca gry. Następnie wykorzystaj metodę `PIXI.sound.play` w odpowiednich miejscach, aby odtworzyć dźwięki.

[PREZENTACJA STANU GRY]

Teraz dodaj parametry do Twojej gry oraz wprowadź mechanizm zwiększania trudności w trakcie gry. Zdefiniuj kilka podstawowych parametrów, które będą opisywać prędkość gracza, prędkość obiektów, liczbę punktów uzyskanych za złapanie obiektu, częstotliwość generowania obiektów. Dodaj również maksymalną prędkość gracza i minimalną częstotliwość generowania obiektów.

Zmień sposób ustawiania prędkości gracza. Poprzednio przypisywałaś prędkość bezpośrednio w obsłudze zdarzeń klawiatury, teraz dostosowujesz prędkość gracza do zdefiniowanego parametru `playerSpeed`, co pozwala na łatwiejszą modyfikację i dostosowanie prędkości gracza.

W funkcji generowania obiektów `spawnObject`, dodaj losowe wartości do prędkości obiektów, co sprawia, że każda instancja obiektu może mieć inną prędkość, co zwiększa dynamikę gry. Zmień również częstotliwość generowania obiektów z 3000 milisekund na wartość określoną przez `objectSpawnRate`.

Wprowadź teraz mechanizm zwiększania trudności, który jest uruchamiany co 5 sekund. W funkcji `updateDifficulty` wprowadź stopniowe zwiększanie prędkości gracza, aż do wartości określonej przez `maxPlayerSpeed`. Analogicznie, zwiększ prędkość obiektów oraz liczbę punktów zdobywanych za złapanie obiektów. Dodatkowo zmniejsz `objectSpawnRate`, co oznacza, że obiekty będą generowane coraz szybciej, ale nie szybciej niż określona minimalna wartość `objectMinSpawnRate`.

Podczas aktualizacji pozycji obiektów dodałaś możliwość zwiększania wyniku o wartość `objectScore` za każdy złapany obiekt. Po zakończeniu gry, zatrzymaj również zwiększanie trudności rozgrywki.

[PREZENTACJA STANU GRY]

Gratulacje! Ukończyłaś właśnie implementację swojej gry! Teraz masz w pełni funkcjonalną grę, w którą zaimplementowałaś sterowanie graczem, łapanie spadających obiektów i radzenie sobie z rosnącą trudnością.

Ale to nie koniec! Aby dalej rozwijać swoje umiejętności i uczynić grę bardziej atrakcyjną, zachęcamy Cię do wykonania zadań domowych, które będą przedstawione za chwilę. Ćwicząc je, będziesz mogła dodać nowe funkcje, poprawić istniejące mechanizmy i udoskonalić swoją grę. To świetna okazja, aby eksperymentować i nauczyć się jeszcze więcej o programowaniu gier w języku JavaScript.

Życzymy powodzenia i świetnej zabawy przy rozbudowie gry!"

---

### Slajd 3: Zadanie domowe 5.1

**Opis slajdu**:

- Tytuł: "Zadanie domowe 5.1"
- Treść:
  - Zmień teksturę gracza w zależności od ruchu (twarz w lewo lub w prawo). Podpowiedź: obiekt można odbić lustrzanie przez ustawienie ujemnej skali.

**Narracja**:
"W zadaniu domowym 5.1 będziesz zmieniać teksturę gracza w zależności od kierunku ruchu w grze stworzonej przy użyciu biblioteki PIXI.js. Gdy gracz porusza się w lewo, jego twarz powinna być zwrócona w lewo, a gdy porusza się w prawo, twarz powinna być zwrócona w prawo. Aby to osiągnąć, możesz użyć właściwości skali obiektu, ustawiając ujemną skalę dla odbicia lustrzanego. To zadanie nauczy Cię podstaw manipulacji obiektami graficznymi w PIXI.js."

---

### Slajd 4: Zadanie domowe 5.2

**Opis slajdu**:

- Tytuł: "Zadanie domowe 5.2"
- Treść:
  - Dodaj wiatr - spraw, aby jabłka spadały krzywo (pamiętaj, że jabłka nie mogą wyjść poza ekran!)

**Narracja**:
"W zadaniu domowym 5.2 dodasz element wiatru do naszej gry. Sprawisz, że jabłka będą spadały krzywo zamiast pionowo w dół. To doda dynamiki do rozgrywki. Ważne jest, aby jabłka nie wychodziły poza ekran, więc będziesz musiała dostosować ich trajektorię spadania. Istotne jest tutaj stworzenie odpowiednich instrukcji warunkowych oraz wykrywanie zetknięcia z krawędzią ekranu."

---

### Slajd 5: Zadanie domowe 5.3

**Opis slajdu**:

- Tytuł: "Zadanie domowe 5.3"
- Treść:
  - Dodaj restart (naciśnij spację na początku i po zakończeniu gry).

**Narracja**:
"Dodasz teraz funkcjonalność restartu gry. Użytkownik będzie mógł nacisnąć spację, aby rozpocząć grę od nowa zarówno na początku, jak i po jej zakończeniu. Gra nie powinna restartować się w trakcie rozgrywki. Wykorzystaj wiedzę na temat obsługi zdarzeń klawiatury i spróbuj resetować stan gry, aby umożliwić jej ponowne uruchomienie."

---

### Slajd 6: Zadanie domowe 5.4

**Opis slajdu**:

- Tytuł: "Zadanie domowe 5.4"
- Treść:
  - Dodaj tablicę wyników (pokaż 3 najlepsze wyniki na ekranie końca gry).

**Narracja**:
"Kontynuując poprzednie zadanie, w zadaniu 5.4 dodasz tablicę wyników do Twojej gry. Dzięki Twoim ustawieniom, na ekranie końca gry wyświetlą się trzy najlepsze wyniki, które gracze osiągnęli. Dzięki temu Twoja gra stanie się bardziej angażująca i konkurencyjna."

---

### Slajd 7: Podsumowanie

**Opis slajdu**:
- Tytuł: "Zdobyte umiejętności"
- Treść:
  - 1. Przygotowanie środowiska pracy
  - 2. Podstawy języka JavaScript
    - Zmienne
    - Operatory
    - Funkcje
    - Tablice
    - Obiekty
    - Instrukcje warunkowe
    - Pętle
  - 3. Manipulacja strukturą DOM
    - Selekcja elementów
    - Modyfikacja elementów
    - Obsługa zdarzeń
  - 4. Tworzenie gry
    - Tworzenie postaci i obiektów
    - Interakcja z użytkownikiem
    - Implementacja ruchu
    - Wykrywanie kolizji
    - Dodawanie dźwięków
    - Zwiększanie trudności

**Narracja**:
"Podsumujmy teraz wspólnie spędzony czas i wymieńmy umiejętności, które zyskałaś uczestnicząc w tym kursie.

Rozpoczęliśmy od przygotowania środowiska pracy, instalacji i konfiguracji edytora oraz nauki korzystania z systemu kontroli wersji. W części pierwszej skupiliśmy się na podstawach języka JavaScript, takich jak zmienne, operatory, funkcje, tablice i obiekty, a także nauczyliśmy się, jak manipulować strukturą DOM naszej strony.

Druga część kursu wprowadziła Cię w świat tworzenia gier przy użyciu biblioteki PixiJS. Dowiedziałaś się, jak tworzyć postacie i obiekty w grze oraz jak implementować funkcje takie jak interakcja z użytkownikiem, ruch, kolizje, dźwięki i zmieniająca się trudność. Stworzyliśmy wspólnie pełnopraną grę w przeglądarce!"

---

### Slajd 8: Zakończenie

**Opis slajdu**:
- Tytuł: "Koniec części 2"

**Narracja**:
"Dotarłaś w tym momencie do końca całego kursu. Mamy nadzieję, że zdobyta wiedza zainspiruje Cię do eksplorowania tajników języka JavaScript, a także doda odwagi do udowadniania, że środowisko informatyczne potrzebuje osób takich jak Ty - gotowych i otwartych na wiedzę! Jednocześnie zapraszamy Cię do dalszej nauki i eksperymentowania z językiem JavaScript! Praktyka czyni mistrza!"

---
