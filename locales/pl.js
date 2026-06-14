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
      description: '22 projekty — elektronika embedded, firmware AVR, algorytmika, AI.'
    },

    nav: {
      filozofia:   'Filozofia',
      ewolucja:    'Ewolucja',
      projekty:    'Projekty',
      casestudies: 'Case Studies',
      podsumowanie:'Podsumowanie',
      kontakt:     'Kontakt'
    },

    hero: {
      degree: 'mgr inż.',
      title: 'Systems & Core Algorithms Architect',
      quote: 'Projektuję architekturę systemów technicznych na styku sprzętu, oprogramowania i zaawansowanej algorytmiki.',
      b1: '16 lat praktyki w R&D',
      b2: 'Produkty zwalidowane rynkowo',
      b3: 'Autorskie frameworki optymalizacyjne',
      b5: 'AI / Embedded'
    },

    s1: {
      title: 'Filozofia projektowa',
      p1:   'Lubię zmierzyć się z problemem samodzielnie zanim spojrzę jak rozwiązali go inni. Sprawdzić czy jestem w stanie go zrozumieć, znaleźć przynajmniej koncepcję rozwiązania, podjąć próbę. Gdy mi się uda — wyszukuję podobne problemy i czytam cudze podejścia. Nie po to żeby porównywać kto lepszy, ale żeby zobaczyć co pominąłem, czego nie dostrzegłem, czy można było prościej.',
      p2:   'Stąd projekt nr 9: zadanie algorytmiczne które skończyło się samodzielnym wyprowadzeniem twierdzenia teorii liczb — bo nikt mi nie powiedział że ono istnieje. I stąd każde narzędzie napisane od zera: terminal COM, kalkulator dzielnika, biblioteka BigInteger — bo gotowe poznałem dopiero gdy stworzyłem własne.'
    },

    s2: {
      title: 'Ewolucja — od prototypu do teorii',
      sub:   'Chronologia kluczowych przełomów. Obie ścieżki — hardware embedded i matematyka relacyjna — zbiegają się w latach 2022–2026.',
      t1: {
        period: '2004',
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
        period: '2025 – obecnie',
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
        text:  'Jeżeli rozumiesz ograniczenia sprzętowe, skalę enterprise i matematyczny fundament — możesz projektować systemy, które inni uznają za niemożliwe.'
      },
      fazepunchline: 'Hardware nauczył mnie myśleć w cyklach. Bank nauczył myśleć w wolumenach. Matematyka nauczyła myśleć w strukturach. Projektuję na przecięciu wszystkich trzech.',
      note: '<strong>Dwie ścieżki:</strong> hardware embedded (projekty #01–#15) i matematyka relacyjna (#16–#21) rozwijały się równolegle przez lata. W 2022–2026 <strong>zbiegają się w jedną</strong>: MR-AI, TrueSynth i Resona to miejsca, gdzie fizyka mikrokontrolerów spotyka teorię liczb.'
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
        result: 'Kompletna infrastruktura elektroniczna dla wyścigów. Dwa niezależne timery w jednym ISR (czas okrążenia 0,01 s + czas reakcji kierowcy 0,001 s). Następnik Systemu Pomiaru Czasu ACŁ (#11). <a href="https://dzienniklodzki.pl/wyscigi-na-14-mili-w-lodzi-wystartowalo-kilkudziesieciu-kierowcow-zdjecia-film/ar/6459502" target="_blank" rel="noopener">Artykuł Dziennik Łódzki</a>'
      },
      p06: {
        name:   'Seria LX-DK — Moduły Resetowania Haseł Administratora Laskomex',
        tag:    'Komercja · Laskomex · 2015–2022',
        tech:   'DK02 + DK03, ATtiny, protokół UART własnościowy, reverse-engineering',
        result: '~500 szt. sprzedanych przez 7 lat (w tym 3 lata po odejściu z firmy). Rozwiązanie flash-shortage: moduł sprzętowy warstwę wyżej zamiast modyfikacji firmware.'
      },
      p07: {
        name:   'LX-GT01 — Generator Tabel Kodów Laskomex',
        tag:    'Komercja · Laskomex · 2018–2019',
        tech:   'CRC8, ELF binary patching, aplikacja PC (VB.NET)',
        result: 'Generator tabel kodów do produkcji seryjnej. ELF patching — modyfikacja binarnych tabel danych bez rekompilacji firmware.'
      },
      p08: {
        name:   'LX-EMI01 — Edytor Pamięci EEPROM Laskomex / Proel',
        tag:    'Komercja · Laskomex/Proel · 2018–2019',
        tech:   'Edytor EEPROM, reverse-engineering protokołu, ATmega, VB.NET, I²C/SPI, mostek USB↔RS232',
        result: 'Edytor EEPROM dla 8 modeli Laskomex/Proel — bez komputera na miejscu. PELP: przeniesienie tabeli kodów między markami i generacjami jednym przyciskiem. Mostek USB↔RS232 z trzywarstwową architekturą zdalnego zarządzania.'
      },
      p09: {
        name:   'Algorytm Szukania Dzielników Liczb na ATmega8',
        tag:    'Embedded · algorytmika bare-metal, 2013',
        tech:   'AVR, ATmega8, optymalizacja dla 8-bit MCU',
        result: 'Algorytm liczenia dzielników na ATmega8 (O(N) → O(√N)). Samodzielnie opracowana formuła τ(n) = ∏(eᵢ+1) — klasyczne twierdzenie teorii liczb, odkryte tu empirycznie od zera. Bezpośredni poprzednik badań MR.'
      },
      p10: {
        name:   'Termometr Pieca — Zdalny Monitor Kotłowni',
        tag:    'Embedded · IoT przed erą IoT, 2013',
        tech:   'ATmega8, DS18B20, ambient display (widzialny z drugiego końca kotłowni), alarm',
        result: 'Zdalny monitoring temperatury pieca z wyświetlaczem ambientowym. Wzorzec file-based IoT gateway przez OneDrive — wdrożony zanim MQTT/Home Assistant stały się powszechne.'
      },
      p11: {
        name:   'System Pomiaru Czasu AutoMobilClub Łódź',
        tag:    'Komercja · wyścigi 1/4 mili, 2011',
        tech:   'ATtiny2313, RS232, Timer1, software UART, detekcja falstartu, Watchdog reset',
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
        name:   'Laser CO₂ — Opanowanie Technologii i Transfer Wiedzy',
        tag:    'Własny system · 2020–obecnie',
        tech:   'CO₂ 50 W, elektrozawory, Ruida DSP, przekaźniki, chiller, własny air-assist',
        result: 'Pełne opanowanie technologii: kompensacja kerfa, profile materiałowe, kalibracja maszyny. Transfer wiedzy — żona samodzielnie obsługuje maszynę i wyprodukowała ponad 1000 gotowych wyrobów.'
      },
      p16: {
        name:   'TrueSynth — Biblioteka Trygonometryczna dla Embedded',
        tag:    'Matematyka R&D · Prime Engine, 2025–obecnie',
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
        name:   'MR-AI — Framework Rytmiczny dla Sztucznej Inteligencji',
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
        tag:    'Własny system · IoT, 2022–obecnie',
        tech:   'Home Assistant, YAML, REST API, mechaniczne interlocking (Power Isolation / Night Lockdown), hardware-integrated',
        result: 'Local-First, fizycznie bezpieczna instalacja automatyki domowej. Mechaniczne blokady sprzętowe zamiast wyłącznie softwarowych — bezpieczeństwo przez hardware.'
      }
    },

    s5: {
      title: 'Case Studies — trzy gałęzie',
      sub:   'Trzy projekty z różnych obszarów R&D — elektronika, informatyka, matematyka.',
      cs1: {
        title: 'Sterownik pieca CO — PAC triak zamiast VFD · delta temperatury · ±1°C · 11 mln rekordów',
        b0: {
          title: 'Geneza problemu',
          text:  'Piec zasypowy (węglowy) napędza dmuchawę silnikiem indukcyjnym jednofazowym — prędkość synchroniczna 1500 obr/min przy 50 Hz. Standardowa regulacja prędkości: falownik VFD (200–500 zł). Dostępne termostaty rynkowe: tryb ON/OFF → duże oscylacje temperatury, nieefektywne spalanie, zero antycypacji zmiany.'
        },
        b1: {
          title: 'Innowacja #1 — fazowe sterowanie mocą triaka zamiast falownika VFD',
          text:  'Zamiast VFD: opóźnienie wyzwolenia triaka względem przejścia napięcia przez zero (phase-angle control). Dla wentylatora odśrodkowego moment M ∝ n² — obniżone napięcie RMS = naturalna stabilizacja przy niższej prędkości, bez falownika. Trzy niezależne kanały triakowe: dmuchawa / pompa / bojler. ISR Timer0 odmierza opóźnienie co 10 ms (sieć 50 Hz). Koszt dodatkowego hardware: zero.'
        },
        b2: {
          title: 'Innowacja #2 — delta temperatury · okno EMC · zalążek ARR',
          text:  'Co 15 sekund firmware oblicza dyskretną pochodną temperatury: <strong>T↑ → ogranicz nadmuch · T→ → utrzymaj · T↓ → wzmocnij</strong>. Regulacja antycypacyjna zanim temperatura przekroczy próg — odpowiednik członu D regulatora PID, zaimplementowany bez bibliotek na 8-bit MCU. Programowe okno EMC: przed każdym pomiarem 1-Wire wyłącz wszystkie triaki i oba przerwania → zero zakłóceń → zero dodatkowego hardware. <em>Podprogram Tendencja_sub to pierwsza znana implementacja ARR (Analizatora Rytmu Relacyjnego) — działająca w produkcji dekadę przed sformułowaniem frameworku MR-AI (#20).</em>'
        },
        res: {
          title: 'Wyniki (5,5 roku eksploatacji)',
          html:  '<li>~11 milionów rekordów pomiarowych w 61 bazach MDB (1,65 GB) — zapis ciągły przez 5,5 roku</li><li>79+ wersji firmware bez przerwy w pracy systemu (własny bootloader USB)</li><li>Precyzja: ±1°C obwód CO · średnie odchylenie −0,1°C od zadanej przez pełny sezon grzewczy na piecu węglowym z dużą bezwładnością termiczną</li><li>Podstawa 2 prac magisterskich i 1 inżynierskiej — wszystkie obronione na 5/5</li><li>OneDrive jako bramka IoT — zdalny monitoring i sterowanie przez internet (2017); niestandardowe rozwiązanie dla systemów embedded klasy DIY w tamtym czasie</li>'
        }
      },
      cs2: {
        title: 'Autonomiczna warstwa pośrednia LLM — dwuwarstwowa pamięć AI · FochBot',
        b0: {
          title: 'Problem: LLM to neuron bezstanowy',
          text:  'Model LLM (GPT, Claude) to jednorazowa jednostka obliczeniowa — otrzymuje impuls, generuje wyjście, gaśnie. Nie utrzymuje stanu między wywołaniami. Naiwne rozwiązanie: pełna historia rozmów w każdym prompcie → koszt tokenów rośnie liniowo, użyteczność maleje. FochBot odpowiada na pytanie: jak zbudować mózg z pamięcią wokół bezstanowego neuronu?'
        },
        b1: {
          title: 'Innowacja: dwuwarstwowy mózg (Warstwa A + Warstwa B)',
          text:  '<strong>Warstwa A — Mapa Pamięci:</strong> trójpoziomowe archiwum na dysku — surowe sesje (session_*.json), kompaktowy indeks jako katalog dla LLM, fragmenty wiedzy wczytywane selektywnie per zapytanie. LLM dostaje tylko tyle kontekstu, ile potrzebuje — bez pełnej historii. <strong>Warstwa B — Kontroler Autonomiczny:</strong> routing, ocena kompletności zapytania i budowanie pakietu kontekstu — lokalnie, bez LLM. Następnie wywołuje model jako narzędzie, ocenia wynik, ewentualnie inicjuje ponowne wywołanie lub eskalację. Logika ciągłości leży po stronie FochBota, nie modelu.'
        },
        b2: {
          title: 'Ewolucja V1→V2→V3',
          text:  'V1 (2024): klasyfikator intencji offline — intents.json, NLP (tokenizacja, czyszczenie tekstu), ML classifier, interfejs CLI + web. V2 (2025): pełna przebudowa na mikrousługi FastAPI — API:8000 (logika biznesowa + chat) oddzielony od Auth:8001 (sesje, role, tokeny urządzeń). Każde żądanie /chat → require_auth() → POST /check_access → weryfikacja sesji w RAM. Hasze BCRYPT, atomowy zapis JSON (data_manager.py jedyny moduł z prawem zapisu), role admin/user/device. Dostarczono w 3 fazach. V3 (2025–2026): warstwa pośrednia LLM z pełną dokumentacją techniczną (PDF/DOCX/LaTeX).'
        },
        res: {
          title: 'Wyniki',
          html:  '<li>Koszt tokenów = 0 dla lokalnych zadań — LLM wywoływany wyłącznie gdy potrzeba</li><li>Ciągłość kontekstu między sesjami bez wysyłania pełnej historii do modelu</li><li>Separacja Auth od API: zmiana polityki bezpieczeństwa bez dotykania logiki biznesowej</li><li>Zdalny dostęp: przeglądanie kodu, pobieranie i modyfikowanie, zatrzymywanie i restart serwisów, uruchamianie builda frontendu z podglądem postępu w czasie rzeczywistym</li>'
        }
      },
      cs3: {
        title: 'TrueSynth Prime Engine — zero interpolacji, zero jittera, 4,7× szybszy niż CMSIS-DSP Q31',
        b0: {
          title: 'Problem: jitter i błąd aproksymacji wbudowany w definicję',
          text:  'Klasyczne LUT trygonometryczne interpolują między punktami siatki — dowolny kąt dziesiętny rzadko trafia dokładnie na punkt siatki. Interpolacja to podwójny koszt: narzut obliczeniowy i błąd aproksymacji. Ale główny problem to jitter: jeden kąt kosztuje 70 cykli, inny 700. CMSIS-DSP Q31 na M4F: nominalne 14 cykli/parę, ale niedeterministyczny — do 530 cykli! Błąd: 18 825 ppb. Aplikacje FOC, DDS i enkodery absolutne wymagają identycznego czasu wykonania dla każdego kąta.'
        },
        b1: {
          title: 'Innowacja: kąt jako k/p · LUT z liczb pierwszych · 6 trybów silnika',
          text:  'Redefinicja kąta: zamiast radianów, proporcja <strong>k/p</strong> (p — liczba pierwsza). Każdy kąt k/p trafia DOKŁADNIE na punkt LUT — interpolacja zbędna, koszt identyczny dla każdego kąta, jitter = 0. <strong>LUT Prime Engine</strong> (p ≤ 67): 19 liczb pierwszych, 275 wpisów, <strong>2,2 kB Flash, 0 B RAM</strong>. Sześć trybów: Mode 0 (Chebyshev iterator) · Mode 1 Direct LUT (482 cykli M0, 0 ppb) · Mode 2 Reduce · Mode 3 Nearest · Mode 4 Repeated Squaring · <strong>Mode MI (3 cykli/parę M4F, 0,0 ppb, deterministyczny)</strong> — dedykowany FOC/DDS/enkoderom.'
        },
        b2: {
          title: 'Benchmark — twarde liczby na sprzęcie',
          text:  '<strong>Platforma M4F (STM32G474RE, 170 MHz):</strong> Mode MI → <strong>3 cykli/parę · 0,0 ppb · TAK deterministyczny</strong>. CMSIS-DSP Q31 → 14 cykli/parę · 18 825 ppb · NIE (do 530 cykli!). CMSIS-DSP F32 → 178 cykli/parę · 18 978 ppb. <strong>Platforma M0 (STM32F030R8, 48 MHz):</strong> Prime Direct LUT → 482 cykli · 0 ppb. CORDIC klasyczny → 271 cykli · 0,9 ppb. LUT 7500 Flash → 798 cykli · 5,6 ppb. Taylor → 888 cykli · 98 000 ppb. <strong>Test dryftu:</strong> 10<sup>9</sup> kroków — błąd końcowy 2,22·10⁻¹⁶ (epsilon maszynowy IEEE 754). Dryft: 0.'
        },
        res: {
          title: 'Wyniki',
          html:  '<li>4,7× szybszy niż CMSIS-DSP Q31 (14→3 cykli/parę) · jitter wyeliminowany (0 vs do 530 cykli!)</li><li>Błąd aproksymacji: 18 825 ppb → 0,0 ppb — wynik algebraicznie dokładny</li><li>Zerowy dryft po 10<sup>9</sup> krokach (błąd końcowy = epsilon IEEE 754 = 2,22·10⁻¹⁶)</li>'
        }
      }
    },

    s6: {
      title: 'Podsumowanie kompetencji',
      sub:   'Profil techniczny na potrzeby współpracy projektowej i partnerstwa R&D.',
      sk1: {
        title: 'Embedded Systems / Firmware',
        text:  'AVR (ATmega/ATtiny), ARM Cortex-M, AVR ASM, C. Własne PCB (DipTrace/Eagle/Altium), sterowanie 230 V (triak, phase-angle control), protokoły UART/RS232/RS485/SPI/I²C/USB. Produkty w produkcji seryjnej.'
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
        email:        '✉ flamandzki.artur@gmail.com',
        zenodo:       '🔬 Zenodo',
        lang_pl:      'PL',
        lang_en:      'EN',
        portfolio_pl: 'Portfolio PL',
        portfolio_en: 'Portfolio EN'
      }
    },

    footer: {
      text: '© 2026 Artur Flamandzki — Portfolio R&D. Matematyka Relacyjna jest autorską teorią i pozostaje własnością intelektualną autora. Skontaktuj się przed cytowaniem: <a href="mailto:flamandzki.artur@gmail.com">flamandzki.artur@gmail.com</a>'
    }
  };
})();
