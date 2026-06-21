# Website SD Negeri 40 Kota Jambi

Website resmi Sekolah Dasar Negeri 40 Kota Jambi - Sekolah Dasar Unggulan dengan program ekstrakurikuler berkualitas.

## 🎓 Fitur Utama

- ✅ **Responsive Design** - Tampilan sempurna di desktop, tablet, dan mobile
- ✅ **Navigasi Intuitif** - Menu dropdown dan mobile menu yang user-friendly
- ✅ **Galeri Program** - Showcase program unggulan dengan foto berkualitas
- ✅ **Informasi Lengkap** - Profil sekolah, visi misi, sejarah, dan kontak
- ✅ **SEO Optimized** - Meta tags dan schema markup untuk SEO lebih baik
- ✅ **Modal Gallery** - Tampilan foto program dalam modal interaktif
- ✅ **Contact Carousel** - Informasi kontak yang dapat dinavigasi
- ✅ **Smooth Animations** - Fade-in animations untuk pengalaman visual lebih baik

## 📁 Struktur File

```
website-sekolah/
├── index.html          # Halaman utama
├── styles.css          # Styling dan responsive design
├── script.js           # Interaktivitas dan animasi
├── config.json         # Konfigurasi konten (opsional)
├── README.md           # Dokumentasi ini
└── assets/             # Folder untuk aset lokal (opsional)
    ├── images/         # Gambar lokal
    └── fonts/          # Font custom (opsional)
```

## 🚀 Cara Menggunakan

### Instalasi Lokal

1. **Clone repository ini:**
```bash
git clone https://github.com/SDN40KotaJambi-ui/website-sekolah.git
cd website-sekolah
```

2. **Buka file `index.html` di browser:**
   - Klik ganda pada `index.html` atau
   - Gunakan live server seperti VS Code Live Server extension

### Deploy ke Hosting

1. **Download semua file dari repository**
2. **Upload ke hosting menggunakan FTP atau file manager**
3. **Pastikan semua file berada di root directory**
4. **Akses website melalui domain Anda**

## 🎨 Customization

### Mengubah Informasi Sekolah

Untuk mengubah nama, deskripsi, dan informasi sekolah, edit di `index.html`:

```html
<h1 class="font-display text-white drop-shadow-lg text-5xl font-bold">SD Negeri 40 Kota Jambi</h1>
<p class="text-white/90 mt-4 text-lg max-w-2xl mx-auto">Membentuk Generasi Cerdas dan Berkarakter Sejati</p>
```

### Mengubah Warna Tema

Edit di `styles.css` untuk mengubah warna utama:

```css
.nav-link:hover {
  color: #10b981;  /* Ubah warna hijau dengan warna favorit Anda */
}
```

### Menambah Program Baru

Tambahkan data program di `script.js`:

```javascript
const programs = [
  { id: 'program-baru', name: 'Nama Program', desc: 'Deskripsi program' },
  // ...
];
```

## 📱 Responsivitas

Website ini fully responsive dan menggunakan Tailwind CSS untuk styling. Breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO

Website ini dilengkapi dengan:

- Meta tags yang optimized
- Schema markup (JSON-LD) untuk structured data
- Semantic HTML
- Alt text untuk semua gambar
- Mobile-friendly design

## 📦 Dependencies

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide Icons** - Icon library yang indah
- **Google Fonts** - DM Sans dan Playfair Display
- **Vanilla JavaScript** - Tanpa dependencies eksternal untuk interaktivitas

## ⚡ Performance

- Lazy loading untuk semua gambar
- Minimal CSS dan JavaScript
- Optimized CDN links
- Fast load time

## 📞 Kontak & Support

- **Email:** info@sdn40jambi.sch.id
- **Instagram:** @sdn40jambi
- **WhatsApp:** +62 812-3456-7890

## 📝 License

Project ini bebas digunakan dan dimodifikasi untuk keperluan SD Negeri 40 Kota Jambi.

## 🔄 Update & Maintenance

Untuk update konten:

1. Edit file yang diperlukan
2. Commit ke GitHub: `git commit -am "Update konten"`
3. Push ke repository: `git push origin main`

## 💡 Tips

- Gunakan Compress Image Tools untuk mengoptimasi gambar sebelum upload
- Ganti URL gambar dari Pexels dengan gambar lokal untuk performa lebih baik
- Backup file secara berkala
- Test website di berbagai browser dan device

## 🐛 Troubleshooting

### Website tidak tampil dengan baik di mobile
- Pastikan viewport meta tag sudah ada di head
- Refresh page dan clear browser cache

### Gambar tidak muncul
- Periksa URL gambar masih valid
- Gunakan direct image URL dari hosting
- Pastikan Internet connection stabil

### Menu tidak berfungsi
- Buka developer console (F12) untuk cek error
- Pastikan script.js sudah terupload

---

**Dibuat dengan ❤️ untuk SD Negeri 40 Kota Jambi**