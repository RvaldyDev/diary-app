Rafael zahran salimar pranata(2430511034)
# 📖 Diary App - React Native & Expo

Aplikasi buku harian sederhana untuk mencatat aktivitas dan suasana hati (*mood*).

---

## ✨ Fitur Utama
* **Minimal 5 Entri**: Menampilkan daftar catatan harian menggunakan `FlatList`.
* **Variasi Berdasarkan Mood**: Warna latar belakang dan *border* kartu berubah otomatis sesuai *mood* (happy, focus, calm, excited).
* **Gambar Lokal & Remote**: Mendukung aset gambar lokal (`assets/moods/`) dan gambar *remote*.
* **Header Profil**: Dilengkapi avatar pengguna pada bagian atas aplikasi.
* **Struktur Bersih**: Folder terpisah rapi menjadi `src/components/`, `src/screens/`, dan `assets/`.

---

## 📂 Struktur Folder
```text
diary-app/
├── App.js
├── assets/
│   └── moods/
│       └── local_mood.png
└── src/
    ├── components/
    │   └── DiaryCard.js
    └── screens/
        └── DiaryListScreen.js
