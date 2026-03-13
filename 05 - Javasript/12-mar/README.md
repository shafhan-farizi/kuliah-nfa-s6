# 🏪 Sistem Pengelolaan Produk Toko (Simple CRUD)

Aplikasi manajemen inventaris sederhana berbasis JavaScript yang mengimplementasikan operasi dasar untuk mengelola data produk. Proyek ini mendemonstrasikan penggunaan metode array modern seperti `.map()`, `.filter()`, dan `.forEach()`.

---

### 🚀 Fitur Utama

* **Tambah Produk Dinamis**: Menambahkan produk baru dengan perhitungan ID otomatis menggunakan `Math.max`.
* **Hapus Produk**: Menghapus data spesifik berdasarkan ID produk.
* **Visualisasi Data**: Menampilkan daftar stok dengan format mata uang Rupiah (`id-ID`).
* **Keamanan ID**: Menggunakan logika *spread operator* untuk menjamin ID selalu unik meskipun data dihapus di tengah.

---

### 📖 Dokumentasi Kode

#### 1. Struktur Data
Data disimpan dalam sebuah *Array of Objects* yang merepresentasikan atribut produk:
* `id`: Identitas unik (Number).
* `nama`: Nama produk (String).
* `harga`: Harga dalam satuan Rupiah (Number).
* `stok`: Jumlah ketersediaan barang (Number).

#### 2. Fungsi Utama

| Fungsi | Deskripsi |
| :--- | :--- |
| `tambahProduk(n, h, s)` | Menghitung ID tertinggi, membuat objek baru, dan memasukkannya ke daftar. |
| `hapusProduk(id)` | Menyaring (filter) array untuk membuang produk dengan ID tertentu. |
| `tampilkanProduk()` | Melakukan iterasi dan mencetak daftar produk ke konsol dengan format rapi. |

---

### 💻 Kode Program

```javascript
// daftar produk awal
let produkToko = [
	{ id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
	{ id: 2, nama: "Mouse", harga: 200000, stok: 10 },
	{ id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// fungsi untuk memasukkan produk baru
function tambahProduk(nama, harga, stok) {
    const maxId = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) : 0

    const produkBaru = {
        id: maxId + 1,
        nama,
        harga,
        stok
    }

    produkToko.push(produkBaru)
    console.log(`[Baru] Produk ${produkBaru.nama} berhasil ditambahkan`);
}

// fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    produkToko = produkToko.filter(p => p.id != id)
    console.log(`[Dihapus] Produk dengan id ${id} berhasil dihapus`);
}

// fungsi untuk menampilkan seluruh produk yang tersedia
function tampilkanProduk() {
    console.log("\n=== Menampilkan Seluruh Produk yang Tersedia ===");
    produkToko.forEach(p => {
        console.log(`ID ${p.id}: Nama ${p.nama}, Harga Rp${Number(p.harga).toLocaleString('id-ID')}, Stok ${p.stok}`);
    })
}

// === Simulasi Penggunaan ===
tambahProduk("Kursi Gaming", 500000, 55);
tambahProduk("NVIDIA GeForce RTX 5090", 55000000, 3);
tambahProduk("PC Gaming Ryzen 5/7 (Fullset)", 7285000, 10);

hapusProduk(1);
hapusProduk(2);

tampilkanProduk();
```
---

### 🚀 Hasil Percobaan
Berikut adalah hasil percobaannya dengan menggunakan perintah node
```
➜  12-mar git:(main) ✗ node index.js                                                                                                                                     
[Baru] Produk Kursi Gaming berhasil ditambahkan
[Baru] Produk NVIDIA GeForce RTX 5090 berhasil ditambahkan
[Baru] Produk PC Gaming Ryzen 5/7 (Fullset) berhasil ditambahkan
[Dihapus] Produk dengan id 1 berhasil dihapus
[Dihapus] Produk dengan id 2 berhasil dihapus

=== Menampilkan Seluruh Produk yang Tersedia ===
ID 3: Nama Keyboard, harga Rp350.000, stok 7
ID 4: Nama Kursi Gaming, harga Rp500.000, stok 55
ID 5: Nama NVIDIA GeForce RTX 5090, harga Rp55.000.000, stok 3
ID 6: Nama PC Gaming Ryzen 5/7 (Fullset), harga Rp7.285.000, stok 10
```