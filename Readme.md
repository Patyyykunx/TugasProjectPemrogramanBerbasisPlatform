# Tugas Project PBF - Sesi 7 (REST API Data Mahasiswa)

Aplikasi backend sederhana menggunakan Node.js dan Express.js untuk mengelola data mahasiswa dengan penyimpanan sementara (array) dan arsitektur MVC (Model, Controller, Routes).

## Cara Menjalankan Project
1. Clone repository ini
2. Jalankan perintah `npm install`
3. Jalankan server dengan perintah `node app.js`
4. Server akan berjalan di `http://localhost:3000`

---

## Dokumentasi Endpoint API

### 1. Menampilkan Semua Data Mahasiswa
* **Method:** `GET`
* **Endpoint:** `/api/mahasiswa`
* **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Berhasil mengambil semua data mahasiswa",
  "data": [
    {
      "id": 1,
      "nim": "2026001",
      "nama": "Andi Saputra",
      "prodi": "Teknik Informatika"
    }
  ]
}