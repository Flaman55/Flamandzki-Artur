/* ═══════════════════════════════════════════════════════════════
   Portfolio — Artur Flamandzki
   locales/pl.js  ·  Polskie tłumaczenia
   ═══════════════════════════════════════════════════════════════ */
(function () {
  window.i18nData = window.i18nData || {};
  window.i18nData['pl'] = {
    _langName: 'PL',

    page: {
      title: 'Artur Flamandzki — Portfolio R&D',
      description: '22 projekty — elektronika embedded, firmware AVR, Matematyka Relacyjna, FochBot AI.'
    },

    nav: {
      filozofia:   'Filozofia',
      ewolucja:    'Ewolucja',
      mr:          'MR / Teoria',
      projekty:    'Projekty',
      casestudies: 'Case Studies',
      podsumowanie:'Podsumowanie'
    },

    hero: {
      title: 'Systems & Core Algorithms Architect',
      quote: 'Projektuję architekturę systemów technicznych na styku sprzętu, oprogramowania i zaawansowanej algorytmiki.',
      b1: '16 lat praktyki w R&D',
      b2: 'Produkty zwalidowane rynkowo',
      b3: 'Autorskie frameworki optymalizacyjne',
      b4: 'Matematyka Relacyjna',
      b5: 'AI / Embedded'
    },

    s1: {
      title: 'Filozofia projektowa',
      sub:   'Obserwacja po fakcie: każde własne narzędzie wymusza pełne zrozumienie problemu, który ma rozwiązać.',
      c1: {
        title: '⚙️ Budowa własnych narzędzi',
        text:  'Terminal COM do debugowania sterownika pieca? Napisany własny, bo dostępne terminale nie miały jednoczesnego multi-formatu danych i przycisku wyzwalającego bootloader jednym kliknięciem.'
      },
      c2: {
        title: '🔢 Precyzja wymaga pomiaru',
        text:  'Kalkulator dzielnika napięcia z trybem ADC? Powstał, bo potrzeba było dobrać R1/R2 i natychmiast zobaczyć rozdzielczość jednego bitu przy zadanej precyzji — żaden gotowy kalkulator online tego nie pokazał.'
      },
      c3: {
        title: '🧩 Od koncepcji do efektu końcowego',
        text:  'Hardware, firmware, aplikacje PC, narzędzia produkcyjne, systemy numeracji seryjnej. Opisane tu zarówno produkty sprzedane w setkach sztuk, jak i projekty jednorazowe — każdy z własną lekcją inżynierską.'
      },
      c4: {
        title: '🧬 Teoria wynika z praktyki',
        text:  'Matematyka Relacyjna nie powstała w akademiku — sterownik pieca z 2016 roku okazał się empirycznym dowodem ARR na dekadę przed sformalizowaniem teorii. Sprzętowe obserwacje i abstrakcja matematyczna zbiegają się w jednym miejscu.'
      }
    },

    s2: {
      title: 'Ewolucja — od prototypu do teorii',
      sub:   'Chronologia kluczowych przełomów. Obie ścieżki — hardware embedded i matematyka relacyjna — zbiegają się w latach 2022–2026.',
      t1: {
        period: '2004 – 2006',
        title:  'Liceum — pierwsze projekty z potrzeby',
        text:   'Przenośny głośnik bateryjny (#02). Punkt startowy — elektronika jako hobby, nie zawód.'
      },
      t2: {
        period: '2009 – 2011',
        title:  'APH Elektra — doradztwo techniczne',
        text:   'Analiza rynku komponentów elektronicznych, dobór zamienników, baza dla optymalizacji BOM w przyszłych projektach produkcyjnych.'
      },
      t3: {
        period: '2011 – 2013',
        title:  'Pierwsze produkty komercyjne i systemy pomiarowe',
        text:   'Woltomierz samochodowy WST/WSTK (150 szt., #04), System pomiaru czasu AutoMobilClub Łódź (#11), Kalibrator wtryskiwaczy LPG (#03), Termometr pieca (#10).'
      },
      t4: {
        period: '2012 – 2017',
        title:  'DELFI Racing — rodzina instrumentów motorsportowych',
        text:   'System Choinka RT1/RT2, aparatura pomiarowa DN03 — kompletna infrastruktura elektroniczna dla wyścigów (#05).'
      },
      t5: {
        period: '2013 – 2019',
        title:  'Laskomex — R&D domofonów, rola techniczna i zarządcza',
        text:   'Seria LX-DK (500 szt., 7 lat sprzedaży, #06), LX-GT01 generator tabel kodów (#07), LX-EMI01 edytor EEPROM (#08). Awans dwukrotnie w ciągu 6 miesięcy; oszczędności serwisowe ~50 000 PLN/rok.'
      },
      t6: {
        period: '2016 – 2022',
        title:  'Sterownik pieca CO — 5,5 roku w środowisku produkcyjnym',
        text:   'Własne PCB, ATmega328P, sterowanie fazowe, delta T zamiast progów histerezowych (#01). ~11 mln rekordów pomiarowych, 79+ wersji firmware, baza dla jednej pracy inżynierskiej i dwóch magisterskich.'
      },
      t7: {
        period: '2019 – obecnie',
        title:  'Commerzbank — środowisko korporacyjne FinTech',
        text:   'Środowisko korporacyjne FinTech (Java / React / C#, COREP/FINREP). Testy jednostkowe i integracyjne, Docker, pipeline CI/CD — narzędzia korporacyjne i big tech.'
      },
      t8: {
        period: '2024 – obecnie',
        title:  'Smart Home, MR, TrueSynth, FochBot — konwergencja obu ścieżek',
        text:   'Inteligentny dom (Home Assistant, #22), Resona trajektorowy model (#18), Matematyka Relacyjna teoria (#17), MR-AI framework (#20), FochBot asystent AI (#19), TrueSynth trygonometria embedded (#16), HPC symulacja algorytmu Shora (#21).'
      },
      fase1: {
        label: 'Faza 1 — Hardware jako język',
        title: 'Embedded · bare-metal · produkty w terenie',
        text:  'System to nie kod — to ograniczenia zasobów, czas rzeczywisty, fizyczna rzeczywistość. Nauka, że każdy bajt i każdy cykl jest zasobem, który można zmarnować albo wykorzystać.'
      },
      fase2: {
        label: 'Faza 2 — Skala jako nowy wymiar',
        title: '7 lat w bankowości · 11 mln rekordów · FINREP',
        text:  'Te same zasady projektowania systemów — tylko „RAM” to teraz baza danych, a „ISR” to okno transakcyjne. Integralność danych pod presją regulacyjną uczy myśleć w wolumenach.'
      },
      fase3: {
        label: 'Faza 3 — Algorytm jako produkt',
        title: 'TrueSynth · Resona · MR-AI · teoria liczb',
        text:  'Jeżeli rozumiesz ograniczenia sprzętowe i skalę enterprise i matematyczny fundament — możesz projektować systemy, które inni uznają za niemożliwe.'
      },
      fazepunchline: 'Hardware nauczył mnie myśleć w cyklach. Bank nauczył myśleć w wolumenach. Matematyka nauczyła myśleć w strukturach. Projektuję na przecięciu wszystkich trzech.',
      note: '<strong>Dwie ścieżki:</strong> hardware embedded (projekty #01–#15) i matematyka relacyjna (#16–#21) rozwijały się równolegle przez lata. W 2022–2026 <strong>zbiegają się w jedną</strong>: MR-AI, TrueSynth i Resona to miejsca, gdzie fizyka mikrokontrolerów spotyka teorię liczb.'
    },

    s3: {
      title: 'Matematyka Relacyjna (MR)',
      sub:   'Hierarchia: MR jako teoria fundamentalna (#17) → pięć frameworków analitycznych → MR-AI (#20) jako framework łączący je wszystkie w zastosowaniach AI.',
      theory: {
        title: 'MR — Teoria Fundamentalna (projekt #17)',
        text:  'Matematyka Relacyjna (MR) to autorska teoria matematyczna opisująca strukturę liczb pierwszych przez pryzmat relacji rytmicznych, partycji i modeli rotacyjnych. Obejmuje dowód hiperboliczny twierdzenia Bertranda–Czebyszewa, struktury CRT, Q (semigrupy) i model rotacyjny liczb pierwszych. Opublikowana jako 6 preprintów naukowych na Zenodo. MR dostarcza formalnego aparatu matematycznego dla pięciu frameworków analitycznych.'
      },
      arr: {
        tag:     'ARR',
        title:   'Analiza Rytmiczna i Rezonansowa',
        text:    'Framework kontroli rytmu — identyfikuje wzorce periodyczne w sekwencjach i mierzy ich „rezonans". Zastosowanie: podejmowanie decyzji na podstawie kierunku zmian (↑ / → / ↓) zamiast wartości bezwzględnych — szczególnie przydatne na urządzeniach edge/RT z ograniczonymi zasobami.',
        mandate: 'Mandat: pomiar i kontrola rytmu sekwencji.'
      },
      cl: {
        tag:     'MR-CL',
        title:   'Rytmiczne Grupowanie (Clustering)',
        text:    'Wykrywa i segmentuje klastry o podobnych właściwościach rytmicznych. Stosowany do analizy lokalnej gęstości i wykrywania anomalii struktury w zbiorach danych opartych na MR.',
        mandate: 'Mandat: segmentacja i grupowanie struktur rytmicznych.'
      },
      kl: {
        tag:     'MR-KL',
        title:   'Rytmiczna Klasyfikacja (Classification)',
        text:    'Klasyfikuje elementy według kategorii rytmicznych zdefiniowanych w MR. Buduje taksonomię wzorców i pozwala na predykcję przynależności kategorialnej bez wartości bezwzględnych.',
        mandate: 'Mandat: typologia i klasyfikacja wzorców MR.'
      },
      rg: {
        tag:     'MR-RG',
        title:   'Rytmiczna Regresja (Regression)',
        text:    'Modeluje ilościowe zależności między parametrami rytmicznymi. Umożliwia ekstrapolację i predykcję numeryczną na bazie aparatu regresji MR — uzupełnienie klasycznej regresji o wymiar rytmiczny.',
        mandate: 'Mandat: predykcja i modelowanie ilościowe.'
      },
      rpp: {
        tag:     'RPP',
        title:   'Relacyjna Przestrzeń Przesunięć',
        text:    'Definiuje wielowymiarową przestrzeń, w której każdy element zajmuje pozycję wyznaczoną przez jego relacje przesunięcia. Formalizuje geometrię struktury MR i dostarcza aparatu przestrzennego dla pozostałych frameworków.',
        mandate: 'Mandat: geometria i przestrzeń relacyjna MR.'
      },
      ai: {
        label: 'Framework aplikacyjny AI — projekt #20',
        title: 'MR-AI — Framework Rytmiczny dla sztucznej inteligencji',
        text:  'MR-AI łączy wszystkie pięć frameworków (ARR, MR-CL, MR-KL, MR-RG, RPP) w spójną architekturę decyzyjną dla systemów AI — <strong>sterowanie bez wartości bezwzględnych</strong>. Zamiast porównywać liczby, system operuje na rytmie zmian i relacjach przestrzennych. Konkretyzmacją MR-AI jest <strong>FochBot</strong> (#19): autonomiczny asystent AI z dwuwarstwową architekturą kognitywną (mapa pamięci ChromaDB + kontroler wielomodelowy), eliminujący rekomputację znanych wniosków — token cost = 0 dla lokalnych zadań.'
      }
    },

    s4: {
      title: 'Wszystkie projekty',
      sub:   '22 projekty, 2004–2026. Kolor lewej krawędzi oznacza domenę.',
      leg: {
        all:        'Wszystkie',
        embedded:   'Hardware / Embedded',
        commercial: 'Komercja / Zlecenia',
        own:        'Własne systemy',
        math:       'Matematyka R&D',
        ai:         'AI / Software'
      },
      col: {
        num:     '#',
        project: 'Projekt',
        tech:    'Kontekst / Technologia',
        result:  'Wynik / Zasięg'
      },
      p01: {
        name:   'Automatyczny Sterownik Pieca Centralnego Ogrzewania',
        tag:    'Własny system · 2016–2022',
        tech:   'AVR Assembly, Phase-Angle Control (triak 230 V), ATmega328P, DS18B20, UART→USB, MS Access (.mdb), OneDrive',
        result: '5,5 roku w środowisku produkcyjnym (XI 2016 – VII 2022). ~11 mln rekordów pomiarowych, 61 baz danych MDB (1,65 GB), 79+ wersji firmware. Baza jednej pracy inżynierskiej i dwóch magisterskich, ocena 5/5.'
      },
      p02: {
        name:   'Przenośny Głośnik Bateryjny',
        tag:    'Projekt historyczny · liceum elektroniczne, 2004',
        tech:   'Analogowa elektronika audio, akumulatory, wzmacniacz',
        result: 'Punkt startowy — pierwszy projekt z potrzeby za czasów liceum. Ciekawostka historyczna dokumentująca początek ścieżki technicznej.'
      },
      p03: {
        name:   'Automatyczny Kalibrator Wtryskiwaczy LPG',
        tag:    'Zlecenie komercyjne · 2010–2011',
        tech:   'ATmega32, silniki krokowe, pomiar czasu otwarcia cewki',
        result: 'Rozrzut kalibracji: z >0,3 mm do <0,01 mm przez zamknięcie pętli sprzężenia na fizycznym zdarzeniu otwarcia cewki zamiast geometrii suwmiarki.'
      },
      p04: {
        name:   'Woltomierz Samochodowy WST / WSTK',
        tag:    'Produkt komercyjny · 2011–2013',
        tech:   'ATmega, HD44780, DS18B20 (×2), FSM ładowania akumulatora, podświetlenie RGB (8 kolorów)',
        result: '<strong>WST</strong> (auto): 150 szt. sprzedanych. <strong>WSTK</strong> (motocykl): ~15 szt. Demo klienta: <a href="https://www.youtube.com/watch?v=LHdiPH1gRtQ" target="_blank" rel="noopener">▶ YouTube</a>'
      },
      p05: {
        name:   'System DELFI Racing — Pomiar Czasu i Aparatura Motorsportowa',
        tag:    'Własny system · 2012–2017',
        tech:   'Choinka RT1/RT2, Aparatura DN03, ATtiny/ATmega, RS232, RS485, RTC, MMC, detekcja fałszywego startu',
        result: 'Kompletna infrastruktura elektroniczna dla wyścigów. Dwa niezależne timery w jednym ISR (czas okrążenia 0,01 s + czas reakcji kierowcy 0,001 s). Poprzednik: #11. <a href="https://dzienniklodzki.pl/wyscigi-na-14-mili-w-lodzi-wystartowalo-kilkudziesieciu-kierowcow-zdjecia-film/ar/6459502" target="_blank" rel="noopener">Artykuł Dziennik Łódzki</a>'
      },
      p06: {
        name:   'Seria LX-DK — Moduły Resetowania Haseł Administratora Laskomex',
        tag:    'Komercja · Laskomex · 2015–2022',
        tech:   'DK02 + DK03, ATtiny, protokół UART własnościowy, reverse-engineering',
        result: '~500 szt. sprzedanych przez 7 lat (w tym 3 lata po odejściu z firmy). Rozwiązanie flash-shortage: moduł sprzętowy warstwę wyżej zamiast modyfikacji firmware.'
      },
      p07: {
        name:   'LX-GT01 — Moduł Generatora Tabel Kodów Laskomex',
        tag:    'Komercja · Laskomex · 2019–2020',
        tech:   'CRC8, ELF binary patching, aplikacja PC (VB.NET)',
        result: 'Generator tabel kodów do produkcji seryjnej. ELF patching — modyfikacja binarnych tabel danych bez rekompilacji firmware.'
      },
      p08: {
        name:   'LX-EMI01 — Moduł Edytora Pamięci EEPROM Laskomex / Proel',
        tag:    'Komercja · Laskomex/Proel · 2018–2020',
        tech:   'Edytor EEPROM, reverse-engineering protokołu komunikacyjnego, I²C/SPI',
        result: 'Narzędzie do odczytu i zapisu pamięci EEPROM urządzeń bez dostępu do dokumentacji — reverse-engineering protokołu od zera.'
      },
      p09: {
        name:   'Algorytm Szukania Dzielników Liczb na ATmega8',
        tag:    'Embedded · algorytmika bare-metal, 2013',
        tech:   'AVR, ATmega8, optymalizacja dla 8-bit MCU',
        result: 'Implementacja faktoryzacji na mikrokontrolerze 8-bit. Wczesny zalążek zainteresowań teorią liczb — bezpośredni poprzednik badań MR.'
      },
      p10: {
        name:   'Termometr Pieca — Zdalny Monitor Kotłowni',
        tag:    'Embedded · IoT przed erą IoT, 2013',
        tech:   'ATmega8, DS18B20, ambient display (widzialny z drugiego końca kotłowni), alarm, 2013',
        result: 'Zdalny monitoring temperatury pieca z wyświetlaczem ambientowym. Wzorzec file-based IoT gateway przez OneDrive — wdrożony zanim MQTT/Home Assistant stały się powszechne.'
      },
      p11: {
        name:   'System Pomiaru Czasu AutoMobilClub Łódź',
        tag:    'Komercja · wyścigi 1/4 mili, 2011',
        tech:   'ATtiny2313, BASCOM, RS232, Timer1, software UART, detekcja falstartu, Watchdog reset',
        result: 'System pomiaru czasu dostarczony i użyty przez AutoMobilClub Łódź. Dwa niezależne timery w jednym ISR, czas przejazdu 0,01 s + czas reakcji 0,001 s. Bezpośredni poprzednik projektu #05 (DELFI Racing RT1/RT2).'
      },
      p12: {
        name:   'Konwerter USB-RS232 z wyjściem TTL — własna płytka PCB',
        tag:    'Embedded · narzędzie developerskie, 2015',
        tech:   'FT232RL, MAX3243, Eagle PCB, Gerbery, 48×31 mm',
        result: 'Kompaktowy konwerter USB-UART/RS232 z wyjściem TTL zaprojektowany pod konkretne potrzeby debugowania. Własne PCB 48×31 mm.'
      },
      p13: {
        name:   'Sterownik Rozsiewacza BAGRAMET',
        tag:    'Zlecenie komercyjne · rolnictwo, 2012',
        tech:   '2 PCB (sterownik + panel), AVR, Bytów, kilkanaście szt.',
        result: 'Dedykowany sterownik rozsiewacza nawozów. Projekt zlecony, produkcja mała seria (kilkanaście szt.).'
      },
      p14: {
        name:   'RGB LED Fun — Zabawka Dydaktyczna',
        tag:    'Własny projekt · CNC, 2021–2022',
        tech:   'ATtiny13A, 3 piny sterują RGB, software PWM, obudowa CNC',
        result: 'Interaktywna zabawka edukacyjna — 3 przyciski RGB, software PWM na ATtiny13A (brak sprzętowego PWM). Obudowa wyfrezowana na własnym CNC.'
      },
      p15: {
        name:   'Laser CO₂ — Infrastruktura i Układ Nadmuchu',
        tag:    'Własny system · 2020–obecnie',
        tech:   'CO₂ 50 W, elektrozawory, Ruida DSP, przekaźniki, chiller, własny air-assist',
        result: 'Zautomatyzowana linia produkcyjna do obróbki drewna. Własny air-assist, kalibracja kontrolera Ruida DSP. Produkcja i komercjalizacja >1000 wyrobów gotowych.'
      },
      p16: {
        name:   'TrueSynth — Biblioteka Trygonometryczna dla Embedded',
        tag:    'Matematyka R&D · Prime Engine, 2025–2026',
        tech:   'Prime Engine, Q31 Fixed-Point, Cortex-M0/M4F, FOC/DDS, ARM Assembly',
        result: 'Kąt jako ułamek oparty na liczbach pierwszych (Δ = k/p) — błąd aproksymacji ppb = 0. <strong>4,7× szybszy</strong> niż CMSIS-DSP Q31 bez FPU. Zero dryftu po 10⁹ krokach.'
      },
      p17: {
        name:   'Matematyka Relacyjna — Teoria Liczb',
        tag:    'Matematyka R&D · 2025–obecnie',
        tech:   'Bertrand–Czebyszew (dowód hiperboliczny), CRT, Q (semigrupy), partycje, model rotacyjny, Zenodo (6 preprintów)',
        result: 'Autorska teoria opisująca strukturę rytmiczną liczb pierwszych. 6 preprintów naukowych na Zenodo. Fundament dla frameworków ARR, MR-CL, MR-KL, MR-RG, RPP i projektu MR-AI (#20).'
      },
      p18: {
        name:   'Resona — Trajektorowy Model Obliczeniowy',
        tag:    'Matematyka R&D · 2025–obecnie',
        tech:   'Funkcja rezonansowa, własny język Resona, grafika funkcyjna, Python',
        result: 'Model obliczeniowy oparty na funkcjach rezonansowych — analiza trajektorii w przestrzeni MR. Własny język opisu modeli (Resona DSL).'
      },
      p19: {
        name:   'FochBot — Autonomiczny Asystent AI',
        tag:    'AI / Software · 2026',
        tech:   'FastAPI, mikrousługi, BCRYPT, ChromaDB, LangChain, multi-LLM routing (Claude/GPT/Gemini), ARR context-selection',
        result: 'Dwuwarstwowa architektura kognitywna: Warstwa A (mapa pamięci ChromaDB + ARR) + Warstwa B (kontroler wielomodelowy). Eliminacja rekomputacji → token cost = 0 dla lokalnych zadań.'
      },
      p20: {
        name:   'MR-AI — Framework Rytmiczny',
        tag:    'AI / Software · 2025–obecnie',
        tech:   'ARR + MR-KL + MR-CL + MR-RG + RPP, sterowanie bez wartości bezwzględnych, Python',
        result: 'Framework łączący wszystkie 5 modułów MR w architekturę decyzyjną dla AI. „Sterowanie bez wartości" — decyzje oparte wyłącznie na rytmie zmian i relacjach przestrzennych.'
      },
      p21: {
        name:   'HPC Faktoryzacja — Klasyczna Symulacja Algorytmu Shora',
        tag:    'Matematyka R&D · HPC, 2025–obecnie',
        tech:   'Python, NumPy, Numba JIT, mechanizm fazowy (klasyczna symulacja kwantowa)',
        result: 'Klasyczna (nie kwantowa) symulacja algorytmu Shora z użyciem mechanizmu fazowego MR. Badania granicy faktoryzacji na CPU z Numba JIT.'
      },
      p22: {
        name:   'Inteligentny Dom — Architektura Bezpieczeństwa i Automatyzacji',
        tag:    'Własny system · IoT, 2024–obecnie',
        tech:   'Home Assistant, YAML, REST API, mechaniczne interlocking (Power Isolation / Night Lockdown), hardware-integrated',
        result: 'Local-First, fizycznie bezpieczna instalacja automatyki domowej. Mechaniczne blokady sprzętowe zamiast wyłącznie softwarowych — bezpieczeństwo przez hardware.'
      }
    },

    s5: {
      title: 'Case Studies',
      sub:   'Trzy projekty opisane w głąb — geneza problemu, kluczowe innowacje, wynik.',
      cs1: {
        title: 'Sterownik pieca CO — 5,5 roku, 11 mln rekordów, baza jednej pracy inżynierskiej i dwóch magisterskich',
        b0: {
          title: 'Geneza problemu',
          text:  'Piec zasypowy (węglowy) bez żadnej automatyki — utrzymanie temperatury wymaga ręcznego regulowania nadmuchu dmuchawy. Dostępne termostaty sterują w trybie ON/OFF, co prowadzi do dużych oscylacji i nieefektywnego spalania.'
        },
        b1: {
          title: 'Innowacja #1 — fazowe sterowanie mocą triaka zamiast falownika VFD',
          text:  'Dmuchawa napędzana silnikiem indukcyjnym. Standardowe rozwiązanie: falownik VFD (200–500 zł). Zastosowane: sterowanie fazowe opóźnieniem wyzwolenia triaka względem przejścia napięcia przez zero. Moment napędowy dmuchawy odśrodkowej rośnie proporcjonalnie do prędkości² (M ∝ n²) — silnik naturalnie stabilizuje się przy niższej prędkości. Koszt implementacji: zero.'
        },
        b2: {
          title: 'Innowacja #2 — delta temperatury zamiast progów histerezowych',
          text:  'Co 15 sekund firmware oblicza dyskretną pochodną temperatury (tendencję) i podejmuje decyzje na podstawie <em>kierunku zmian</em>, zanim temperatura przekroczy próg. Trzy stany symboliczne: T↑ (ogranicz nadmuch), T→ (utrzymaj), T↓ (wzmocnij). Odpowiednik członu D regulatora PID — zaimplementowany bez bibliotek na 8-bit MCU.'
        },
        res: {
          title: 'Wyniki (5,5 roku eksploatacji)',
          html:  '<li>~11 milionów rekordów pomiarowych, 61 baz danych MDB (1,65 GB)</li><li>79+ wersji firmware bez przerwy w pracy systemu (USB bootloader)</li><li>Zero awarii sprzętowych przez cały okres produkcyjny</li><li>Baza dla jednej pracy inżynierskiej i dwóch magisterskich, ocena 5/5</li>'
        }
      },
      cs2: {
        title: 'Woltomierz WST/WSTK — 150 szt., FSM stanu silnika, 8 kolorów podświetlenia',
        b0: {
          title: 'Problem i innowacja',
          text:  'Autonomiczny monitor elektryczny pojazdu — nie tylko mierzy napięcie, ale klasyfikuje stan instalacji przez FSM: ładowanie / odstawiony / silnik pracuje. Wykres słupkowy skalibrowany do chemii akumulatora ołowiowego. Automatyczna regulacja jasności podświetlenia przy uruchamianiu silnika. Dwa kanały temperatury DS18B20 (silnik + otoczenie). 8 opcji koloru podświetlenia.'
        },
        res: {
          title: 'Wyniki',
          html:  '<li>WST (samochód): 150 szt. sprzedanych ogólnopolsko</li><li>WSTK (motocykl): ~15 szt., w tym egzemplarz własny autora</li><li>Sprzedaż bez kanału dystrybucji — wyłącznie przez polecenia</li><li>Film demonstracyjny niezależnego klienta na YouTube</li>'
        }
      },
      cs3: {
        title: 'System pomiaru czasu AutoMobilClub Łódź — dwa timery w jednym ISR, Watchdog jako optymalizacja flash',
        b0: {
          title: 'Problem inżynierski',
          text:  'Komercyjny system pomiaru czasu dla wyścigów 1/4 mili na AVR (2 KB flash). Wymagania: dwa niezależne timery (czas okrążenia 0,01 s + czas reakcji kierowcy 0,001 s), detekcja fałszywego startu, komunikacja RS232/RS485/USB, zapis MMC, RTC — w 2 KB pamięci.'
        },
        b1: {
          title: 'Kluczowe decyzje techniczne',
          text:  '<strong>Multipleksowanie timerów w jednym ISR</strong> — dwa niezależne pomiary czasu bez konfliktu przerwań. <strong>Watchdog reset jako optymalizacja flash</strong> — zamiast osobnej procedury resetu, reset WDT zwalnia kilkadziesiąt bajtów kodu. Technika stosowana komercyjnie w urządzeniach produkcyjnych.'
        },
        res: {
          title: 'Wyniki i kontynuacja',
          html:  '<li>Wdrożony na imprezach AutoMobilClub Łódź (wyścigi 1/4 mili)</li><li>Relacja prasowa: Dziennik Łódzki</li><li>Architektura rozwinięta w DELFI Racing RT1/RT2/Choinka/DN03 (#05)</li>'
        }
      }
    },

    s6: {
      title: 'Podsumowanie kompetencji',
      sub:   'Profil techniczny na potrzeby współpracy projektowej i partnerstwa R&D.',
      sk1: {
        title: 'Embedded Systems / Firmware',
        text:  'AVR (ATmega/ATtiny), ARM Cortex-M, AVR ASM, C. Własne PCB (KiCad/Eagle/Altium), sterowanie 230 V (triak, phase-angle control), protokoły UART/RS232/RS485/SPI/I²C/USB. Produkty w produkcji seryjnej.'
      },
      sk2: {
        title: 'Systemy pomiarowe i czasu rzeczywistego',
        text:  'Multipleksowanie timerów w ISR, precyzja 0,001 s, zapis MMC/SD, RTC, DS18B20. Doświadczenie w projektach działających nieprzerwanie przez lata w środowisku produkcyjnym (11 mln rekordów).'
      },
      sk3: {
        title: 'Matematyka Relacyjna (R&D)',
        text:  'Twórca teorii MR i frameworków ARR/MR-CL/MR-KL/MR-RG/RPP. 6 preprintów naukowych (Zenodo). TrueSynth: błąd ppb=0, 4,7× szybszy od CMSIS-DSP. HPC: NumPy/Numba JIT.'
      },
      sk4: {
        title: 'AI / Software',
        text:  'FochBot: FastAPI, ChromaDB, multi-LLM routing. MR-AI: framework decyzyjny „bez wartości bezwzględnych". Java, C# (.NET), React/TypeScript (FinTech, Commerzbank), VB.NET, Python.'
      },
      sk5: {
        title: 'Systemy własne i narzędzia produkcyjne',
        text:  'ELF binary patching (LX-GT01), reverse-engineering protokołów (LX-EMI01), USB bootloader bez demontażu, generator numerów seryjnych, linia laserowa CO₂ (1000+ wyrobów). Smart Home: Home Assistant, hardware interlocking.'
      },
      sk6: {
        title: 'Zarządzanie techniczne R&D',
        text:  'Koordynator biura konstrukcyjnego Laskomex (awans po 6 mies.), zarządzanie zespołem R&D, Service Book, oszczędności ~50 000 PLN/rok. Środowisko korporacyjne (Commerzbank, COREP/FINREP).'
      },
      cta: {
        title: 'Kontakt i współpraca',
        text:  'Otwarty na projekty R&D, konsulting embedded, partnerstwo przy badaniach MR/AI.',
        email:  '✉ flamandzki.artur@gmail.com',
        zenodo: '🔬 Zenodo',
        cv_en:  '📄 CV (EN)',
        cv_pl:  '📄 CV (PL)'
      }
    },

    footer: {
      text: '© 2026 Artur Flamandzki — Portfolio R&D. Matematyka Relacyjna jest autorską teorią i pozostaje własnością intelektualną autora. Skontaktuj się przed cytowaniem: <a href="mailto:flamandzki.artur@gmail.com">flamandzki.artur@gmail.com</a>'
    }
  };
})();
