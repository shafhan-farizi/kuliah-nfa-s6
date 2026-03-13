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