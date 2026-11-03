/**
 * ============================================================================
 * BEM POLINEF - WELCOME & MEMBER LIST JAVASCRIPT
 * Pure Vanilla JavaScript (Tanpa Framework / Library Eksternal)
 * ============================================================================
 */

// ============================================================================
// DATA RESMI 40 ANGGOTA BARU BEM POLINEF PERIODE 2026–2027 (A - Z)
// Sumber Acuan Resmi: STRUKTUR_KEPENGURUSAN_BEM_v8.docx
// Nomenklatur: Kementerian (10 Kementerian, Total 40 Anggota Baru)
// ============================================================================
const DATA_ANGGOTA_BEM = [
  { no: 1,  nama: "Abdiwanto An Naafi Sully",                  kementerian: "KWU",       biro: "KWU" },
  { no: 2,  nama: "Afni Mufidah Patiran",                      kementerian: "SOSPOL-AP", biro: "SOSPOL-AP" },
  { no: 3,  nama: "Afrifah Nur Sofia",                         kementerian: "MINBAK",    biro: "MINBAK" },
  { no: 4,  nama: "Aishwarya",                                 kementerian: "ADKESMA",   biro: "ADKESMA" },
  { no: 5,  nama: "Arman Suwakul",                             kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 6,  nama: "Awaluna Sheila Fiambadar",                  kementerian: "KESPER",    biro: "KESPER" },
  { no: 7,  nama: "Ayu Dwi Traningtias",                       kementerian: "LINGDUP",   biro: "LINGDUP" },
  { no: 8,  nama: "Benidiktus Weripang",                       kementerian: "KEAG",      biro: "KEAG" },
  { no: 9,  nama: "Cahaya Aulia Pratiwi",                      kementerian: "HUMKOM",    biro: "HUMKOM" },
  { no: 10, nama: "Cahaya Kinanti",                            kementerian: "PSDM",      biro: "PSDM" },
  { no: 11, nama: "Cindi Claudya Worumi",                      kementerian: "PSDM",      biro: "PSDM" },
  { no: 12, nama: "Elias Yusuf Muri",                          kementerian: "HUMKOM",    biro: "HUMKOM" },
  { no: 13, nama: "Fachri Nursyah Rumodar",                    kementerian: "KWU",       biro: "KWU" },
  { no: 14, nama: "Fadlam Lethulur",                           kementerian: "ADKESMA",   biro: "ADKESMA" },
  { no: 15, nama: "Fahri Darmawan Tri Saputra Wagaubin",       kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 16, nama: "Geri Roy Imbir",                            kementerian: "PSDM",      biro: "PSDM" },
  { no: 17, nama: "Gloria Arzety Mamahit",                     kementerian: "KEAG",      biro: "KEAG" },
  { no: 18, nama: "Ihlaszulfiqih Hatta",                       kementerian: "KEAG",      biro: "KEAG" },
  { no: 19, nama: "Ilham Sileuw",                              kementerian: "PSDM",      biro: "PSDM" },
  { no: 20, nama: "Lashadid",                                  kementerian: "LINGDUP",   biro: "LINGDUP" },
  { no: 21, nama: "Masa'ad Nazuwa Attamimi",                   kementerian: "MINBAK",    biro: "MINBAK" },
  { no: 22, nama: "Merisa Rumasukun",                          kementerian: "HUMKOM",    biro: "HUMKOM" },
  { no: 23, nama: "Muh. Setiawan",                             kementerian: "SOSPOL-AP", biro: "SOSPOL-AP" },
  { no: 24, nama: "Nurul Rahmaniarti Utami",                   kementerian: "LINGDUP",   biro: "LINGDUP" },
  { no: 25, nama: "Oktovitrinyo Bruno Sidi",                   kementerian: "KESPER",    biro: "KESPER" },
  { no: 26, nama: "Rasti Sangia Manur",                        kementerian: "KEAG",      biro: "KEAG" },
  { no: 27, nama: "Rifaldo Rua Patilejo",                      kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 28, nama: "Rika Fardila Rumasukun",                    kementerian: "KWU",       biro: "KWU" },
  { no: 29, nama: "Rizqi Dayan Samay",                         kementerian: "LINGDUP",   biro: "LINGDUP" },
  { no: 30, nama: "Salvilhya Geisya Anggraini",                kementerian: "ADKESMA",   biro: "ADKESMA" },
  { no: 31, nama: "Sayidah Musyahadah Tanggahma",              kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 32, nama: "Shandy Falirat",                            kementerian: "SOSPOL-AP", biro: "SOSPOL-AP" },
  { no: 33, nama: "Sindi Amalia",                              kementerian: "KESPER",    biro: "KESPER" },
  { no: 34, nama: "Siti Maharia Putri Sasa Mauw",              kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 35, nama: "Siti Nafila Zaelam Iba",                    kementerian: "KESPER",    biro: "KESPER" },
  { no: 36, nama: "Thalib Yuslam",                             kementerian: "SOSPOL-AP", biro: "SOSPOL-AP" },
  { no: 37, nama: "Vrian Adam Tuturop",                        kementerian: "RINBANG",   biro: "RINBANG" },
  { no: 38, nama: "Wahadit Taruma",                            kementerian: "SOSPOL-AP", biro: "SOSPOL-AP" },
  { no: 39, nama: "Wahyudin Hombahomba",                       kementerian: "ADKESMA",   biro: "ADKESMA" },
  { no: 40, nama: "Zulfikar Zulkarnaen Tedja Baraweri",        kementerian: "MINBAK",    biro: "MINBAK" }
];

// Metadata keterangan lengkap 10 Kementerian BEM POLINEF
const KETERANGAN_KEMENTERIAN = {
  "ADKESMA": "Kementerian Advokasi & Kesejahteraan Mahasiswa",
  "RINBANG": "Kementerian Riset & Pengembangan",
  "PSDM": "Kementerian Pengembangan Sumber Daya Mahasiswa",
  "MINBAK": "Kementerian Minat & Bakat",
  "LINGDUP": "Kementerian Lingkungan Hidup",
  "KWU": "Kementerian Kewirausahaan",
  "HUMKOM": "Kementerian Humas & Komunikasi",
  "KEAG": "Kementerian Keagamaan",
  "KESPER": "Kementerian Kesekretariatan & Personalia",
  "SOSPOL-AP": "Kementerian Sosial Politik & Aksi Propaganda"
};
const KETERANGAN_BIRO = KETERANGAN_KEMENTERIAN;

// ============================================================================
// HELPER SEARCH & NORMALIZATION (100% MAXIMUM CAPABILITY)
// ============================================================================

/**
 * Normalisasi string: lowercase, hilangkan aksen/diakritik, rapikan spasi,
 * dan samakan variasi tanda kutip (apostrof smart/curly).
 * @param {string} str 
 * @returns {string}
 */
const normalizeText = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Membuat pola regex aman untuk mencocokkan kata dengan toleransi apostrof/tanda hubung
 * @param {string} token 
 * @returns {string}
 */
const buildTokenPattern = (token) => {
  const clean = token.replace(/['’‘`-]/g, "");
  const chars = clean.split("").map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return chars.join("['’‘`-]*");
};

/**
 * Memeriksa apakah data anggota cocok dengan kata kunci pencarian.
 * Mendukung:
 * 1. Multi-kata / tokenized search (misal "Fahri Wagaubin" atau "Siti Mauw")
 * 2. Toleransi apostrof (misal "masaad" cocok dengan "Masa'ad")
 * 3. Pencarian nomor urut (misal "01", "1", "25", "#25")
 * 4. Pencarian kode kementerian (misal "KWU", "adkesma", "rinbang")
 * @param {Object} item 
 * @param {string} rawQuery 
 * @returns {boolean}
 */
const matchMember = (item, rawQuery) => {
  if (!rawQuery) return true;

  const query = rawQuery.trim();
  if (!query) return true;

  const normQuery = normalizeText(query);
  const normName = normalizeText(item.nama);
  const deptCode = item.kementerian || item.biro || "";
  const normDept = normalizeText(deptCode);
  const itemNoStr = item.no.toString();
  const itemNoPad = item.no < 10 ? `0${item.no}` : `${item.no}`;

  // 1. Cek pencarian nomor urut langsung (misal "01", "1", "25", "#25")
  const cleanQueryDigits = query.replace(/[^0-9]/g, "");
  if (cleanQueryDigits && (cleanQueryDigits === itemNoStr || cleanQueryDigits === itemNoPad)) {
    return true;
  }

  // 2. Tokenized search multi-kata
  const strippedName = normName.replace(/['\-]/g, "");
  const strippedQuery = normQuery.replace(/['\-]/g, "");

  const tokens = normQuery.split(" ").filter((t) => t.length > 0);
  const strippedTokens = strippedQuery.split(" ").filter((t) => t.length > 0);

  // Semua kata/token harus ada di dalam nama atau kode kementerian
  return tokens.every((token, i) => {
    const sToken = strippedTokens[i] || token;
    const inName = normName.includes(token) || strippedName.includes(sToken);
    const inDept = normDept.includes(token);
    return inName || inDept;
  });
};

/**
 * Memberikan efek highlight <mark class="search-highlight"> pada teks nama
 * @param {string} fullName 
 * @param {string} rawQuery 
 * @returns {string}
 */
const highlightText = (fullName, rawQuery) => {
  if (!rawQuery) return fullName;

  const cleanQuery = rawQuery.trim();
  if (!cleanQuery) return fullName;

  // Filter token kata (abaikan jika murni angka untuk pencarian nomor urut)
  const tokens = cleanQuery
    .split(/\s+/)
    .filter((t) => t.length > 0 && !/^[0-9]+$/.test(t));

  if (tokens.length === 0) return fullName;

  try {
    const patterns = tokens.map(buildTokenPattern);
    const regex = new RegExp(`(${patterns.join("|")})`, "gi");
    return fullName.replace(regex, '<mark class="search-highlight">$1</mark>');
  } catch (e) {
    return fullName;
  }
};

// ============================================================================
// LOGIKA UTAMA & INTERAKSI
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Elemen Layar & Navigasi Antar Halaman
  const splashScreen = document.getElementById("splash-screen");
  const prankScreen = document.getElementById("prank-screen");
  const welcomeScreen = document.getElementById("welcome-screen");
  const memberScreen = document.getElementById("member-screen");
  const scrollBody = memberScreen.querySelector(".member-scroll-body");

  // 2. Elemen Halaman Prank & Reveal
  const prankRejectionBody = document.getElementById("prank-rejection-body");
  const prankRevealBody = document.getElementById("prank-reveal-body");
  const prankAlertTitle = document.getElementById("prank-alert-title");
  const prankLoadingFill = document.getElementById("prank-loading-fill");
  const btnContinueWelcome = document.getElementById("btn-continue-welcome");
  const confettiCanvas = document.getElementById("confetti-canvas");

  // 3. Tombol Navigasi
  const btnViewMembers = document.getElementById("btn-view-members");
  const btnBack = document.getElementById("btn-back");

  // 4. Komponen Pencarian & Filter
  const inputSearch = document.getElementById("input-search");
  const btnClearSearch = document.getElementById("btn-clear-search");
  const biroFilterContainer = document.getElementById("biro-filters");
  const filterChips = document.querySelectorAll(".filter-chip");
  const membersListContainer = document.getElementById("members-list");
  const listMetaInfo = document.getElementById("list-meta-info");
  const emptyState = document.getElementById("empty-state");
  const emptyTitle = document.getElementById("empty-title");
  const emptyDesc = document.getElementById("empty-desc");
  const btnResetFilter = document.getElementById("btn-reset-filter");

  // 5. Toast Notification
  const toastNotification = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  let toastTimeout = null;

  // 6. State Aktif
  let currentSearchKeyword = "";
  let currentSelectedBiro = "ALL";
  let soundEnabled = true;

  /**
   * Menampilkan pesan toast interaktif
   * @param {string} message 
   */
  const showToast = (message) => {
    if (!toastNotification || !toastMessage) return;

    toastMessage.textContent = message;
    toastNotification.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 2800);
  };

  /**
   * Web Audio API Synthesizer - Celebration Arpeggio Chime
   * Ringan, offline 100%, tanpa perlu aset file .mp3 eksternal
   */
  let audioCtx = null;
  const playCelebrationSound = () => {
    if (!soundEnabled) return;

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      // Arpeggio Chord: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.50Hz)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const startTime = audioCtx.currentTime;

      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime + index * 0.09);

        gain.gain.setValueAtTime(0.0001, startTime + index * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.18, startTime + index * 0.09 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + index * 0.09 + 0.35);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(startTime + index * 0.09);
        osc.stop(startTime + index * 0.09 + 0.38);
      });
    } catch (e) {
      // Abaikan jika browser memblokir audio autoplay sebelum interaksi
    }
  };

  /**
   * Canvas Confetti Particle Engine (Ringan & Cepat)
   */
  const triggerConfetti = () => {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext("2d");
    if (!ctx) return;

    const rect = confettiCanvas.getBoundingClientRect();
    const width = (confettiCanvas.width = rect.width || window.innerWidth || 380);
    const height = (confettiCanvas.height = rect.height || window.innerHeight || 640);

    const colors = [
      "#FFC94D", "#FF9F1C", "#60A5FA", "#38BDF8",
      "#34D399", "#C084FC", "#F472B6", "#FBBF24"
    ];
    const particleCount = 55;
    const particles = [];

    const originX = width / 2;
    const originY = height * 0.45;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 7;
      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3.2,
        size: 6 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        shape: Math.random() > 0.4 ? "rect" : "circle"
      });
    }

    let animFrameId = null;
    const startTime = performance.now();
    const duration = 3400; // 3.4 detik

    const render = (now) => {
      const elapsed = now - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, width, height);
        if (animFrameId) cancelAnimationFrame(animFrameId);
        return;
      }

      const fadeOutFactor = elapsed > 2400 ? 1 - (elapsed - 2400) / 1000 : 1;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravitasi
        p.vx *= 0.98; // gesekan udara
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity * fadeOutFactor);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);
  };

  /**
   * Memformat nomor urut agar selalu 2 digit (01, 02, ..., 40)
   * @param {number} num 
   * @returns {string}
   */
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  /**
   * Mengembalikan kelas CSS spesifik untuk badge kementerian
   * @param {string} code 
   * @returns {string}
   */
  const getKementerianBadgeClass = (code) => {
    const slug = (code || "").toLowerCase().replace(/[^a-z0-9]/g, "-");
    return `biro-${slug} kementerian-${slug}`;
  };
  const getBiroBadgeClass = getKementerianBadgeClass;

  /**
   * Memilih kementerian secara programatis
   * @param {string} kementerianCode 
   */
  const setKementerianFilter = (kementerianCode) => {
    currentSelectedBiro = kementerianCode;
    filterChips.forEach((chip) => {
      const chipVal = chip.getAttribute("data-kementerian") || chip.getAttribute("data-biro");
      const isMatch = chipVal === kementerianCode;
      chip.classList.toggle("active", isMatch);
      chip.setAttribute("aria-selected", isMatch ? "true" : "false");
      if (isMatch) {
        chip.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }
    });
  };
  const setBiroFilter = setKementerianFilter;

  /**
   * Merender daftar anggota dengan algoritma pencarian maksimal & cerdas
   */
  const renderMembers = () => {
    // 1. Filter data berdasarkan multi-kata, toleransi apostrof, & filter kementerian
    const filtered = DATA_ANGGOTA_BEM.filter((item) => {
      const matchSearch = matchMember(item, currentSearchKeyword);
      const deptCode = item.kementerian || item.biro;
      const matchDept = currentSelectedBiro === "ALL" || deptCode === currentSelectedBiro;
      return matchSearch && matchDept;
    });

    // 2. Perbarui teks meta jumlah anggota yang ditemukan
    if (listMetaInfo) {
      if (currentSearchKeyword.trim()) {
        const kementerianLabel = currentSelectedBiro !== "ALL" ? ` di Kementerian ${currentSelectedBiro}` : "";
        listMetaInfo.innerHTML = `
          <span>Ditemukan <strong>${filtered.length}</strong> anggota${kementerianLabel} untuk &ldquo;<strong>${escapeHTML(currentSearchKeyword)}</strong>&rdquo;</span>
        `;
      } else if (currentSelectedBiro !== "ALL") {
        listMetaInfo.innerHTML = `
          <span>Menampilkan <strong>${filtered.length}</strong> anggota Kementerian ${currentSelectedBiro}</span>
        `;
      } else {
        listMetaInfo.innerHTML = `
          <span>Menampilkan <strong>${filtered.length}</strong> dari 40 anggota</span>
        `;
      }
    }

    // 3. Tangani kasus data tidak ditemukan (Empty State Cerdas)
    if (filtered.length === 0) {
      membersListContainer.innerHTML = "";
      membersListContainer.style.display = "none";
      emptyState.style.display = "flex";

      // Cek apakah nama yang dicari sebenarnya ada di kementerian lain
      if (currentSearchKeyword.trim() && currentSelectedBiro !== "ALL") {
        const crossMatches = DATA_ANGGOTA_BEM.filter((item) => matchMember(item, currentSearchKeyword));
        
        if (crossMatches.length > 0) {
          const first = crossMatches[0];
          const actualDept = first.kementerian || first.biro;
          emptyTitle.textContent = "Tidak ada di kementerian ini.";
          emptyDesc.innerHTML = `
            <strong>${first.nama}</strong> terdaftar di <strong>Kementerian ${actualDept}</strong>.
            <br>
            <button type="button" class="btn-suggest-all" id="btn-switch-suggest">
              Lihat di Kementerian ${actualDept}
            </button>
          `;

          const btnSwitch = document.getElementById("btn-switch-suggest");
          if (btnSwitch) {
            btnSwitch.onclick = () => {
              setKementerianFilter(actualDept);
              renderMembers();
            };
          }
          return;
        }
      }

      emptyTitle.textContent = "Nama anggota tidak ditemukan.";
      emptyDesc.textContent = "Coba periksa ejaan nama atau pilih filter kementerian lainnya.";
      return;
    }

    // 4. Tampilkan daftar kartu dan sembunyikan empty state
    membersListContainer.style.display = "flex";
    emptyState.style.display = "none";

    // 5. Susun markup kartu anggota dengan text highlighting yang aman
    const htmlCards = filtered.map((item) => {
      const formattedNo = formatNumber(item.no);
      const deptCode = item.kementerian || item.biro;
      const badgeClass = getKementerianBadgeClass(deptCode);
      const keterangan = KETERANGAN_KEMENTERIAN[deptCode] || deptCode;
      const highlightedName = highlightText(item.nama, currentSearchKeyword);

      return `
        <article class="member-card" role="listitem">
          <div class="member-number" aria-hidden="true">${formattedNo}</div>
          <div class="member-info">
            <h3 class="member-name">${highlightedName}</h3>
            <div class="member-badge-wrap">
              <span class="biro-badge kementerian-badge ${badgeClass}" title="${keterangan}">
                ${deptCode}
              </span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    membersListContainer.innerHTML = htmlCards;
  };

  /**
   * Escape HTML untuk keamanan XSS
   * @param {string} str 
   * @returns {string}
   */
  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ==========================================================================
  // SISTEM CLEAN URL & SPA ROUTER
  // ==========================================================================

  /**
   * Menentukan base path saat ini (mendukung root domain maupun subpath lokal)
   */
  const getBasePath = () => {
    if (window.location.protocol === 'file:') return '';
    let p = window.location.pathname;
    if (p.endsWith('/index.html')) p = p.slice(0, -11);
    p = p.replace(/\/(anggota|welcome)\/?$/, '');
    return p.replace(/\/+$/, '');
  };

  const BASE_PATH = getBasePath();

  /**
   * Mendapatkan rute aktif berdasarkan URL (pathname atau hash)
   * @returns {'home' | 'welcome' | 'anggota'}
   */
  const getCurrentRoute = () => {
    const path = window.location.pathname;
    const hash = (window.location.hash || '').toLowerCase();

    if (path.includes('/anggota') || hash === '#anggota' || hash === '#/anggota') {
      return 'anggota';
    }
    if (path.includes('/welcome') || hash === '#welcome' || hash === '#/welcome') {
      return 'welcome';
    }
    return 'home';
  };

  /**
   * Memperbarui URL di browser tanpa reload (Clean URL)
   * @param {string} route 
   * @param {'push' | 'replace'} mode 
   */
  const updateUrl = (route, mode = 'push') => {
    if (window.location.protocol === 'file:') return;

    let targetPath = BASE_PATH;
    let pageTitle = 'BEM POLINEF - Pengumuman & Anggota Baru 2026–2027';

    if (route === 'anggota') {
      targetPath = (targetPath ? targetPath : '') + '/anggota';
      pageTitle = 'Daftar Anggota Baru 2026–2027 - BEM POLINEF';
    } else if (route === 'welcome') {
      targetPath = (targetPath ? targetPath : '') + '/welcome';
      pageTitle = 'Welcome - BEM POLINEF 2026–2027';
    } else {
      targetPath = (targetPath ? targetPath : '') + '/';
      pageTitle = 'BEM POLINEF - Pengumuman & Anggota Baru 2026–2027';
    }

    targetPath = targetPath.replace(/\/+/g, '/');

    try {
      if (mode === 'replace') {
        window.history.replaceState({ route }, pageTitle, targetPath);
      } else {
        window.history.pushState({ route }, pageTitle, targetPath);
      }
      document.title = pageTitle;
    } catch (e) {}
  };

  // ==========================================================================
  // ALUR NAVIGASI ANTAR LAYAR (5 TAHAP)
  // ==========================================================================

  /**
   * Tahap 2 -> 3: Eksekusi Plot Twist Prank (Rejection -> Reveal)
   */
  const executePlotTwist = () => {
    // Mulai animasi glitch dan shake pada view rejection
    if (prankRejectionBody) prankRejectionBody.classList.add("glitching");
    if (prankAlertTitle) prankAlertTitle.classList.add("glitching");

    // Transisi perubahan konten di detik ke 0.42 setelah glitch
    setTimeout(() => {
      if (prankRejectionBody) {
        prankRejectionBody.classList.remove("glitching");
        prankRejectionBody.style.display = "none";
      }
      if (prankAlertTitle) prankAlertTitle.classList.remove("glitching");

      // Aktifkan celebration mood pada prankScreen (background beralih ke festive pastel)
      if (prankScreen) {
        prankScreen.classList.add("is-celebrating");
      }

      if (prankRevealBody) {
        prankRevealBody.style.display = "flex";
      }

      // Picu efek audio dan semburan confetti ke seluruh viewport
      playCelebrationSound();
      triggerConfetti();
    }, 420);
  };

  /**
   * Tahap 3 -> 4: Navigasi dari Success Reveal ke Welcome Screen
   * @param {boolean} updateHistory
   */
  const navigateFromRevealToWelcome = (updateHistory = true) => {
    if (prankScreen) {
      prankScreen.classList.remove("active");
      prankScreen.classList.add("slide-out-left");
    }

    if (welcomeScreen) {
      welcomeScreen.classList.add("is-visible", "active");
      welcomeScreen.classList.remove("slide-out-left");
    }

    if (updateHistory) {
      updateUrl('home', 'replace');
    }
  };

  /**
   * Tahap 4 -> 5: Navigasi dari Welcome Screen ke Halaman Daftar Anggota
   * @param {boolean} updateHistory
   */
  const navigateToMemberList = (updateHistory = true) => {
    if (welcomeScreen) {
      welcomeScreen.classList.remove("active");
      welcomeScreen.classList.add("slide-out-left");
    }

    if (memberScreen) {
      memberScreen.classList.add("active");
      memberScreen.classList.remove("slide-out-right");
    }

    if (scrollBody) {
      scrollBody.scrollTo({ top: 0, behavior: "instant" });
    }

    renderMembers();

    if (updateHistory) {
      updateUrl('anggota', 'push');
    }
  };

  /**
   * Tahap 5 -> 4: Navigasi kembali dari Daftar Anggota ke Welcome Screen
   * @param {boolean} updateHistory
   */
  const navigateToWelcome = (updateHistory = true) => {
    if (memberScreen) {
      memberScreen.classList.remove("active");
      memberScreen.classList.add("slide-out-right");
    }

    if (welcomeScreen) {
      welcomeScreen.classList.add("active");
      welcomeScreen.classList.remove("slide-out-left");
    }

    if (updateHistory) {
      updateUrl('welcome', 'push');
    }
  };

  // ==========================================================================
  // EVENT LISTENERS INTERAKSI PENGGUNA & AUDIO
  // ==========================================================================

  // Inisialisasi Audio Context otomatis pada gestur pertama pengguna (agar audio selalu siap diputar)
  const initAudioOnUserGesture = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass && !audioCtx) {
        audioCtx = new AudioContextClass();
      }
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
    } catch (e) {}
  };
  document.addEventListener("click", initAudioOnUserGesture, { once: true, passive: true });
  document.addEventListener("touchstart", initAudioOnUserGesture, { once: true, passive: true });

  // 1. Tombol Lanjutkan dari Reveal ke Welcome Screen
  if (btnContinueWelcome) {
    btnContinueWelcome.addEventListener("click", () => {
      navigateFromRevealToWelcome();
    });
  }

  // 3. Tombol Buka Daftar Anggota dari Welcome Screen
  if (btnViewMembers) {
    btnViewMembers.addEventListener("click", () => {
      navigateToMemberList();
    });
  }

  // 4. Tombol Kembali dari Daftar Anggota ke Welcome Screen
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      navigateToWelcome();
    });
  }

  // 5. Kolom Pencarian Langsung (Live Real-time Search)
  if (inputSearch) {
    inputSearch.addEventListener("input", (e) => {
      currentSearchKeyword = e.target.value;

      // Kontrol tombol hapus (clear button)
      if (btnClearSearch) {
        btnClearSearch.style.display = currentSearchKeyword.trim().length > 0 ? "flex" : "none";
      }

      renderMembers();
    });

    // Dukungan tombol Escape untuk membersihkan pencarian
    inputSearch.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (inputSearch.value) {
          inputSearch.value = "";
          currentSearchKeyword = "";
          if (btnClearSearch) btnClearSearch.style.display = "none";
          renderMembers();
        }
      }
    });
  }

  // 6. Tombol Clear Search
  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      inputSearch.value = "";
      currentSearchKeyword = "";
      btnClearSearch.style.display = "none";
      inputSearch.focus();
      renderMembers();
    });
  }

  // 7. Filter Kementerian
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const selectedKementerian = chip.getAttribute("data-kementerian") || chip.getAttribute("data-biro");
      setKementerianFilter(selectedKementerian);
      renderMembers();
    });
  });

  // 8. Tombol Reset Filter & Pencarian (dari Empty State)
  if (btnResetFilter) {
    btnResetFilter.addEventListener("click", () => {
      inputSearch.value = "";
      currentSearchKeyword = "";
      if (btnClearSearch) btnClearSearch.style.display = "none";

      setKementerianFilter("ALL");
      renderMembers();
      showToast("Pencarian dan filter berhasil direset.");
    });
  }

  // ==========================================================================
  // LOGIKA ALUR PEMBUKA & ROUTING INITIALIZATION
  // ==========================================================================
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startPrankSequence = () => {
    // Munculkan layar prank announcement
    if (prankScreen) {
      prankScreen.classList.add("active");
    }

    // Jalankan animasi pengisian loading bar palsu (3.5 detik)
    setTimeout(() => {
      if (prankLoadingFill) {
        prankLoadingFill.style.width = "100%";
      }
    }, 150);

    // Di detik ke 3.7: Eksekusi plot twist kejutan pengumuman palsu -> lolos
    setTimeout(() => {
      executePlotTwist();
    }, 3700);
  };

  const transitionFromSplashToPrank = () => {
    if (!splashScreen) return;

    splashScreen.classList.add("fade-out");

    const removeSplashFromDOM = () => {
      splashScreen.style.display = "none";
      startPrankSequence();
    };

    splashScreen.addEventListener("transitionend", removeSplashFromDOM, { once: true });
    setTimeout(removeSplashFromDOM, 750);
  };

  // Popstate Listener untuk Navigasi Back/Forward Tombol Browser
  window.addEventListener('popstate', (e) => {
    const route = (e.state && e.state.route) || getCurrentRoute();
    if (route === 'anggota') {
      navigateToMemberList(false);
    } else if (route === 'welcome') {
      navigateToWelcome(false);
    } else {
      if (memberScreen && memberScreen.classList.contains("active")) {
        navigateToWelcome(false);
      }
    }
  });

  // Eksekusi rute awal saat halaman dimuat
  const initialRoute = getCurrentRoute();

  if (initialRoute === 'anggota') {
    // Pengguna membuka link langsung /anggota atau me-refresh halaman anggota
    if (splashScreen) splashScreen.style.display = "none";
    if (prankScreen) prankScreen.classList.remove("active");
    if (welcomeScreen) {
      welcomeScreen.classList.remove("active");
      welcomeScreen.classList.add("slide-out-left");
    }
    if (memberScreen) {
      memberScreen.classList.add("active");
      memberScreen.classList.remove("slide-out-right");
    }
    renderMembers();
    updateUrl('anggota', 'replace');
  } else if (initialRoute === 'welcome') {
    // Pengguna membuka link langsung /welcome atau me-refresh welcome screen
    if (splashScreen) splashScreen.style.display = "none";
    if (prankScreen) prankScreen.classList.remove("active");
    if (welcomeScreen) {
      welcomeScreen.classList.add("is-visible", "active");
      welcomeScreen.classList.remove("slide-out-left");
    }
    updateUrl('welcome', 'replace');
  } else {
    // Pengguna membuka root domain utama (/)
    // Jika dibuka lewat Live Server (defaultnya /index.html), segera bersihkan URL menjadi '/'!
    if (window.location.pathname.endsWith('/index.html')) {
      updateUrl('home', 'replace');
    }

    if (prefersReducedMotion) {
      if (splashScreen) splashScreen.style.display = "none";
      if (prankScreen) prankScreen.classList.add("active", "is-celebrating");
      if (prankRejectionBody) prankRejectionBody.style.display = "none";
      if (prankRevealBody) prankRevealBody.style.display = "flex";
    } else {
      const OPENING_DURATION_MS = 2200;
      setTimeout(transitionFromSplashToPrank, OPENING_DURATION_MS);
    }
  }

  // Render awal data 40 anggota untuk kesiapan member list
  renderMembers();
});
