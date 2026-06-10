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
      degree: 'M.Eng.',
      title: 'Systems & Core Algorithms Architect',
      quote: 'I design the architecture of technical systems at the intersection of hardware, software, and advanced algorithmics.',
      b1: '16 years of R&D practice',
      b2: 'Market-validated products',
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
        period: '2025 – present',
        title:  'Smart Home, MR, TrueSynth, FochBot — convergence of both tracks',
        text:   'Smart home (Home Assistant, #22), Resona trajectory model (#18), Relational Mathematics theory (#17), MR-AI framework (#20), FochBot AI assistant (#19), TrueSynth embedded trigonometry (#16), HPC Shor simulation (#21).'
      },
      fase1: {
        label: 'Phase 1 — Hardware as language',
        title: 'Embedded · bare-metal · field-proven products',
        text:  'A system is not code — it is resource constraints, real time, and physical reality. Learning that every byte and every cycle is a resource to waste or leverage.'
      },
      fase2: {
        label: 'Phase 2 — Scale as a new dimension',
        title: '7 years in banking · 11 M records · FINREP',
        text:  'The same system-design principles — only “RAM” is now a database and “ISR” is a transaction window. Data integrity under regulatory pressure teaches thinking in volumes.'
      },
      fase3: {
        label: 'Phase 3 — Algorithm as product',
        title: 'TrueSynth · Resona · MR-AI · number theory',
        text:  'If you understand hardware constraints, enterprise scale and mathematical foundations — you can design systems others consider impossible.'
      },
      fazepunchline: 'Hardware taught me to think in cycles. Banking taught me to think in volumes. Mathematics taught me to think in structures. I design at the intersection of all three.',
      note: '<strong>Two tracks:</strong> embedded hardware (projects #01–#15) and relational mathematics (#16–#21) developed in parallel for years. In 2022–2026 they <strong>converge into one</strong>: MR-AI, TrueSynth and Resona are where microcontroller physics meets number theory.'
    },

    s3: {
      title: 'Relational Mathematics (MR)',
      sub:   'Hierarchy: MR as foundational theory (#17) → five analytical frameworks → MR-AI (#20) as the framework combining them all for AI applications.',
      theory: {
        title: 'MR — Foundational Theory (project #17)',
        text:  'Relational Mathematics (MR) is an original mathematical theory describing the structure of prime numbers through the lens of rhythmic relations, partitions and rotational models — including a hyperbolic proof of the Bertrand–Chebyshev theorem, CRT structures and Q-semigroups. Published as 6 scientific preprints on Zenodo; provides the formal mathematical apparatus for five analytical frameworks.'
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
        tag:    'Own system · 2012–2017',
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
        tech:   'ATtiny2313, RS232, Timer1, software UART, false-start detection, Watchdog reset',
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
      title: 'Case Studies — three branches',
      sub:   'Three projects from different R&D domains — electronics, software, mathematics.',
      cs1: {
        title: 'Boiler Controller — PAC triac vs VFD · temperature delta · ±1°C · 11M records',
        b0: {
          title: 'Problem genesis',
          text:  'A feed-type coal boiler needs a blower — single-phase induction motor, synchronous speed 1500 RPM at 50 Hz. Standard speed control: VFD inverter (200–500 PLN). Available thermostats operate ON/OFF — large temperature oscillations, inefficient combustion, no anticipation of change.'
        },
        b1: {
          title: 'Innovation #1 — triac phase-angle control instead of a VFD inverter',
          text:  'Instead of a VFD: delay triac firing relative to the AC zero crossing (phase-angle control). For a centrifugal fan: torque M ∝ n² — reduced RMS voltage = natural stabilisation at lower speed, without an inverter. Three independent triac channels: blower / pump / boiler. Timer0 ISR measures phase delay every 10 ms (50 Hz network). Additional hardware cost: zero.'
        },
        b2: {
          title: 'Innovation #2 — temperature delta · EMC window · seed of ARR',
          text:  'Discrete temperature derivative computed every 15 s: <strong>T↑ → reduce airflow · T→ → hold · T↓ → increase</strong>. Anticipatory control before the temperature crosses the threshold — equivalent of the D-term of a PID controller, on an 8-bit MCU without libraries. Software EMC window: before each 1-Wire measurement, disable all triacs and both interrupts → zero electromagnetic interference → zero additional hardware. <em>Tendencja_sub is the first known implementation of ARR (Relational Rhythm Analyser) — running in production a decade before the MR-AI framework was formalised (#20).</em>'
        },
        res: {
          title: 'Results (5.5 years of operation)',
          html:  '<li>~11 million measurement records across 61 MDB databases (1.65 GB) — continuous logging for 5.5 years</li><li>79+ firmware versions without system downtime (own USB bootloader)</li><li>Precision: ±1°C CO circuit · average deviation −0.1°C from setpoint over a full heating season on a coal boiler with high thermal inertia</li><li>Foundation for 2 master\'s and 1 engineering theses — all defended with 5/5</li><li>OneDrive as IoT gateway — remote monitoring and control over the internet (2017); an unconventional approach for DIY-class embedded systems at that time</li>'
        }
      },
      cs2: {
        title: 'Autonomous LLM middleware — dual-layer AI memory · FochBot',
        b0: {
          title: 'Problem: LLM is a stateless neuron',
          text:  'An LLM (GPT, Claude) is a one-shot computational unit — receives input, generates output, goes dark. It holds no state between calls. Naive solution: send the full conversation history in every prompt → token cost grows linearly, usefulness declines. FochBot answers: how to build a brain with memory around a stateless neuron?'
        },
        b1: {
          title: 'Innovation: dual-layer brain (Layer A + Layer B)',
          text:  '<strong>Layer A — Memory Map:</strong> three-level on-disk archive — raw sessions (session_*.json), compact index as a catalogue for the LLM, knowledge fragments loaded selectively per query. The LLM always receives exactly the context it needs — no full history. <strong>Layer B — Autonomous Controller:</strong> routing, request completeness check, and context package assembly — locally, without LLM. Then calls the model as a tool, evaluates the result, initiates re-call or escalation if needed. Continuity logic lives in FochBot, not in the model.'
        },
        b2: {
          title: 'Evolution V1→V2→V3',
          text:  'V1 (2024): offline intent classifier — intents.json, NLP (tokenisation, text cleaning), ML classifier, CLI + web interface. V2 (2025): full rebuild as FastAPI microservices — API:8000 (business logic + chat) separated from Auth:8001 (sessions, roles, device tokens). Every /chat request: require_auth() → POST /check_access → in-RAM session check → allowed: true/false + user data. BCRYPT hashes, atomic JSON writes (data_manager.py as sole write-access module), admin/user/device roles. Delivered in 3 phases. V3 (2025–2026): LLM middleware layer with full technical documentation (PDF/DOCX/LaTeX).'
        },
        res: {
          title: 'Results',
          html:  '<li>Token cost = 0 for local tasks — LLM called only when genuinely needed</li><li>Context continuity across sessions without sending full history to the model</li><li>Auth/API separation: security policy changes without touching business logic</li><li>Remote access: code browsing, downloading and editing, service stop/restart, frontend build execution with real-time progress monitoring</li>'
        }
      },
      cs3: {
        title: 'TrueSynth Prime Engine — zero interpolation, zero jitter, 4.7× faster than CMSIS-DSP Q31',
        b0: {
          title: 'Problem: jitter and approximation error baked into the definition',
          text:  'Classical LUT trigonometry interpolates between grid points — any decimal angle rarely lands exactly on a grid point. Interpolation: double cost — computational overhead and approximation error. Core problem: jitter — one angle costs 70 cycles, another 700. CMSIS-DSP Q31 on M4F: nominal 14 cycles/pair but non-deterministic — up to 530 cycles! Error: 18,825 ppb. FOC, DDS, and absolute encoders require identical execution time for every angle.'
        },
        b1: {
          title: 'Innovation: angle as k/p · LUT from primes · 6 engine modes',
          text:  'Angle redefined: instead of radians, proportion <strong>k/p</strong> (p — prime number). Every k/p angle lands EXACTLY on a LUT point — no interpolation needed, identical cost for every angle, jitter = 0. <strong>Prime Engine LUT</strong> (p ≤ 67): 19 primes, 275 entries, <strong>2.2 kB Flash, 0 B RAM</strong>. Six modes: Mode 0 (Chebyshev iterator) · Mode 1 Direct LUT (482 cycles M0, 0 ppb) · Mode 2 Reduce · Mode 3 Nearest · Mode 4 Repeated Squaring · <strong>Mode MI (3 cycles/pair M4F, 0.0 ppb, deterministic)</strong> — dedicated to FOC/DDS/encoders.'
        },
        b2: {
          title: 'Benchmark — hard numbers on hardware',
          text:  '<strong>M4F platform (STM32G474RE, 170 MHz):</strong> Mode MI → <strong>3 cycles/pair · 0.0 ppb · YES deterministic</strong>. CMSIS-DSP Q31 → 14 cycles/pair · 18,825 ppb · NO (up to 530 cycles!). CMSIS-DSP F32 → 178 cycles/pair · 18,978 ppb. <strong>M0 platform (STM32F030R8, 48 MHz):</strong> Prime Direct LUT → 482 cycles · 0 ppb. Classic CORDIC → 271 cycles · 0.9 ppb. LUT 7500 Flash → 798 cycles · 5.6 ppb. Taylor → 888 cycles · 98,000 ppb. <strong>Drift test:</strong> 10<sup>9</sup> steps — final error 2.22×10⁻¹⁶ (IEEE 754 machine epsilon). Drift: 0.'
        },
        res: {
          title: 'Results',
          html:  '<li>4.7× faster than CMSIS-DSP Q31 (14→3 cycles/pair) · jitter eliminated (0 vs up to 530 cycles!)</li><li>Approximation error: 18,825 ppb → 0.0 ppb — algebraically exact result</li><li>Zero drift after 10<sup>9</sup> steps (final error = IEEE 754 epsilon = 2.22×10⁻¹⁶)</li>'
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
