# 🚀 Sistem Manajemen Transportasi (OOP JavaScript)

Proyek sederhana ini mengimplementasikan konsep **Object-Oriented Programming (OOP)** dalam JavaScript untuk mengelola penyewaan kendaraan oleh pelanggan.

---

### 🛠️ Struktur Class

#### 1. Class `SistemTransportasi`
Berperan sebagai pengelola pusat data. Class ini menyimpan daftar seluruh pelanggan dan menyediakan logika untuk menyaring siapa saja yang sedang aktif menyewa.


#### 2. Class `Pelanggan`
Representasi data pelanggan. Setiap objek pelanggan menyimpan informasi pribadi dan objek kendaraan yang sedang mereka gunakan. Memiliki metode internal untuk memproses transaksi sewa.


---

### 📖 Kode Program Utama

```javascript
// membuat sistem pengelolaan sistem sewa kendaraan

class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [] // untuk menyimpan semua pelanggan yang terdaftar di sistem
    }

    // mendaftarkan pelanggan ke sistem
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan)
    }
    
    // menampilkan semua pelanggan yang sedang menyewa
    tampilkanPenyewaAktif() {
        console.log("\n=== Daftar Pelanggan yang Sedang Menyewa ===");
        
        const penyewaAktif = this.daftarPelanggan.filter(p => p.kendaraanDisewa)

        if(penyewaAktif.length == 0) {
            console.log("Tidak ada pelanggan yang sedang menyewa.");
        } else {
            penyewaAktif.forEach((p, index) => {
                console.log(`${index + 1}. ${p.tampilkanInfo()}`);
            })
        }
    }
}

class Pelanggan {
    constructor(nama, notelp) {
        this.nama = nama
        this.notelp = notelp
        this.kendaraanDisewa = null // dibuat belum menyewa di awal
    }

    // pelanggan menyewa kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan
        
        console.log(`[Transaksi] ${this.nama} berhasil menyewa ${kendaraan}.`);
    }
    
    // menampilkan info pelanggan
    tampilkanInfo() {
        if(this.kendaraanDisewa) {
            return `Pelanggan: ${this.nama} (${this.notelp}) - Menyewa: ${this.kendaraanDisewa}`
        }

        return `Pelanggan: ${this.nama} belum menyewa kendaraan`
    }
}
```
### 🚀 Penggunaan & Percobaan
Berikut adalah langkah-langkah untuk menjalankan simulasi sistem:
#### 1. Inisialisasi: Membuat objek sistem dan beberapa objek pelanggan
#### 2. Registrasi: Memasukkan pelanggan ke dalam database sistem
#### 3. Transaksi: Pelanggan memilih kendaraan yang akan disewa
#### 4. Monitoring: Menampilkan daftar akhir pelanggan yang berstatus "Menyewa"
```javascript
// menginisiasi sistemTransportasi
const sistemTransportasi = new SistemTransportasi()

// menginisiasi 3 pelanggan 
const pelanggan1 = new Pelanggan("Ahmad Subejo", "0899912323")
const pelanggan2 = new Pelanggan("Karbu Jeruk", "0899945856323")
const pelanggan3 = new Pelanggan("Mehmet Jakmet", "08999972304")

// Menambahkan pelanggan ke sistemTransportasi
sistemTransportasi.tambahPelanggan(pelanggan1)
sistemTransportasi.tambahPelanggan(pelanggan2)
sistemTransportasi.tambahPelanggan(pelanggan3)

// 2 pelanggan mengonfirmasi penyewaan kendaraan
pelanggan1.sewaKendaraan("Yamaha R25")
pelanggan2.sewaKendaraan("Yamaha R1M")

// menampilkan semua pelanggan yang sedang menyewa
sistemTransportasi.tampilkanPenyewaAktif()
```
### 🧪 Hasil Percobaan (Output)
Saat kode dijalankan, sistem akan memberikan log transaksi yang rapi dan memfilter daftar pelanggan sehingga hanya pelanggan "Ahmad Subejo" dan "Karbu Jeruk"* yang muncul dalam daftar penyewa aktif.
```
➜  13-mar git:(main) ✗ node index.js                                                                                                                                     
[Transaksi] Ahmad Subejo berhasil menyewa Yamaha R25.
[Transaksi] Karbu Jeruk berhasil menyewa Yamaha R1M.

=== Daftar Pelanggan yang Sedang Menyewa ===
1. Pelanggan: Ahmad Subejo (0899912323) - Menyewa: Yamaha R25
2. Pelanggan: Karbu Jeruk (0899945856323) - Menyewa: Yamaha R1M
```