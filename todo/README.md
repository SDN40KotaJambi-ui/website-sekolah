# To-Do List Application

Aplikasi To-Do List modern dengan fitur lengkap dan Local Storage untuk menyimpan data secara persisten.

## 🎯 Fitur Utama

### ✅ Manajemen Tugas
- **Tambah Tugas** - Tambahkan tugas baru dengan mudah
- **Edit Tugas** - Ubah teks tugas yang sudah ada
- **Tandai Selesai** - Tandai tugas sebagai selesai
- **Hapus Tugas** - Hapus tugas secara individual atau massal

### 📊 Filter & Sort
- **Filter Semua** - Tampilkan semua tugas
- **Filter Aktif** - Tampilkan hanya tugas yang belum selesai
- **Filter Selesai** - Tampilkan hanya tugas yang sudah selesai
- **Urutkan** - Urutkan berdasarkan:
  - Terbaru (default)
  - Terlama
  - Status selesai

### 📈 Statistik
- Total tugas
- Jumlah tugas aktif
- Jumlah tugas selesai

### 💾 Penyimpanan Data
- **Local Storage** - Data otomatis tersimpan di browser
- **Export** - Ekspor data ke file JSON
- **Import** - Impor data dari file JSON

### 🎨 UI/UX
- Desain modern dan responsif
- Animasi smooth
- Notifikasi interaktif
- Dukungan penuh untuk mobile

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
```bash
# Buka file index.html di browser
# Atau gunakan live server
```

### 2. Tambah Tugas
1. Ketik tugas di input field
2. Tekan Enter atau klik tombol "Tambah"
3. Tugas akan muncul di list

### 3. Kelola Tugas
- **✓ Tandai Selesai** - Klik checkbox untuk menandai tugas selesai
- **✏️ Edit** - Klik tombol edit untuk mengubah teks
- **🗑️ Hapus** - Klik tombol hapus untuk menghapus tugas

### 4. Filter & Sort
1. Gunakan tombol filter untuk menyaring tugas
2. Gunakan dropdown sort untuk mengurutkan

### 5. Ekspor/Impor
- **Ekspor** - Klik "Export" untuk download data sebagai JSON
- **Impor** - Klik "Import" untuk upload file JSON
- **Hapus Selesai** - Klik untuk menghapus semua tugas selesai

## 📱 Responsive Design

Aplikasi ini fully responsive dan berfungsi baik di:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1200px)
- ✅ Mobile (< 768px)

## 🛠️ Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Styling modern dengan gradient dan animasi
- **Vanilla JavaScript** - Tanpa dependencies
- **Local Storage API** - Penyimpanan data

## 📂 Struktur File

```
todo/
├── index.html      # Halaman utama
├── styles.css      # Styling dan responsive design
├── script.js       # Logic aplikasi
└── README.md       # Dokumentasi
```

## 🎯 Class TodoApp

### Methods Utama

```javascript
// Constructor
constructor()                  // Inisialisasi aplikasi

// Todo Operations
addTodo()                      // Tambah tugas baru
toggleTodo(id)                // Tandai selesai/aktif
deleteTodo(id)                // Hapus tugas
editTodo(id)                  // Edit tugas
clearCompleted()              // Hapus semua selesai

// Filter & Sort
getFilteredTodos()            // Dapatkan tugas terfilter
sortTodos(todos)              // Urutkan tugas

// Storage
saveToStorage()               // Simpan ke local storage
loadFromStorage()             // Muat dari local storage
exportData()                  // Ekspor ke JSON
importData(e)                 // Impor dari JSON

// UI
render()                      // Render ulang UI
showNotification(msg, type)   // Tampilkan notifikasi
```

## 💾 Struktur Data

Setiap tugas menyimpan:
```javascript
{
  id: number,              // Timestamp unik
  text: string,            // Teks tugas (max 200 char)
  completed: boolean,      // Status selesai
  createdAt: string        // ISO timestamp
}
```

## 🎨 CSS Classes

### Layout
- `.container` - Container utama
- `.header` - Header section
- `.main-content` - Konten utama
- `.footer` - Footer section

### Components
- `.todo-item` - Setiap item tugas
- `.todo-list` - List container
- `.stat-card` - Statistik card
- `.filter-btn` - Tombol filter

### States
- `.completed` - Tugas selesai
- `.active` - Filter/button aktif
- `.show` - Notifikasi ditampilkan

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter | Tambah tugas (saat input fokus) |

## 🔒 Security

- XSS Protection dengan HTML escaping
- Input validation
- File validation untuk import
- Safe JSON parsing

## ⚡ Performance

- Minimal DOM manipulation
- Event delegation
- Efficient storage access
- Smooth animations dengan CSS

## 🐛 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Catatan

### Batasan
- Maksimal 200 karakter per tugas
- Data tersimpan per browser (tidak tersinkronisasi antar device)
- Storage tergantung kapasitas local storage browser

### Tips
- Gunakan export secara berkala untuk backup
- Hapus tugas selesai secara rutin untuk performa optimal
- Gunakan filter untuk fokus pada tugas spesifik

## 🚀 Update Mendatang

- [ ] Categories/Tags untuk tugas
- [ ] Priority levels
- [ ] Due dates
- [ ] Recurring tasks
- [ ] Dark mode
- [ ] Cloud sync
- [ ] Collaboration features

## 📄 License

Bebas digunakan untuk keperluan personal dan komersial.

## 📞 Support

Jika menemukan bug atau memiliki saran, silakan hubungi.

---

**Dibuat dengan ❤️ untuk produktivitas Anda**