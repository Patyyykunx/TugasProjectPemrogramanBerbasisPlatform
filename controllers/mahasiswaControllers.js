const mahasiswaModel = require('../models/mahasiswaModels');

// 1. Read - Menampilkan semua data
const getAllMahasiswa = (req, res) => {
  const data = mahasiswaModel.getAll();
  res.status(200).json({
    success: true,
    message: "Berhasil mengambil semua data mahasiswa",
    data: data
  });
};

// 2. Detail - Menampilkan data berdasarkan ID
const getMahasiswaById = (req, res) => {
  const data = mahasiswaModel.getById(req.params.id);
  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data mahasiswa dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Detail data mahasiswa ditemukan",
    data: data
  });
};

// 3. Create - Menambahkan data baru
const createMahasiswa = (req, res) => {
  const { nim, nama, prodi } = req.body;
  if (!nim || !nama || !prodi) {
    return res.status(400).json({
      success: false,
      message: "NIM, Nama, dan Prodi wajib diisi!"
    });
  }

  const newData = mahasiswaModel.create({ nim, nama, prodi });
  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data: newData
  });
};

// 4. Update - Mengubah data berdasarkan ID
const updateMahasiswa = (req, res) => {
  const updatedData = mahasiswaModel.update(req.params.id, req.body);
  if (!updatedData) {
    return res.status(404).json({
      success: false,
      message: `Gagal update. Data dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil diperbarui",
    data: updatedData
  });
};

// 5. Delete - Menghapus data berdasarkan ID
const deleteMahasiswa = (req, res) => {
  const deletedData = mahasiswaModel.remove(req.params.id);
  if (!deletedData) {
    return res.status(404).json({
      success: false,
      message: `Gagal menghapus. Data dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil dihapus",
    data: deletedData
  });
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
};