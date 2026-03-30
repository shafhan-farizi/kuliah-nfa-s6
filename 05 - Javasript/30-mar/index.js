const produkContainer = document.getElementById("produkContainer");
// Data produk
let produkList = [
	{ id: 1, nama: "Laptop", harga: 1200000 },
	{ id: 2, nama: "Smartphone", harga: 5000000 },
	{ id: 3, nama: "Yamaha R6", harga: 180000000 },
	{ id: 4, nama: "Aprilia RSV4", harga: 570000000 },
	{ id: 5, nama: "Asus J2 Prime", harga: 1000000 },
];

function tambahProduk(...details) {
	const [nama, harga] = details;
	const maxId =
		produkList.length > 0 ? Math.max(...produkList.map((p) => p.id)) : 0;
	const produkBaru = {
		id: maxId + 1,
		nama,
		harga,
	};

	produkList = [...produkList, produkBaru];
	console.log(`Berhasil: Produk baru '${nama}' telah ditambahkan!`);

	tampilkanProduk();
}

function tampilkanProduk() {
	// console.log("\n");
	// console.log("=== Daftar Produk ===");
	// produkList.forEach(({ id, nama, harga }) => {
	// 	console.log(
	// 		`${id} - ${nama} Rp.${Number(harga).toLocaleString("id-ID")}`,
	// 	);
	// });
	// console.log("\n");
	const htmlString = produkList
		.map(
			({ id, nama, harga }) =>
				`<div class="produk-item" onclick="hapusProduk(${id})">${id} - ${nama} Rp.${Number(harga).toLocaleString("id-ID")}</div>`,
		)
		.join("");
	produkContainer.innerHTML = htmlString;
}

function hapusProduk(...id) {
	console.log("\n");
	id.forEach((i) => {
		produkList = produkList.filter((p) => p.id != i);
		console.log(`Produk dengan id: ${i} berhasil dihapus`);
	});

	tampilkanProduk();
}

document.getElementById("tombolTambah").addEventListener("click", (e) => {
	e.preventDefault();

	const nama = document.getElementById("nama").value;
	const harga = document.getElementById("harga").value;

	if (nama && harga) {
		tambahProduk(nama, harga);
		document.getElementById("nama").value = "";
		document.getElementById("harga").value = "";
	} else {
		alert("Lengkapi data terlebih dahulu!");
	}
});

tampilkanProduk();
// tambahProduk("McBurger", 500000);
// tambahProduk("Mx King 550cc", 850000000);
// hapusProduk(1, 2);

// tampilkanProduk();
