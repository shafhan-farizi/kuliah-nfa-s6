// Pengelolaan Sederhana Produk di Toko

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
        console.log(`ID ${p.id}: Nama ${p.nama}, harga Rp${Number(p.harga).toLocaleString('id-ID')}, stok ${p.stok}`);
    })
}

tambahProduk("Kursi Gaming", 500000, 55)
tambahProduk("NVIDIA GeForce RTX 5090", 55000000, 3)
tambahProduk("PC Gaming Ryzen 5/7 (Fullset)", 7285000, 10)

hapusProduk(1)
hapusProduk(2)

tampilkanProduk()