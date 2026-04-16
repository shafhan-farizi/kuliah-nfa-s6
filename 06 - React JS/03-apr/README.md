# 📚 BookStore V3
[UPDATE] Data buku diambil dari utils/bookList.js.  
_*semua data diambil dari website [Gramedia](https://www.gramedia.com/)_

```javascript
const bookList = [
	{
		id: 1,
		title: "Jalan Panjang untuk Dicintai",
		author: "Nara Lahmusi",
		year: 2026,
		description:
			"Di masa perang, mencintai bisa menjadi bentuk perlawanan paling berbahaya. Pada 1943 di kampung Kulitan kota S, Avifah kehilangan banyak hal: ayahnya, masa depannya, dan hak untuk memilih hidupnya sendiri. Dia dicintai, tapi oleh orang yang salah dan pada waktu yang salah. Ali mencintainya dengan keberanian, sedangkan Baruji mencintainya dengan kesabaran. Saat pengorbanan dua remaja laki-laki itu menuntut harga paling mahal, Avifah bimbang, siapa yang berhak dicintai? Dan siapa yang harus belajar bertahan hidup setelah cinta itu pergi?",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/in-6cxlakk.jpg",
	},
	{
		id: 2,
		title: "3726 MDPL",
		author: "Nurwina Sari",
		year: 2024,
		description:
			"Selain disibukkan dengan skripsi, Rangga, Ketua Panitia OSPEK Fakultas Kehutanan 2023 itu juga menyibukkan dirinya dengan mengagumi Andini. Seorang mahasiswi yang bercita-cita bisa mendaki Gunung Rinjani, sekaligus adik tingkat yang ia sebut sebagai manusia favorit.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/9397p4603v.jpg",
	},
	{
		id: 3,
		title: "Agensi Rumah Tangga",
		author: "Almira Bastari",
		year: 2024,
		description:
			"PHK! Tiga huruf yang mengguncang dunia Katia yang selama ini bangga banget kerja di startup. Berbulan-bulan menganggur, terjepit cicilan KPR, ditambah ocehan ibunya yang pensiunan PNS, Katia nekat membuat rumahnya menjadi yayasan penyalur pembantu. “Agensi Rumah Tangga, solusi untuk rumah tangga Anda. Ada yang bisa saya bantu?” adalah tagline Katia. Mengadu keberuntungan dengan memilih siapa yang paling cocok untuk tiap calon majikan, membuat hidup Katia yang pengangguran makin penuh drama, mulai dari pembantu genit, suka pinjam duit, sampai yang suka berkelit! Apakah Katia akan selalu berhasil menempatkan tiap ART ke majikan yang tepat, agar bisa dapat uang cepat, demi menyelamatkan rumah yang cicilannya nyaris telat?",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2024/5/29/g6z6aqywhspqi2awzf2vcm.jpg",
	},
	{
		id: 4,
		title: "Allure's Reminiscence",
		author: "Aya Widjaja",
		year: 2026,
		description:
			"Sebagai pemilik toko perlengkapan outdoor, Allure melayani setiap pelanggan dengan senang hati. Kecuali pelanggan resek semacam Sangkala—bapak-bapak banyak tanya, padahal beli saja tidak. Sebagai seorang travel influencer, Allure familiar dengan berbagai destinasi, tapi tidak pernah familiar dengan urusan hati laki-laki. Enam tahun lalu, dia pernah jatuh hati pada Remi, tapi tak pernah mengingatnya lagi. Hingga suatu hari, Remi muncul kembali sebagai kekasih sahabatnya, Swara. Kenapa takdir hobi mengusik hidup Allure dengan menghadirkan Bapak Sangkala yang menyusahkan bisnisnya dan Remi yang mempertanyakan hatinya?",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/0ve3eiv52i.jpg",
	},
	{
		id: 5,
		title: "Cover Girl on My Court",
		author: "Della Lesmana",
		year: 2026,
		description:
			"Jatuh cinta pada pandangan pertama bukan cuma mitos—setidaknya buat Kael Sebastian. Iris Amara Putri, gadis sampul yang selalu menjadi pusat perhatian, berhasil mencuri hatinya sejak pertemuan pertama. Demi mendapatkan Iris, Kael rela melakukan apa pun, bahkan memanfaatkan posisinya sebagai ketua basket.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/2y8r1cmlio.jpg",
	},
	{
		id: 6,
		title: "Dear, Je",
		author: "Racherrys",
		year: 2026,
		description:
			"Sebagai seorang istri, Acha merasa cemburu karena Jerriel selalu memprioritaskan teman kecilnya—Rhea—dalam segala hal. Di setiap kesempatan, Rhea juga selalu mengusik rumah tangganya dengan menjadikan penyakit jantung sebagai senjata. Hingga suatu waktu Acha kehilangan kariernya sebagai atlet renang karena kecelakaan bersama Jerriel. Hal yang pada akhirnya membuat Acha mengukir kebencian terhadap kedekatan itu. Dan sebagai seorang teman lama yang memiliki rasa terhadap Acha, Zico selalu hadir sebagai obat, serta bersedia menjadi pelindung Acha.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/6rv98cj9a4.jpg",
	},
	{
		id: 7,
		title: "The Silk Cage",
		author: "Briselette",
		year: 2026,
		description:
			"Di usia 23 tahun, Mikhaila Tanoto tak pernah membayangkan hidupnya akan ditentukan oleh sebuah kesepakatan bisnis yang dibungkus pernikahan. Ia dijodohkan dengan Chatra Handjojo—cucu sulung Robert Handjojo, figur legendaris yang membangun salah satu kerajaan konglomerasi terbesar di Indonesia—demi menyelamatkan kehormatan dan sisa-sisa kekuasaan keluarganya yang nyaris runtuh.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/500ex1xlc1.jpg",
	},
	{
		id: 8,
		title: "I Hope This Doesn`t Find You",
		author: "Ann Liang",
		year: 2026,
		description:
			"Sadie Wen adalah murid teladan yang sempurna. Berhasil jadi kapten sekolah, calon lulusan terbaik, juga selalu ramah dan tidak pernah membuat masalah. Untuk menjaga citra itu, dia menumpahkan semua kekesalan dan unek-uneknya ke dalam draf-draf surel yang tidak pernah dia kirim, terutama tentang si rekan kapten yang paling menyebalkan sedunia, Julius Gong. Baginya, itulah satu-satunya cara agar tetap waras … sampai semua surel itu tidak sengaja terkirim ke orang-orang yang menjadi sasarannya sumpah serapahnya. Dalam sehari, hidup Sadie pun berantakan. Seisi sekolah tahu apa yang selama ini dia pendam, dan mereka tidak segan-segan membalas.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/x7n5zxio30.jpg",
	},
	{
		id: 9,
		title: "When the Sky is Blooming",
		author: "Ilana Tan",
		year: 2024,
		description:
			"Mendadak digosipkan berpacaran dengan aktor idola yang sedang populer? Mendadak dicap sebagai aktris picisan tidak tahu diri yang hanya ingin terkenal? Memang merepotkan, tetapi bukan masalah yang terlalu besar. So-ra masih bisa menghadapinya sendiri. Ada satu masalah lain yang lebih membutuhkan perhatian, yaitu masalah menyangkut kemunculan seorang pria dari masa lalu So-ra yang sudah dilupakannya sama sekali.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/3hl-1-7imn.jpg",
	},
	{
		id: 10,
		title: "Metropop: The Architecture Of Love",
		author: "Ika Natassa",
		year: 2016,
		description:
			"Buku The Architecture Of Love adalah buku yang mengisahkan tentang kehidupan penulis muda, Raia Risjad, yang kehilangan sumber inspirasinya setelah bercerai dengan Alam, mantan suaminya. Raia akhirnya pergi ke New York sebagai pelarian dirinya untuk melupakan kenangan masa lalu dan kendala “writing block” yang ia rasakan.",
		image:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020329260_the_architecture_of_love_3.jpg",
	},
];

export default bookList;
```

### Screenshot Tampilan BookList yang Telah Diperbarui

<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/8439f017f92fa4ab9f889b52f2da2185db8320cd/06%20-%20React%20JS/03-apr/images/tugas3react-1.png?raw=true" width="800"/>
</p>

### Screenshot per Halaman

1. **Home**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/8439f017f92fa4ab9f889b52f2da2185db8320cd/06%20-%20React%20JS/03-apr/images/tugas3react-2.png?raw=true" width="800"/>
</p>

2. **Book**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/8439f017f92fa4ab9f889b52f2da2185db8320cd/06%20-%20React%20JS/03-apr/images/tugas3react-3.png?raw=true" width="800"/>
</p>

3. **Team**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/4ea7b0a0133c6d39dfc9c09dba3c5d08f9046db5/06%20-%20React%20JS/02-apr/images/tugas2react-3.png?raw=true" width="800"/>
</p>

4. **Contact**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/4ea7b0a0133c6d39dfc9c09dba3c5d08f9046db5/06%20-%20React%20JS/02-apr/images/tugas2react-4.png?raw=true" width="800"/>
</p>

5. **Login**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/4ea7b0a0133c6d39dfc9c09dba3c5d08f9046db5/06%20-%20React%20JS/02-apr/images/tugas2react-5.png?raw=true" width="800"/>
</p>

6. **Register**
<p>
    <img src="https://github.com/shafhan-farizi/kuliah-nfa-s6/blob/4ea7b0a0133c6d39dfc9c09dba3c5d08f9046db5/06%20-%20React%20JS/02-apr/images/tugas2react-6.png?raw=true" width="800"/>
</p>
