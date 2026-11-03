# BEM POLINEF — Welcome & Member Onboarding (2026–2027)

Website interaktif pengumuman hasil seleksi dan onboarding 40 anggota baru **Badan Eksekutif Mahasiswa Politeknik Negeri Fakfak (BEM POLINEF)** Periode 2026–2027.

Dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript murni** (tanpa framework, build tools, atau dependensi eksternal), dengan pendekatan **Mobile-First Design** dan konsep visual **Playful Modern Mobile Onboarding**.

---

## ✨ Fitur Utama

1. **Splash Screen:**
   Animasi pembuka logo resmi BEM POLINEF dengan efek pulse aura yang halus.
2. **Interactive Prank Announcement (*Plot Twist*):**
   Pengalaman kejutan pengumuman awal ("Mohon Maaf Tidak Lolos") yang bertransformasi otomatis menjadi kabar bahagia perayaan kelulusan ("Selamat Kamu Lolos!") lengkap dengan Web Audio chime dan efek selebrasi confetti.
3. **Onboarding Welcome Screen:**
   Tampilan welcoming bergaya aplikasi mobile modern dengan elemen 3D pastel floating decorations dan tombol CTA berjarak aman dari *bottom navigation bar* ponsel.
4. **Daftar 40 Anggota Baru (10 Kementerian):**
   - Data resmi sesuai acuan terbaru `STRUKTUR_KEPENGURUSAN_BEM_v8.docx`.
   - Urutan alfabet A–Z dengan nomor urut 01–40.
   - Filter chips interaktif untuk 10 kementerian (ADKESMA, RINBANG, PSDM, MINBAK, LINGDUP, KWU, HUMKOM, KEAG, KESPER, SOSPOL-AP).
   - Fitur pencarian cerdas (toleransi spasi, nama panggilan, nomor urut, dan lintas kementerian).
5. **Clean URL & Vercel Ready:**
   - Navigasi mulus menggunakan HTML5 History API (`/` dan `/anggota`).
   - Dilengkapi `vercel.json` untuk *instant one-click deployment* di Vercel.

---

## 📁 Struktur Direktori

```text
BEM-POLINEF-WELCOME/
│
├── index.html          # Markup utama SPA (Splash, Prank, Welcome, Member List)
├── vercel.json         # Konfigurasi routing rewrite & caching Vercel
├── .gitignore          # File pengabaian git
├── README.md           # Dokumentasi proyek
│
├── css/
│   └── style.css       # Seluruh styling, animasi, layout, dan responsivitas
│
├── js/
│   └── script.js       # Data 40 anggota, audio synthesizer, confetti, filter & search
│
├── assets/
│   └── logo-bem.png    # Aset logo resmi BEM POLINEF
│
└── anggota/
    └── index.html      # Endpoint kompatibilitas direct access / Live Server
```

---

## 🚀 Cara Menjalankan

### Lokal (VS Code Live Server)
1. Buka folder proyek ini di VS Code.
2. Klik kanan pada `index.html` dan pilih **Open with Live Server**.
3. Website akan otomatis terbuka di `http://127.0.0.1:5500/`.

### Deployment ke Vercel
1. Unggah (*push*) folder proyek ini ke repositori GitHub Anda.
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Impor repositori GitHub tersebut.
4. Pada pengaturan Framework Preset, pilih **Other** (karena murni Static HTML).
5. Klik **Deploy**. Website akan langsung aktif secara publik dengan Clean URL otomatis!

