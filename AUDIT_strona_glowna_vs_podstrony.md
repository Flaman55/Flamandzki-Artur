# Audit: strona główna vs podstrony projektów

> Porównanie pól `s4.pXX` w `locales/en.js` (strona główna) z danymi w `projects/pXX/locales/en.js`.
> Sprawdzane: nazwa, tag/data, technologia, wynik.
> Data audytu: 2026-06-14

---

## p01 — Boiler Controller

**Brak rozbieżności krytycznych.** ✓

Drobne:
- Main `tag` = "Own system · 2016–2022", projekt `date` = "Nov 2016 – Jul 2022 · 5.5 years in production" → kompatybilne, ale main nie mówi "5.5 years" bezpośrednio (mówi to result — OK)
- Main `result` mówi o "79+ firmware versions" ✓ (projekt też)

---

## p02 — Battery Speaker

**🔴 NAZWA:** Main = `'Portable Battery Speaker'` ≠ Projekt = `'Portable Battery-Powered Speaker'`

**🟡 DATA w tagu:** Main tag = `"high-school electronics, 2004"` (tylko rok 2004), projekt `date` = `'2004–2006'` — brakuje końca okresu

---

## p03 — LPG Calibrator

**Brak rozbieżności.** ✓

---

## p04 — Car Voltmeter

**🔴 NAZWA:** Main = `'Automotive Voltmeter WST / WSTK'` ≠ Projekt = `'Car Voltmeter WST / WSTK'`

**🟡 DATA:** Main tag = `"2011–2013"`, projekt `date` = `'c. 2011–2012'` — rozbieżność roku końcowego (2013 vs 2012)

---

## p05 — DELFI Racing

**Brak rozbieżności w nazwie i dacie.** ✓

**🟡 WYNIK (błąd logiczny):** Main `result` = `"Predecessor: #11"` — to jest odwrotnie. DELFI Racing (#05) jest **następnikiem** ACŁ (#11), nie poprzednikiem. Powinno być: `"Direct successor of ACŁ Timing System (#11)"` lub `"Predecessor: #11 → #05"`.

---

## p06 — LX-DK Series

**Brak rozbieżności w datach.** ✓

**🟡 NAZWA:** Main = `'...Admin Password Reset Modules'` ≠ Projekt = `'...Administrator Password Reset Modules'` (skrót "Admin" vs pełne "Administrator")

---

## p07 — LX-GT01

**🔴 DATA:** Main tag = `"2019–2020"` ≠ Projekt `date` = `'2018–2019'` — przesunięcie o rok

**🟡 NAZWA:** Main = `'LX-GT01 — Laskomex Code Table Generator Module'` (ma "Module"), Projekt = `'LX-GT01: Laskomex Code Table Generator'` (bez "Module")

---

## p08 — LX-EMI01

**🔴 DATA:** Main tag = `"2018–2020"` ≠ Projekt `date` = `'2018'` (tylko rok 2018, projekt datuje się na 1 rok)

**🟡 NAZWA:** Main = `'...EEPROM Memory Editor Module'` (ma "Module"), Projekt = `'...EEPROM Memory Editor'` (bez "Module")

**🟡 WYNIK:** Main `result` = `"Tool for reading and writing EEPROM of devices without documentation"` — projekt akcentuje też: PELP (cross-brand migration jednym przyciskiem), 8 modeli urządzeń, tryb bridge USB↔RS232. Wynik na stronie głównej jest niepełny.

---

## p09 — Divisor Algorithm

**🔴 NAZWA:** Main = `'Prime Divisor Search Algorithm on ATmega8'` ≠ Projekt = `'Divisor Algorithm: Rediscovering a Number Theory Theorem on ATmega8'` — znacząca różnica (projekt podkreśla odkrycie twierdzenia, nie "search algorithm")

**🔴 WYNIK (błąd merytoryczny):** Main `result` = `"Factorisation implementation on an 8-bit microcontroller"` — to jest BŁĄD. Projekt dotyczy **dzielników** (liczba liczb dzielących N), nie faktoryzacji. Faktoryzacja to p21. Powinno być np. `"Divisor-counting algorithm on ATmega8 — empirical derivation of classical number-theory formula τ(n). Direct precursor of MR research."` 

---

## p10 — Boiler Thermometer

**🟡 TECH (błąd struktury):** Main `tech` = `'ATmega8, DS18B20, ambient display (visible across the boiler room), alarm, 2013'` — rok `2013` jest wpisany na końcu pola `tech` zamiast być w tagu/dacie. Należy go usunąć z `tech`.

Poza tym brak rozbieżności. ✓

---

## p11 — ACŁ Timing System

**Brak rozbieżności.** ✓

---

## p12 — USB-RS232 Converter

**🟡 NAZWA:** Main = `'USB-RS232 Converter with TTL Output — Custom PCB'` ≠ Projekt = `'USB-RS232 Converter with TTL Output V1.0→V3.0a'` — różny sufiks (Custom PCB vs wersjonowanie). Wersja projektu jest bardziej informatywna.

---

## p13 — BAGRAMET Controller

**🔴 DATA (brak roku):** Projekt `date` = `'DELFI Electronics · commercial contract · Eagle PCB · main board + display board, agricultural application'` — brakuje roku! Main tag = `"agriculture, 2012"`. Projekt nie ma roku w polu `date`.

---

## p14 — RGB LED Fun

**🟡 NAZWA:** Main = `'RGB LED Fun — Educational Toy'` ≠ Projekt = `'RGB LED Fun: Educational Toy for Children'` — brakuje `"for Children"` na stronie głównej

---

## p15 — CO₂ Laser

**🔴 NAZWA (znacząca różnica):** Main = `'CO₂ Laser — Infrastructure and Air-Assist System'` ≠ Projekt = `'CO₂ Laser: Technology Mastery and Knowledge Transfer'` — kompletnie różne podtytuły. Projekt skupia się na transferze wiedzy i nauce technologii, main akcentuje infrastrukturę i air-assist.

**🟡 WYNIK:** Main `result` = `"Automated wood-processing production line. Custom air-assist, Ruida DSP calibration."` — projekt opisuje głównie mastery technologii i transfer wiedzy (żona przejęła maszynę, 1000+ produktów). Wynik na main jest technicznie poprawny ale pomija główny aspekt projektu.

---

## p16 — TrueSynth

**🔴 DATA:** Main tag = `"Mathematics R&D · Prime Engine, 2025–2026"` ≠ Projekt `date` = `'2025–present'` — projekt jest otwarty (present), main zamknął go na 2026

---

## p17 — Relational Mathematics

**Brak rozbieżności.** ✓

---

## p18 — Resona

**Brak rozbieżności.** ✓

---

## p19 — FochBot

**Brak rozbieżności.** ✓

---

## p20 — MR-AI

**🟡 NAZWA:** Main = `'MR-AI — Rhythmic Framework'` ≠ Projekt = `'MR-AI: Rhythmic Framework for Artificial Intelligence'` — na main brakuje `"for Artificial Intelligence"`

---

## p21 — HPC Factorisation

**Brak rozbieżności.** ✓

---

## p22 — Smart Home

**🔴 DATA:** Main tag = `"Own system · IoT, 2024–present"` ≠ Projekt `date` = `'2021–2026'` — rozbieżność roku startu (2024 vs 2021) i roku końcowego (present vs 2026)

---

## Podsumowanie rozbieżności

| # | Projekt | Typ | Opis |
|---|---------|-----|------|
| p02 | Battery Speaker | 🔴 Nazwa | "Battery Speaker" vs "Battery-Powered Speaker" |
| p02 | Battery Speaker | 🟡 Data | Tag "2004" vs projekt "2004–2006" |
| p04 | Car Voltmeter | 🔴 Nazwa | "Automotive" vs "Car" |
| p04 | Car Voltmeter | 🟡 Data | Tag "2011–2013" vs projekt "2011–2012" |
| p05 | DELFI Racing | 🟡 Wynik | "Predecessor: #11" — odwrotna logika (DELFI jest następnikiem #11) |
| p06 | LX-DK | 🟡 Nazwa | "Admin" vs "Administrator" |
| p07 | LX-GT01 | 🔴 Data | Tag "2019–2020" vs projekt "2018–2019" |
| p07 | LX-GT01 | 🟡 Nazwa | Main ma "Module" na końcu, projekt nie |
| p08 | LX-EMI01 | 🔴 Data | Tag "2018–2020" vs projekt "2018" |
| p08 | LX-EMI01 | 🟡 Nazwa | Main ma "Module" na końcu, projekt nie |
| p08 | LX-EMI01 | 🟡 Wynik | Main zbyt uproszczony (brak PELP, 8 modeli) |
| p09 | Divisor Alg. | 🔴 Nazwa | Znacząco różne — "Prime Divisor Search" vs "Rediscovering a Number Theory Theorem" |
| p09 | Divisor Alg. | 🔴 Wynik | Błąd merytoryczny: "Factorisation" zamiast "divisor counting" |
| p10 | Boiler Therm. | 🟡 Tech | Rok "2013" wpisany na końcu pola `tech` (powinien być w tagu) |
| p12 | USB-RS232 | 🟡 Nazwa | "Custom PCB" vs wersjonowanie "V1.0→V3.0a" |
| p13 | BAGRAMET | 🔴 Data | Projekt nie ma roku w polu `date` (tag na main ma "2012") |
| p14 | RGB LED Fun | 🟡 Nazwa | Brak "for Children" na stronie głównej |
| p15 | CO₂ Laser | 🔴 Nazwa | "Infrastructure and Air-Assist System" vs "Technology Mastery and Knowledge Transfer" |
| p15 | CO₂ Laser | 🟡 Wynik | Main pomija główny aspekt (transfer wiedzy) |
| p16 | TrueSynth | 🔴 Data | Tag "2025–2026" vs projekt "2025–present" |
| p20 | MR-AI | 🟡 Nazwa | Brak "for Artificial Intelligence" na stronie głównej |
| p22 | Smart Home | 🔴 Data | Tag "2024–present" vs projekt "2021–2026" |

**Legenda:** 🔴 istotna rozbieżność — wymaga poprawki | 🟡 drobna niespójność — do decyzji

---

*Raport dotyczy wyłącznie `locales/en.js`. Analogiczne rozbieżności należy spodziewać się w `locales/pl.js`.*
