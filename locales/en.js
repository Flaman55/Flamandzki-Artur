/* ═══════════════════════════════════════════════════════════════
   Portfolio — Artur Flamandzki
   locales/en.js  ·  English translations
   To add a new language: copy this file, rename to XX.js,
   translate the values, add <script src="locales/XX.js"></script>
   in index.html before main.js. The switcher builds itself.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  window.i18nData = window.i18nData || {};
  window.i18nData['en'] = {
    _langName: 'EN',

    page: {
      title: 'Artur Flamandzki — R&D Portfolio',
      description: '22 projects — embedded electronics, AVR firmware, Relational Mathematics, FochBot AI.'
    },

    nav: {
      filozofia:   'Philosophy',
      ewolucja:    'Evolution',
      mr:          'MR / Theory',
      projekty:    'Projects',
      casestudies: 'Case Studies',
      podsumowanie:'Summary'
    },

    hero: {
      title: 'Electronics & Embedded Software Engineer',
      quote: '"I build my own tools. Before I check whether something ready-made exists."',
      b1: '22 projects',
      b2: '2004 – present',
      b3: 'Firmware AVR · C# · Java · Python',
      b4: 'Relational Mathematics',
      b5: 'AI / Embedded'
    },

    s1: {
      title: 'Design Philosophy',
      sub:   'An observation in retrospect: every self-built tool forces a complete understanding of the problem it is meant to solve.',
      c1: {
        title: '⚙️ Building your own tools',
        text:  'A COM terminal for debugging the boiler controller? Written from scratch, because available terminals lacked simultaneous multi-format data display and a one-click bootloader trigger button.'
      },
      c2: {
        title: '🔢 Precision requires measurement',
        text:  'A voltage divider calculator with ADC mode? Built because there was a need to select R1/R2 and immediately see the single-bit resolution at a given precision — no online calculator showed that.'
      },
      c3: {
        title: '🧩 From concept to finished product',
        text:  'Hardware, firmware, PC applications, production tools, serial-number management systems. Described here are both products sold in hundreds of units and one-off projects — each with its own engineering lesson.'
      },
      c4: {
        title: '🧬 Theory emerges from practice',
        text:  'Relational Mathematics did not originate in academia — the 2016 boiler controller turned out to be an empirical proof of ARR a decade before the theory was formalised. Hardware observations and mathematical abstraction converge in one place.'
      }
    },

    s2: {
      title: 'Evolution — from prototype to theory',
      sub:   'A chronology of key technical and research breakthroughs. Both tracks — embedded hardware and relational mathematics — converge in 2022–2026.',
      t1: {
        period: '2004 – 2006',
        title:  'High school — first projects born of necessity',
        text:   'Portable battery speaker (#02). Starting point — electronics as a hobby, not a profession.'
      },
      t2: {
        period: '2009 – 2011',
        title:  'APH Elektra — technical consulting',
        text:   'Electronic component market analysis, substitute selection — foundation for BOM cost optimisation in future production projects.'
      },
      t3: {
        period: '2011 – 2013',
        title:  'First commercial products and measurement systems',
        text:   'Automotive voltmeter WST/WSTK (150 units, #04), AutoMobilClub Łódź timing system (#11), LPG injector calibrator (#03), boiler thermometer (#10).'
      },
      t4: {
        period: '2012 – 2017',
        title:  'DELFI Racing — motorsport instrument family',
        text:   'Christmas Tree RT1/RT2, DN03 instrumentation — complete electronic racing infrastructure (#05).'
      },
      t5: {
        period: '2013 – 2019',
        title:  'Laskomex — intercom R&D, technical and management role',
        text:   'LX-DK series (500 units, 7 years of sales, #06), LX-GT01 code table generator (#07), LX-EMI01 EEPROM editor (#08). Promoted twice within 6 months; service cost savings ~50,000 PLN/year.'
      },
      t6: {
        period: '2016 – 2022',
        title:  'Boiler controller — 5.5 years in a production environment',
        text:   'Custom PCB, ATmega328P, phase-angle control, delta-T instead of hysteresis thresholds (#01). ~11 M measurement records, 79+ firmware versions, foundation for one engineering and two master\'s theses.'
      },
      t7: {
        period: '2019 – present',
        title:  'Commerzbank — corporate FinTech environment',
        text:   'Corporate FinTech environment (Java / React / C#, COREP/FINREP). Unit and integration testing, Docker, CI/CD pipelines — corporate and big-tech tooling.'
      },
      t8: {
        period: '2024 – present',
        title:  'Smart Home, MR, TrueSynth, FochBot — convergence of both tracks',
        text:   'Smart home (Home Assistant, #22), Resona trajectory model (#18), Relational Mathematics theory (#17), MR-AI framework (#20), FochBot AI assistant (#19), TrueSynth embedded trigonometry (#16), HPC Shor simulation (#21).'
      },
      note: '<strong>Two tracks:</strong> embedded hardware (projects #01–#15) and relational mathematics (#16–#21) developed in parallel for years. In 2022–2026 they <strong>converge into one</strong>: MR-AI, TrueSynth and Resona are where microcontroller physics meets number theory.'
    },

    s3: {
      title: 'Relational Mathematics (MR)',
      sub:   'Hierarchy: MR as foundational theory (#17) → five analytical frameworks → MR-AI (#20) as the framework combining them all for AI applications.',
      theory: {
        title: 'MR — Foundational Theory (project #17)',
        text:  'Relational Mathematics (MR) is an original mathematical theory describing the structure of prime numbers through the lens of rhythmic relations, partitions and rotational models. It includes a hyperbolic proof of the Bertrand–Chebyshev theorem, CRT structures, Q (semigroups) and a rotational prime model. Published as 6 scientific preprints on Zenodo. MR provides the formal mathematical apparatus for five analytical frameworks.'
      },
      arr: {
        tag:     'ARR',
        title:   'Rhythmic and Resonance Analysis',
        text:    'Rhythm-control framework — identifies periodic patterns in sequences and measures their "resonance". Application: decision-making based on the direction of change (↑ / → / ↓) instead of absolute values — especially useful on edge/RT devices with constrained resources.',
        mandate: 'Mandate: measurement and control of sequence rhythm.'
      },
      cl: {
        tag:     'MR-CL',
        title:   'Rhythmic Clustering',
        text:    'Detects and segments clusters with similar rhythmic properties. Used for local density analysis and anomaly detection in MR-based data sets.',
        mandate: 'Mandate: segmentation and grouping of rhythmic structures.'
      },
      kl: {
        tag:     'MR-KL',
        title:   'Rhythmic Classification',
        text:    'Classifies elements according to rhythmic categories defined in MR. Builds a pattern taxonomy and enables categorical membership prediction without absolute values.',
        mandate: 'Mandate: typology and classification of MR patterns.'
      },
      rg: {
        tag:     'MR-RG',
        title:   'Rhythmic Regression',
        text:    'Models quantitative relationships between rhythmic parameters. Enables extrapolation and numerical prediction based on the MR regression apparatus — complementing classical regression with a rhythmic dimension.',
        mandate: 'Mandate: prediction and quantitative modelling.'
      },
      rpp: {
        tag:     'RPP',
        title:   'Relational Displacement Space',
        text:    'Defines a multidimensional space in which each element occupies a position determined by its displacement relations. Formalises the geometry of the MR structure and provides the spatial apparatus for the other frameworks.',
        mandate: 'Mandate: geometry and relational space of MR.'
      },
      ai: {
        label: 'AI application framework — project #20',
        title: 'MR-AI — Rhythmic Framework for Artificial Intelligence',
        text:  'MR-AI combines all five frameworks (ARR, MR-CL, MR-KL, MR-RG, RPP) into a coherent decision architecture for AI systems — <strong>control without absolute values</strong>. Instead of comparing numbers, the system operates on the rhythm of change and spatial relations. The concrete realisation of MR-AI is <strong>FochBot</strong> (#19): an autonomous AI assistant with a two-layer cognitive architecture (ChromaDB memory map + multi-model controller), eliminating recomputation of known conclusions — token cost = 0 for local tasks.'
      }
    },

    s4: {
      title: 'All Projects',
      sub:   '22 projects, 2004–2026. Left-edge colour indicates domain.',
      leg: {
        all:        'All',
        embedded:   'Hardware / Embedded',
        commercial: 'Commercial / Client work',
        own:        'Own systems',
        math:       'Mathematics R&D',
        ai:         'AI / Software'
      },
      col: {
        num:     '#',
        project: 'Project',
        tech:    'Context / Technology',
        result:  'Result / Reach'
      },
      p01: {
        name:   'Autonomous Central Heating Boiler Controller',
        tag:    'Own system · 2016–2022',
        tech:   'AVR Assembly, Phase-Angle Control (triac 230 V), ATmega328P, DS18B20, UART→USB, MS Access (.mdb), OneDrive',
        result: '5.5 years in production (Nov 2016 – Jul 2022). ~11 M measurement records, 61 MDB databases (1.65 GB), 79+ firmware versions. Foundation for one engineering and two master\'s theses, all graded 5/5.'
      },
      p02: {
        name:   'Portable Battery Speaker',
        tag:    'Historical project · high-school electronics, 2004',
        tech:   'Analogue audio electronics, batteries, amplifier',
        result: 'Starting point — first project built out of necessity during high school. Historical reference documenting the beginning of the technical journey.'
      },
      p03: {
        name:   'Automatic LPG Injector Calibrator',
        tag:    'Commercial order · 2010–2011',
        tech:   'ATmega32, stepper motors, coil-open event timing',
        result: 'Calibration scatter reduced from >0.3 mm to <0.01 mm by closing the feedback loop on the physical coil-open event instead of caliper geometry.'
      },
      p04: {
        name:   'Automotive Voltmeter WST / WSTK',
        tag:    'Commercial product · 2011–2013',
        tech:   'ATmega, HD44780, DS18B20 (×2), lead-acid FSM, RGB backlight (8 colours)',
        result: '<strong>WST</strong> (car): 150 units sold nationwide. <strong>WSTK</strong> (motorcycle): ~15 units. Customer demo: <a href="https://www.youtube.com/watch?v=LHdiPH1gRtQ" target="_blank" rel="noopener">▶ YouTube</a>'
      },
      p05: {
        name:   'DELFI Racing System — Timing and Motorsport Instrumentation',
        tag:    'Own system · 2015–2022',
        tech:   'Christmas Tree RT1/RT2, DN03 instrumentation, ATtiny/ATmega, RS232, RS485, RTC, MMC, false-start detection',
        result: 'Complete electronic infrastructure for racing events. Two independent timers multiplexed in one ISR (lap time 0.01 s + driver reaction time 0.001 s). Predecessor: #11. <a href="https://dzienniklodzki.pl/wyscigi-na-14-mili-w-lodzi-wystartowalo-kilkudziesieciu-kierowcow-zdjecia-film/ar/6459502" target="_blank" rel="noopener">Dziennik Łódzki article</a>'
      },
      p06: {
        name:   'LX-DK Series — Laskomex Admin Password Reset Modules',
        tag:    'Commercial · Laskomex · 2015–2022',
        tech:   'DK02 + DK03, ATtiny, proprietary UART protocol, reverse-engineering',
        result: '~500 units sold over 7 years (including 3 years after leaving the company). Flash-shortage solution: hardware module one architectural layer above instead of modifying the firmware.'
      },
      p07: {
        name:   'LX-GT01 — Laskomex Code Table Generator Module',
        tag:    'Commercial · Laskomex · 2019–2020',
        tech:   'CRC8, ELF binary patching, PC application (VB.NET)',
        result: 'Code table generator for serial production. ELF patching — modifying binary data tables without recompiling firmware.'
      },
      p08: {
        name:   'LX-EMI01 — Laskomex/Proel EEPROM Memory Editor Module',
        tag:    'Commercial · Laskomex/Proel · 2018–2020',
        tech:   'EEPROM editor, communication protocol reverse-engineering, I²C/SPI',
        result: 'Tool for reading and writing EEPROM of devices without documentation — full protocol reverse-engineering from scratch.'
      },
      p09: {
        name:   'Prime Divisor Search Algorithm on ATmega8',
        tag:    'Embedded · bare-metal algorithmics, 2013',
        tech:   'AVR, ATmega8, 8-bit MCU optimisation',
        result: 'Factorisation implementation on an 8-bit microcontroller. Early precursor to interest in number theory — direct predecessor of MR research.'
      },
      p10: {
        name:   'Boiler Thermometer — Remote Boiler Room Monitor',
        tag:    'Embedded · IoT before IoT era, 2013',
        tech:   'ATmega8, DS18B20, ambient display (visible across the boiler room), alarm, 2013',
        result: 'Remote boiler temperature monitoring with ambient display. File-based IoT gateway via OneDrive — deployed before MQTT/Home Assistant became mainstream.'
      },
      p11: {
        name:   'AutoMobilClub Łódź Timing System',
        tag:    'Commercial · quarter-mile racing, 2011',
        tech:   'ATtiny2313, BASCOM, RS232, Timer1, software UART, false-start detection, Watchdog reset',
        result: 'Timing system delivered and used by AutoMobilClub Łódź. Two independent timers in one ISR, run time 0.01 s + reaction time 0.001 s. Direct predecessor of DELFI Racing (#05).'
      },
      p12: {
        name:   'USB-RS232 Converter with TTL Output — Custom PCB',
        tag:    'Embedded · developer tool, 2015',
        tech:   'FT232RL, MAX3243, Eagle PCB, Gerbers, 48×31 mm',
        result: 'Compact USB-UART/RS232 converter with TTL output designed for specific debugging needs. Custom PCB 48×31 mm.'
      },
      p13: {
        name:   'BAGRAMET Spreader Controller',
        tag:    'Commercial order · agriculture, 2012',
        tech:   '2 PCBs (controller + panel), AVR, Bytów, small series',
        result: 'Dedicated fertiliser spreader controller. Client project, small-series production.'
      },
      p14: {
        name:   'RGB LED Fun — Educational Toy',
        tag:    'Own project · CNC, 2021–2022',
        tech:   'ATtiny13A, 3 pins drive RGB, software PWM, CNC enclosure',
        result: 'Interactive educational toy — 3 RGB buttons, software PWM on ATtiny13A (no hardware PWM). Enclosure milled on own CNC machine.'
      },
      p15: {
        name:   'CO₂ Laser — Infrastructure and Air-Assist System',
        tag:    'Own system · 2020–present',
        tech:   'CO₂ 50 W, solenoid valves, Ruida DSP, relays, chiller, custom air-assist',
        result: 'Automated wood-processing production line. Custom air-assist, Ruida DSP calibration. Production and commercialisation of >1,000 finished products.'
      },
      p16: {
        name:   'TrueSynth — Trigonometric Library for Embedded',
        tag:    'Mathematics R&D · Prime Engine, 2025–2026',
        tech:   'Prime Engine, Q31 Fixed-Point, Cortex-M0/M4F, FOC/DDS, ARM Assembly',
        result: 'Angle as a prime-number-based fraction (Δ = k/p) — approximation error ppb = 0. <strong>4.7× faster</strong> than CMSIS-DSP Q31 without FPU. Zero drift after 10⁹ steps.'
      },
      p17: {
        name:   'Relational Mathematics — Number Theory',
        tag:    'Mathematics R&D · 2025–present',
        tech:   'Bertrand–Chebyshev (hyperbolic proof), CRT, Q (semigroups), partitions, rotational model, Zenodo (6 preprints)',
        result: 'Original theory describing the rhythmic structure of prime numbers. 6 scientific preprints on Zenodo. Foundation for ARR, MR-CL, MR-KL, MR-RG, RPP frameworks and MR-AI project (#20).'
      },
      p18: {
        name:   'Resona — Trajectory Computational Model',
        tag:    'Mathematics R&D · 2025–present',
        tech:   'Resonance function, custom Resona language, functional graphics, Python',
        result: 'Computational model based on resonance functions — trajectory analysis in MR space. Custom model description language (Resona DSL).'
      },
      p19: {
        name:   'FochBot — Autonomous AI Assistant',
        tag:    'AI / Software · 2026',
        tech:   'FastAPI, microservices, BCRYPT, ChromaDB, LangChain, multi-LLM routing (Claude/GPT/Gemini), ARR context-selection',
        result: 'Two-layer cognitive architecture: Layer A (ChromaDB memory map + ARR) + Layer B (multi-model controller). Eliminates recomputation → token cost = 0 for local tasks.'
      },
      p20: {
        name:   'MR-AI — Rhythmic Framework',
        tag:    'AI / Software · 2025–present',
        tech:   'ARR + MR-KL + MR-CL + MR-RG + RPP, value-free control, Python',
        result: 'Framework combining all 5 MR modules into a decision architecture for AI. "Control without absolute values" — decisions based solely on the rhythm of change and spatial relations.'
      },
      p21: {
        name:   'HPC Factorisation — Classical Simulation of Shor\'s Algorithm',
        tag:    'Mathematics R&D · HPC, 2025–present',
        tech:   'Python, NumPy, Numba JIT, phase mechanism (classical quantum simulation)',
        result: 'Classical (non-quantum) simulation of Shor\'s algorithm using the MR phase mechanism. Research into factorisation boundaries on CPU with Numba JIT.'
      },
      p22: {
        name:   'Smart Home — Security and Automation Architecture',
        tag:    'Own system · IoT, 2024–present',
        tech:   'Home Assistant, YAML, REST API, mechanical interlocking (Power Isolation / Night Lockdown), hardware-integrated',
        result: 'Local-First, physically secure home automation. Hardware mechanical locks instead of software-only — security through hardware.'
      }
    },

    s5: {
      title: 'Case Studies',
      sub:   'Three projects described in depth — problem genesis, key innovations, outcome.',
      cs1: {
        title: 'Boiler Controller — 5.5 years, 11 M records, foundation for one engineering and two master\'s theses',
        b0: {
          title: 'Problem genesis',
          text:  'A feed-type coal boiler with no automation — maintaining temperature requires manually adjusting the blower fan. Available thermostats work in ON/OFF mode, leading to large oscillations and inefficient combustion.'
        },
        b1: {
          title: 'Innovation #1 — triac phase-angle control instead of a VFD inverter',
          text:  'The blower is driven by an induction motor. Standard solution: VFD inverter (200–500 PLN). Applied solution: phase-angle firing delay of the triac relative to the zero-voltage crossing. The torque of a centrifugal fan blower scales as M ∝ n² — the motor naturally stabilises at a lower speed. Implementation cost: zero.'
        },
        b2: {
          title: 'Innovation #2 — temperature delta instead of hysteresis thresholds',
          text:  'Every 15 seconds the firmware computes the discrete temperature derivative (trend) and makes decisions based on the <em>direction of change</em>, before the temperature crosses the threshold. Three symbolic states: T↑ (reduce airflow), T→ (hold), T↓ (increase airflow). The equivalent of the D-term of a PID controller — implemented without libraries on an 8-bit MCU.'
        },
        res: {
          title: 'Results (5.5 years of operation)',
          html:  '<li>~11 million measurement records, 61 MDB databases (1.65 GB)</li><li>79+ firmware versions without interrupting system operation (USB bootloader)</li><li>Zero hardware failures throughout the entire production period</li><li>Foundation for one engineering and two master\'s theses, all graded 5/5</li>'
        }
      },
      cs2: {
        title: 'Voltmeter WST/WSTK — 150 units, engine-state FSM, 8 backlight colours',
        b0: {
          title: 'Problem and innovation',
          text:  'Autonomous vehicle electrical monitor — not just voltage measurement, but installation state classified by FSM: charging / parked / engine running. Bar graph calibrated to lead-acid battery chemistry. Automatic backlight brightness adjustment on engine start. Two DS18B20 temperature channels (engine + ambient). 8 backlight colour options.'
        },
        res: {
          title: 'Results',
          html:  '<li>WST (car): 150 units sold nationwide</li><li>WSTK (motorcycle): ~15 units, including the author\'s own bike</li><li>Sales without a distribution channel — referrals only</li><li>Independent customer demo video on YouTube</li>'
        }
      },
      cs3: {
        title: 'AutoMobilClub Łódź Timing System — two timers in one ISR, Watchdog as flash optimisation',
        b0: {
          title: 'Engineering problem',
          text:  'Commercial timing system for quarter-mile racing on AVR (2 KB flash). Requirements: two independent timers (lap time 0.01 s + driver reaction time 0.001 s), false-start detection, RS232/RS485/USB communication, MMC recording, RTC — all within 2 KB of flash.'
        },
        b1: {
          title: 'Key technical decisions',
          text:  '<strong>Timer multiplexing in one ISR</strong> — two independent timing measurements without interrupt conflict. <strong>Watchdog reset as flash optimisation</strong> — instead of a separate reset procedure, WDT reset saves tens of bytes of code. Technique used commercially in production devices.'
        },
        res: {
          title: 'Results and continuation',
          html:  '<li>Deployed at AutoMobilClub Łódź events (quarter-mile racing)</li><li>Press coverage: Dziennik Łódzki</li><li>Architecture evolved into DELFI Racing RT1/RT2/Christmas Tree/DN03 (#05)</li>'
        }
      }
    },

    s6: {
      title: 'Competence Summary',
      sub:   'Technical profile for project collaboration and R&D partnership.',
      sk1: {
        title: 'Embedded Systems / Firmware',
        text:  'AVR (ATmega/ATtiny), ARM Cortex-M, AVR ASM, C. Custom PCB (KiCad/Eagle/Altium), 230 V mains control (triac, phase-angle), UART/RS232/RS485/SPI/I²C/USB. Commercial products in serial production.'
      },
      sk2: {
        title: 'Measurement & Real-Time Systems',
        text:  'Timer multiplexing in ISR, 0.001 s precision, MMC/SD logging, RTC, DS18B20. Experience in systems running uninterrupted for years in a production environment (11 M records).'
      },
      sk3: {
        title: 'Relational Mathematics (R&D)',
        text:  'Author of MR theory and ARR/MR-CL/MR-KL/MR-RG/RPP frameworks. 6 scientific preprints (Zenodo). TrueSynth: error ppb=0, 4.7× faster than CMSIS-DSP. HPC: NumPy/Numba JIT.'
      },
      sk4: {
        title: 'AI / Software',
        text:  'FochBot: FastAPI, ChromaDB, multi-LLM routing. MR-AI: value-free decision framework. Java, C# (.NET), React/TypeScript (FinTech, Commerzbank), VB.NET, Python.'
      },
      sk5: {
        title: 'Own Systems & Production Tools',
        text:  'ELF binary patching (LX-GT01), protocol reverse-engineering (LX-EMI01), USB bootloader without disassembly, serial number generator, CO₂ laser line (1,000+ products). Smart Home: Home Assistant, hardware interlocking.'
      },
      sk6: {
        title: 'Technical R&D Management',
        text:  'Promoted to Engineering Office Coordinator at Laskomex within 6 months. R&D team leadership, product lifecycle management, Service Book, ~50,000 PLN/year cost savings. Corporate environment (Commerzbank, COREP/FINREP).'
      },
      cta: {
        title: 'Contact & Collaboration',
        text:  'Open to R&D projects, embedded consulting, and MR/AI research partnerships.',
        email:  '✉ flamandzki.artur@gmail.com',
        zenodo: '🔬 Zenodo',
        cv_en:  '📄 CV (EN)',
        cv_pl:  '📄 CV (PL)'
      }
    },

    footer: {
      text: '© 2026 Artur Flamandzki — R&D Portfolio. Relational Mathematics is an original theory and remains the intellectual property of the author. Contact before citing: <a href="mailto:flamandzki.artur@gmail.com">flamandzki.artur@gmail.com</a>'
    }
  };
})();
