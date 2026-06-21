# Weather Dashboard

Aplikasi Weather Dashboard modern yang menampilkan prakiraan cuaca real-time dengan data dari OpenWeatherMap API.

## 🌤️ Fitur Utama

### ✨ Informasi Cuaca Real-Time
- **Cuaca Saat Ini** - Suhu, deskripsi, dan ikon cuaca
- **Detail Lengkap** - Kelembaban, kecepatan angin, tekanan, jarak pandang
- **Prakiraan 5 Hari** - Prediksi cuaca harian
- **Prakiraan Per Jam** - Cuaca 24 jam ke depan

### 🔍 Pencarian & Lokasi
- **Pencarian Kota** - Cari cuaca kota mana pun
- **Geolokasi** - Dapatkan cuaca berdasarkan lokasi saat ini
- **Multi-bahasa** - Deskripsi cuaca dalam bahasa Indonesia

### ⭐ Kota Favorit
- Simpan kota pilihan Anda
- Akses cepat dengan satu klik
- Lihat cuaca terkini di card favorit
- Hapus dari favorit kapan saja

### 🎨 UI/UX Modern
- Dark mode support
- Desain responsif penuh
- Animasi smooth
- Notifikasi interaktif

### 💾 Data Persistence
- Simpan favorit di localStorage
- Preferensi tema tersimpan
- Auto-load data saat buka aplikasi

## 🌐 API yang Digunakan

**OpenWeatherMap API**
- Current Weather API
- Forecast API (5 day)
- Geolocation support
- Free tier: 1,000 calls/day

**Endpoint:**
- `https://api.openweathermap.org/data/2.5/weather`
- `https://api.openweathermap.org/data/2.5/forecast`

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
```bash
# Buka file index.html di browser
# Atau gunakan live server
```

### 2. Cari Cuaca
1. Ketik nama kota di input field
2. Tekan Enter atau klik tombol "Cari"
3. Lihat data cuaca real-time

### 3. Gunakan Geolokasi
1. Klik tombol "Lokasi Saya" (📍)
2. Izinkan akses lokasi
3. Cuaca lokasi Anda ditampilkan otomatis

### 4. Kelola Favorit
- Setiap kota yang dicari otomatis ditambah ke favorit
- Klik tombol "Lihat Detail" untuk melihat kota favorit
- Klik tombol X untuk menghapus dari favorit

### 5. Dark Mode
- Klik icon bulan/matahari di footer
- Tema tersimpan otomatis

## 📊 Data yang Ditampilkan

### Cuaca Saat Ini
- 🌡️ Suhu (Celsius)
- 📝 Deskripsi cuaca
- 💧 Kelembaban (%)
- 💨 Kecepatan angin (km/h)
- ⬇️ Tekanan atmosfer (hPa)
- 👁️ Jarak pandang (km)
- 🕐 Waktu update
- 📍 Lokasi (Kota, Negara)

### Prakiraan
- Suhu min-max
- Ikon cuaca
- Deskripsi cuaca
- Kelembaban & angin

## 📱 Responsive Design

Aplikasi ini fully responsive untuk:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1200px)
- ✅ Mobile (< 768px)

## 🛠️ Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Styling modern dengan gradient
- **Vanilla JavaScript** - Tanpa dependencies
- **Fetch API** - Komunikasi dengan OpenWeatherMap API
- **LocalStorage API** - Penyimpanan data lokal
- **Geolocation API** - Akses koordinat pengguna

## 📂 Struktur File

```
weather/
├── index.html      # Halaman utama
├── styles.css      # Styling dan responsive
├── script.js       # Logic aplikasi
└── README.md       # Dokumentasi
```

## 🔑 Konfigurasi API

API key sudah disertakan, tapi Anda bisa mengganti dengan API key Anda sendiri:

1. Daftar di [OpenWeatherMap](https://openweathermap.org/api)
2. Dapatkan API key gratis
3. Ubah nilai `this.apiKey` di script.js

```javascript
this.apiKey = 'YOUR_API_KEY_HERE';
```

## 📋 Class WeatherDashboard

### Methods Utama

```javascript
// Search & Location
search()                           // Cari berdasarkan nama kota
getGeolocation()                   // Dapatkan lokasi pengguna
fetchWeatherByCity(city)           // Ambil cuaca dari nama kota
fetchWeatherByCoords(lat, lon)     // Ambil cuaca dari koordinat

// Data Fetching
fetchForecast(lat, lon)            // Ambil data prakiraan

// Rendering
renderCurrentWeather()             // Tampilkan cuaca saat ini
renderForecast()                   // Tampilkan prakiraan 5 hari
renderHourly()                     // Tampilkan prakiraan per jam
renderFavorites()                  // Tampilkan kota favorit

// Favorites
addToFavorites(name, lat, lon)     // Tambah ke favorit
removeFromFavorites(name)          // Hapus dari favorit
saveFavorites()                    // Simpan favorit ke localStorage
loadFavorites()                    // Muat favorit dari localStorage

// Theme
toggleTheme()                      // Switch dark/light mode
checkDarkMode()                    // Cek preferensi tema

// Utilities
showNotification(msg, type)        // Tampilkan notifikasi
showError(msg)                     // Tampilkan error
clearCache()                       // Hapus semua data
```

## 🌍 Dukungan Kota

Aplikasi mendukung ribuan kota di seluruh dunia:
- Jakarta, Surabaya, Bandung, dll (Indonesia)
- Tokyo, Seoul, Bangkok, dll (Asia)
- London, Paris, Berlin, dll (Eropa)
- New York, Los Angeles, dll (Amerika)
- Dan ribuan kota lainnya

## ⚠️ Error Handling

Aplikasi menangani berbagai error:
- Kota tidak ditemukan
- Koneksi internet error
- API key tidak valid
- Geolokasi ditolak
- Timeout request

## 🔒 Privacy

- Data koordinat tidak disimpan
- Hanya nama kota yang disimpan sebagai favorit
- Tidak ada tracking pengguna
- Semua data lokal di browser

## ⚡ Performance

- Minimal API calls
- Caching data favorit
- Lazy loading images
- Smooth animations dengan CSS
- Responsive UI tanpa lag

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Pembacaan Data** - Suhu dalam Celsius, angin dalam km/h
2. **Update Otomatis** - Data diperbarui setiap kali pencarian
3. **Offline Mode** - Favorit dapat diakses meskipun offline
4. **Akurasi** - Data dari sumber terpercaya (OpenWeatherMap)

## 🚀 Fitur Mendatang

- [ ] Air quality index
- [ ] Pollen forecast
- [ ] Weather alerts
- [ ] Multiple units (Fahrenheit, Kelvin)
- [ ] Weather maps
- [ ] Historical data
- [ ] Sunrise/sunset times
- [ ] UV index

## 📝 Catatan Penting

- Pastikan JavaScript enabled di browser
- Izinkan akses lokasi untuk geolocation
- Koneksi internet diperlukan untuk fetch data API
- API rate limit: 1,000 calls/hari (free tier)

## 🆘 Troubleshooting

### "Kota tidak ditemukan"
- Periksa ejaan nama kota
- Gunakan nama kota dalam bahasa Inggris
- Contoh: "Tokyo" bukan "Tokio"

### "Geolokasi tidak bekerja"
- Izinkan akses lokasi di browser settings
- Gunakan HTTPS (tidak berfungsi di HTTP lokal)
- Coba browser lain

### "Tidak ada data cuaca"
- Periksa koneksi internet
- Coba refresh halaman
- Periksa API key di console

## 📞 Support

Jika ada pertanyaan atau masalah, silakan hubungi pengembang.

---

**Dibuat dengan ❤️ untuk cuaca yang lebih baik**

Happy weather checking! 🌤️