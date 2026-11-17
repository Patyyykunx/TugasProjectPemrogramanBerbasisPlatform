const express = require('express');
const app = express();
const PORT = 3000;

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

// Middleware agar bisa membaca JSON dari body request
app.use(express.json());

// Routing utama
app.use('/api/mahasiswa', mahasiswaRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});