# 🔍 QR Scanner Indonesia dengan Text-to-Speech

Aplikasi web untuk memindai QR Code dengan fitur text-to-speech dalam bahasa Indonesia. Project ini dibangun menggunakan vanilla JavaScript dengan modul ES6 dan Webpack untuk bundling.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Project](#-struktur-project)
- [Instalasi](#-instalasi)
- [Cara Penggunaan](#-cara-penggunaan)
- [Arsitektur Komponen](#-arsitektur-komponen)
- [API dan Dependencies](#-api-dan-dependencies)
- [Konfigurasi Webpack](#-konfigurasi-webpack)
- [Styling dan UI/UX](#-styling-dan-uiux)
- [Fitur Text-to-Speech](#-fitur-text-to-speech)
- [Testing dan Development](#-testing-dan-development)
- [Troubleshooting](#-troubleshooting)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

## ✨ Fitur Utama

- **QR Code Scanner**: Memindai QR code menggunakan kamera perangkat
- **Text-to-Speech**: Membacakan hasil scan dengan suara dalam bahasa Indonesia
- **Interface Responsif**: Desain yang responsif untuk desktop dan mobile
- **Status Notifikasi**: Feedback visual untuk setiap aksi pengguna
- **Kontrol Scanner**: Mulai, berhenti, dan scan ulang QR code
- **Data Validation**: Sistem pencarian data berdasarkan ID QR code

## 🛠️ Teknologi yang Digunakan

### Core Technologies

- **HTML5**: Struktur dasar aplikasi
- **CSS3**: Styling dengan gradient dan animasi
- **Vanilla JavaScript (ES6+)**: Logika aplikasi dengan modul ES6
- **Webpack 5**: Module bundler dan build tool

### Dependencies

- **html5-qrcode**: Library untuk scanning QR code
- **Web Speech API**: Text-to-speech functionality

### Development Dependencies

- **css-loader**: CSS processing
- **html-webpack-plugin**: HTML template processing
- **mini-css-extract-plugin**: CSS extraction
- **postcss-loader**: CSS optimization
- **webpack-cli**: Webpack command line interface

## 📁 Struktur Project

```
new-projeck-belajar-barcode/
├── components/                 # Modul JavaScript
│   ├── checkup.js             # Data validation logic
│   ├── dom.js                 # DOM element references
│   ├── newScan.js             # New scan functionality
│   ├── onScanSuccess.js       # QR scan success handler
│   ├── QrScanner.js           # QR scanner configuration
│   ├── showStatus.js          # Status notification system
│   ├── speak.js               # Text-to-speech functionality
│   ├── startScan.js           # Scanner start logic
│   └── stopScan.js            # Scanner stop logic
├── public/                    # Static assets
│   ├── index.html             # Main HTML file
│   ├── script.js              # Main JavaScript entry point
│   └── style.css              # Main stylesheet
├── testing/                   # Testing directory
├── package.json               # Project configuration
├── package-lock.json          # Dependency lock file
└── webpack.config.js          # Webpack configuration
```

## 🚀 Instalasi

### Prerequisites

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn package manager

### Langkah Instalasi

1. **Clone atau download project**

   ```bash
   git clone [repository-url]
   cd new-projeck-belajar-barcode
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build project**

   ```bash
   npm run build
   ```

4. **Buka file HTML di browser**
   - Buka `dist/index.html` di browser modern
   - Atau gunakan live server untuk development

## 📖 Cara Penggunaan

### Memulai Scanner

1. Klik tombol **"📷 Mulai Scan QR"**
2. Berikan izin akses kamera ketika diminta
3. Arahkan kamera ke QR code yang ingin di-scan

### Menggunakan Hasil Scan

1. Setelah QR code terdeteksi, hasil akan ditampilkan
2. Klik **"🔊 Baca Ulang"** untuk mendengarkan hasil dengan suara
3. Klik **"🔄 Scan Baru"** untuk memulai scan berikutnya

### Menghentikan Scanner

- Klik tombol **"⏹️ Berhenti Scan"** untuk menghentikan scanner
- Scanner akan otomatis berhenti setelah berhasil memindai QR code

## 🏗️ Arsitektur Komponen

### Core Components

#### `QrScanner.js`

- Konfigurasi utama HTML5 QR Scanner
- Manajemen state scanning
- Export scanner instance dan state variables

#### `startScan.js`

- Inisialisasi scanner dengan konfigurasi kamera
- Handling permission dan error kamera
- UI state management untuk tombol start/stop

#### `onScanSuccess.js`

- Handler untuk QR code yang berhasil di-scan
- Update UI dengan hasil scan
- Trigger text-to-speech
- Otomatis stop scanner

#### `speak.js`

- Implementasi Web Speech API
- Konfigurasi bahasa Indonesia
- Error handling untuk speech synthesis

#### `showStatus.js`

- Sistem notifikasi status
- Auto-hide untuk info dan success messages
- Persistent display untuk error messages

### Utility Components

#### `dom.js`

- Centralized DOM element references
- Memudahkan maintenance dan debugging

#### `newScan.js`

- Reset UI state untuk scan baru
- Restart scanner functionality

#### `stopScan.js`

- Cleanup scanner resources
- UI state management

#### `checkup.js`

- Data validation logic
- Sample data structure untuk testing

## 📚 API dan Dependencies

### html5-qrcode Library

```javascript
// Konfigurasi Scanner
{
  facingMode: "user",        // Kamera depan
  fps: 10,                   // Frame per second
  qrbox: { width: 250, height: 250 }, // Area scan
  aspectRatio: 1.0,          // Aspect ratio
  disableFlip: false         // Enable flip detection
}
```

### Web Speech API

```javascript
// Konfigurasi Text-to-Speech
{
  lang: "id-ID",             // Bahasa Indonesia
  rate: 1,                   // Kecepatan bicara
  pitch: 1                   // Nada suara
}
```

## ⚙️ Konfigurasi Webpack

### Entry Point

- **Entry**: `./public/script.js`
- **Output**: `./dist/bundle.js`

### Loaders

- **CSS Loader**: Processing CSS files
- **PostCSS Loader**: CSS optimization
- **Mini CSS Extract Plugin**: CSS extraction ke file terpisah

### Plugins

- **HtmlWebpackPlugin**: HTML template processing dengan minification
- **MiniCssExtractPlugin**: CSS extraction dengan content hash

## 🎨 Styling dan UI/UX

### Design System

- **Color Scheme**: Gradient purple-blue (`#667eea` to `#764ba2`)
- **Typography**: Segoe UI font family
- **Border Radius**: 15-20px untuk modern look
- **Shadows**: Subtle shadows untuk depth

### Responsive Design

- **Mobile First**: Optimized untuk mobile devices
- **Breakpoints**: 480px untuk mobile optimization
- **Flexible Layout**: Container dengan max-width 500px

### Interactive Elements

- **Button Hover Effects**: Transform dan shadow changes
- **Status Animations**: Pulse animation untuk speaker icon
- **Smooth Transitions**: 0.3s ease transitions

## 🔊 Fitur Text-to-Speech

### Implementasi

- Menggunakan Web Speech API native browser
- Konfigurasi bahasa Indonesia (`id-ID`)
- Error handling untuk browser compatibility

### Warm-up System

```javascript
// Warm-up speech synthesis untuk menghindari delay pertama
speechSynthesis.getVoices();
const warmUp = new SpeechSynthesisUtterance(" ");
speechSynthesis.speak(warmUp);
speechSynthesis.cancel();
```

### Error Handling

- Cancel previous speech sebelum memulai yang baru
- Handle interrupted speech events
- Console logging untuk debugging

## 🧪 Testing dan Development

### Development Workflow

1. **Watch Mode**: `npm run build` dengan `--watch` flag
2. **Live Reload**: Gunakan live server untuk development
3. **Console Logging**: Debug information di browser console

### Testing Data

```javascript
const data = [
  {
    id: "12345",
    nama: "rani nabilah",
    kelas: "3A",
  },
  {
    id: "67890",
    nama: "Nadia Salsabila",
    kelas: "4B",
  },
];
```

### Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

## 🔧 Troubleshooting

### Masalah Umum

#### Kamera Tidak Berfungsi

- **Penyebab**: Izin kamera ditolak
- **Solusi**: Refresh halaman dan berikan izin kamera

#### Text-to-Speech Tidak Berfungsi

- **Penyebab**: Browser tidak mendukung Web Speech API
- **Solusi**: Gunakan browser modern (Chrome, Firefox, Safari)

#### Scanner Lambat

- **Penyebab**: FPS terlalu rendah atau device performance
- **Solusi**: Adjust FPS setting di `startScan.js`

#### QR Code Tidak Terdeteksi

- **Penyebab**: Kualitas QR code atau pencahayaan
- **Solusi**: Pastikan QR code jelas dan pencahayaan cukup

### Debug Mode

- Buka browser console untuk melihat log messages
- Check network tab untuk dependency loading
- Verify camera permissions di browser settings

## 🤝 Kontribusi

### Cara Berkontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Coding Standards

- Gunakan ES6+ syntax
- Modular component structure
- Consistent naming conventions
- Proper error handling
- Responsive design principles

## 📄 Lisensi

Project ini dilisensikan di bawah ISC License.

---

**Dibuat dengan ❤️ untuk pembelajaran QR Code Scanner dan Text-to-Speech di Indonesia**
