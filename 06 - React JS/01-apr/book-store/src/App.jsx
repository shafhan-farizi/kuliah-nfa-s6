import "./App.css";

function App() {
	return (
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<div className="col-md-3 mb-2 mb-md-0">
					<a
						href="/"
						className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
					>
						<i
							className="fa-solid fa-book fa-2xl"
							style={{ color: "#0d6efd" }}
						></i>
						<span className="ms-1 fs-4">BookStore</span>
					</a>
				</div>
				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					<li>
						<a href="#" className="nav-link px-2 link-secondary">
							Home
						</a>
					</li>
					<li>
						<a href="#book" className="nav-link px-2">
							Book
						</a>
					</li>
					<li>
						<a href="#team" className="nav-link px-2">
							Team
						</a>
					</li>
					<li>
						<a href="#contact" className="nav-link px-2">
							Contact
						</a>
					</li>
				</ul>
				<div className="col-md-3 text-end">
					<button type="button" className="btn btn-outline-primary me-2">
						Login
					</button>
					<button type="button" className="btn btn-primary">
						Sign-up
					</button>
				</div>
			</header>
			<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
					<h1 className="display-4 fw-bold lh-1 text-body-emphasis">
						BU, AKU INGIN PELUKMU
					</h1>
					<p className="lead">
						Menarasikan perjuangan hidup, kesepian, dan usaha menyembuhkan luka
						diri di tengah kerasnya dunia, sebagai bentuk "percakapan" emosional
						dengan sang ibu yang dirindukan.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-5">
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
						>
							Buy Now
						</button>
						<button
							type="button"
							className="btn btn-outline-secondary btn-lg px-4"
						>
							Detail
						</button>
					</div>
				</div>
				<div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
					<img
						className="rounded-lg-3 img-fluid"
						src="https://gradienmediatama.com/wp-content/uploads/2024/12/bu-aku-ingin-pelukmu.jpg"
						alt=""
						width="720"
					/>
				</div>
			</div>
			<section className="py-5 text-center container" id="book">
				<div className="row py-lg-5">
					<div className="col-lg-6 col-md-8 mx-auto">
						<h1 className="fw-light">Best Seller</h1>
						<p className="lead text-body-secondary">
							Jelajahi buku-buku terbaik dengan kualitas terbaik di seluruh
							dunia dan temukan buku favoritmu.
						</p>
						<p>
							<a href="#" className="btn btn-primary my-2 me-2">
								Views
							</a>
							<a href="#" className="btn btn-secondary my-2">
								Other Book
							</a>
						</p>
					</div>
				</div>
			</section>
			<div className="album py-3 mb-5 px-3 bg-body-tertiary">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/5/31/3dswgqvlfhavyeenh59ivk.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										How To Win Friends and Influence People merupakan judul dari
										sebuah buku yang ditulis oleh Dale Carnegie. Buku ini akan
										menghadirkan isi tentang bagaimana cara untuk dapat meraih
										kesuksesan dalam berbisnis maupun kehidupan dengan cara
										meningkatkan kualitas diri.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/-taay9d9m-.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Awalnya, Libra berniat mengakhiri hubungan itu setelah satu
										bulan. Ia bahkan telah merencanakan berbagai cara agar gadis
										pink pergi dengan sendirinya. Namun, seiring berjalannya
										waktu, rasa kosong di hatinya perlahan berubah menjadi benih
										cinta. Keceriaan Lala dan tingkahnya yang tak pernah terduga
										berhasil menyeret Libra ke dalam kisah hidup yang baru.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/b4-h169-3z.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Pernahkah Anda terpikir betapa menariknya dunia yang terbuka
										lebar lewat lembaran buku? Membaca bukan hanya kegiatan
										rutin, tetapi juga petualangan tak terbatas ke dalam
										imajinasi dan pengetahuan.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/r8dggx3v5x.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Lima tahun menghilang setelah tragedi kecelakaan, Aiden
										Nugraha akhirnya kembali ke sisi Rosetta Angelica. Dan, bagi
										Rosetta, tidak ada yang lebih disyukurinya, selain
										kepulangan sang suami dalam kondisi selamat.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/x7n5zxio30.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Sadie Wen adalah murid teladan yang sempurna. Berhasil jadi
										kapten sekolah, calon lulusan terbaik, juga selalu ramah dan
										tidak pernah membuat masalah. Untuk menjaga citra itu, dia
										menumpahkan semua kekesalan dan unek-uneknya ke dalam
										draf-draf surel yang tidak pernah dia kirim, terutama
										tentang si rekan kapten yang paling menyebalkan sedunia,
										Julius Gong. Baginya, itulah satu-satunya cara agar tetap
										waras … sampai semua surel itu tidak sengaja terkirim ke
										orang-orang yang menjadi sasarannya sumpah serapahnya. Dalam
										sehari, hidup Sadie pun berantakan. Seisi sekolah tahu apa
										yang selama ini dia pendam, dan mereka tidak segan-segan
										membalas.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/8-nu0ou0z4.png"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Science translator, Alethea Loveara, hanya pernah sekali
										jatuh cinta. Lima tahun lalu, pada seseorang yang tidak
										diketahui namanya dan berasal dari negara mana. Namun, siapa
										sangka, tepat pada saat Thea sedang membutuhkan suami,
										laki-laki itu—Jaska Bargen, CTO sebuah perusahaan robotic
										vertical farming—muncul di hadapannya. Bak gayung bersambut,
										memiliki istri juga akan menyelesaikan masalah besar yang
										sedang dihadapi Jaska. Menikahi satu sama lain akan
										menguntungkan mereka berdua. Tetapi Jaska menegaskan
										pernikahan itu tidak akan melibatkan cinta.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/ekzs-v6a-r.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Buku Asas Keadilan dan Kebebasan Berkontrak dalam Perjanjian
										Baku Asuransi di Indonesia ini berisikan pembahasan mengenai
										permasalahan bagaimana pengaturan ketentuan
										perundang-undangan terkait asas kebebasan berkontrak dalam
										perjanjian baku asuransi konvensional di Indonesia dapat
										menimbulkan ketidakadilan, bagaimana pelaksanaan ketentuan
										perundangan-undangan terkait perjanjian baku asuransi
										konvensional di Indonesia dapat menimbulkan ketidakadilan
										bagi tertanggung, dan bagaimana pengaturan ideal yang dapat
										memberikan perlindungan bagi tertanggung dalam ketentuan
										perundang-undangan terkait perjanjian baku asuransi
										konvensional di Indonesia guna mewujudkan asas keadilan.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/na8a9eaai5.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Buku ini membahas hukum persaingan usaha di Indonesia secara
										komprehensif dan up to date. Dengan menyajikan analisis
										mendalam tentang regulasi yang mengatur persaingan usaha,
										buku ini memberikan wawasan mengenai tujuan, asas, penerapan
										hukum persaingan usaha di Indonesia, dan perkembangan hukum
										persaingan usaha internasional. Dalam buku ini, para penulis
										mengajak pembaca untuk memahami pengaturan hukum ini dalam
										konteks pasar yang dinamis dan kompleks, serta dampaknya
										terhadap ekonomi dan pelaku usaha.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card shadow-sm">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-contain"
										src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/n7-8v2az7x.jpg"
									/>
								</div>
								<div className="card-body">
									<p className="card-text truncate-overflow">
										Pak, anakmu kelelahan. Aku tumbuh tanpa pelukan dan peran
										Bapak. Akhirnya aku harus mencari figurmu lewat banyak
										orang, hingga berakhir membuatku kehilangan diriku sendiri.
										Pak, ada banyak cerita yang tak kau dengar. Tentang
										kegagalan yang harus kutelan sendiri, kesepian yang menjadi
										sahabatku, juga rasa iri melihat teman-temanku disayang oleh
										ayahnya. Aku juga ingin, Pak. Aku akan selalu membutuhkanmu.
										Tolong peluk aku, Pak. Tolong hadir dalam hidupku. Atau
										setidaknya, beri aku sebuah kalimat yang dapat melegakan
										luka kecilku. “Maafkan Bapak, ya, Nak.”
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary">9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="text-center mb-4" id="team">
				<h2 className="display-5 fw-bold text-body-emphasis">Meet Our Team</h2>
				<p className="lead mx-auto" style={{ maxWidth: "700px" }}>
					Dibalik koleksi buku terbaik, ada tim hebat yang bekerja keras untuk
					menghadirkan literasi berkualitas ke genggaman anda
				</p>
			</section>
			<div className="row g-4 py-5 row-cols-1 row-cols-md-3">
				<div className="col text-center">
					<div className="p-3">
						<div className="mb-4">
							<img
								src="https://i.pinimg.com/736x/15/46/7e/15467ed6d16e0ea0fd01e5b85cf50fa9.jpg"
								className="rounded-circle shadow-lg object-fit-cover"
								alt="team member"
								width="140"
								height="140"
							/>
						</div>
						<h3 className="fw-bold text-body-emphasis fs-4">Almighty Miku</h3>
						<p className="text-primary fw-semibold">CEO & Founder</p>
						<p>
							Ahli dalam strategi bisnis dan pecinta sejarah yang bercita-cita
							membangkitkan literasi anak muda di Indonesia
						</p>
						<div className="d-flex justify-content-center gap-3">
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col text-center">
					<div className="p-3">
						<div className="mb-4">
							<img
								src="https://i.pinimg.com/736x/9f/63/d4/9f63d4b5ad2b66db70fd865435cd329b.jpg"
								className="rounded-circle shadow-lg object-fit-cover"
								alt="team member"
								width="140"
								height="140"
							/>
						</div>
						<h3 className="fw-bold text-body-emphasis fs-4">Lil Luizi</h3>
						<p className="text-primary fw-semibold">Chief Editor</p>
						<p>
							Memastikan setiap buku yang masuk ke BookStore memiliki standar
							kualitas tinggi dan inspiratif
						</p>
						<div className="d-flex justify-content-center gap-3">
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col text-center">
					<div className="p-3">
						<div className="mb-4">
							<img
								src="https://i.pinimg.com/736x/94/fd/b9/94fdb9ffc5541d8d823126bc8741a8be.jpg"
								className="rounded-circle shadow-lg object-fit-cover"
								alt="team member"
								width="140"
								height="140"
							/>
						</div>
						<h3 className="fw-bold text-body-emphasis fs-4">Maira Cortisoal</h3>
						<p className="text-primary fw-semibold">CEO & Founder</p>
						<p>
							Ahli dalam strategi bisnis dan pecinta sejarah yang bercita-cita
							membangkitkan literasi anak muda di Indonesia
						</p>
						<div className="d-flex justify-content-center gap-3">
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="link-secondary">
								<i className="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<section className="text-center mb-4" id="contact">
				<h2 className="display-5 fw-bold text-body-emphasis">Contact Us</h2>
				<p className="lead mx-auto" style={{ maxWidth: "700px" }}>
					Hubungi kami jika anda mengalami masalah dengan layanan BookStore.
					Kami siap membantu dalam 1x24 jam
				</p>
			</section>
			<div className="row mt-5 mb-5">
				<div className="col-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="600"
						height="400"
						viewBox="0 0 799.468 552.327"
						className="injected-svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						role="img"
						artist="Katerina Limpitsouni"
						copyright="unDraw"
						scrapped="true"
						source="https://undraw.co/"
					>
						<g transform="translate(-560.266 -263.836)">
							<path
								d="M1352.3,232.384H580.059a13.747,13.747,0,0,0-13.613,13.848v524.66a13.74,13.74,0,0,0,13.613,13.819H1352.3a13.741,13.741,0,0,0,13.613-13.819V246.232a13.747,13.747,0,0,0-13.611-13.848Z"
								transform="translate(-6.18 31.452)"
								fill="#090814"
							></path>
							<path
								d="M1328.244,232.384h-748.6a13.225,13.225,0,0,0-13.2,13.223V746.614a13.219,13.219,0,0,0,13.2,13.2h748.6a13.219,13.219,0,0,0,13.2-13.2V245.608a13.224,13.224,0,0,0-13.193-13.223Z"
								transform="translate(-4.446 34.616)"
								fill="#fff"
							></path>
							<g transform="translate(-1.641 -57)">
								<path
									d="M348.018,257.437,201.871,154.7,54.232,256.48l145.437,61.414Z"
									transform="translate(760.284 236.013)"
									fill="#fff"
								></path>
								<path
									d="M393.726,437.164h.105l60.359,25.774L536.775,498.2a2.664,2.664,0,0,0,2.04.01l85.2-35.348,61.842-25.658.095-.042h.105a3.685,3.685,0,0,1,3.68,3.68V600.682a3.684,3.684,0,0,1-3.68,3.68H393.726a3.685,3.685,0,0,1-3.68-3.68V440.844a3.684,3.684,0,0,1,3.68-3.68Z"
									transform="translate(421.354 55.235)"
									fill="#fff"
								></path>
								<path
									d="M393.2,447.5a.524.524,0,0,0,.3-.094L538.909,346.143a2.637,2.637,0,0,1,3.012.005L686.283,447.409a.526.526,0,0,0,.6-.861L542.525,345.287a3.692,3.692,0,0,0-4.217-.007L392.9,446.547a.526.526,0,0,0,.3.957Z"
									transform="translate(421.618 45.945)"
									fill="#3f3d56"
								></path>
								<path
									d="M338.585,260.641l-137.761-102.1L62.019,267.905l131.708,78.079,71.506-16.3Z"
									transform="translate(761.066 236.399)"
									fill="#f2f2f2"
								></path>
								<path
									d="M580.146,563.346H648.2a3.18,3.18,0,1,0,.009-6.359H580.146a3.18,3.18,0,0,0-.009,6.359Z"
									transform="translate(440.116 67.262)"
									fill="currentColor"
								></path>
								<path
									d="M619.8,550.923h24.417a3.18,3.18,0,1,0,.009-6.359H619.8a3.18,3.18,0,0,0-.009,6.359Z"
									transform="translate(444.097 66.015)"
									fill="currentColor"
								></path>
								<path
									d="M532.7,506.706a3.975,3.975,0,0,0,1.508-.3l84.961-35.253V360.81a3.685,3.685,0,0,0-3.68-3.681H452.5a3.685,3.685,0,0,0-3.68,3.68V471.235l.16.068,82.169,35.09a4,4,0,0,0,1.554.313Z"
									transform="translate(427.253 47.201)"
									fill="currentColor"
								></path>
								<path
									d="M531.066,506.659l-82.488-35.227v-110.6a3.948,3.948,0,0,1,3.943-3.943H615.513a3.948,3.948,0,0,1,3.943,3.943V471.357l-85.124,35.321A4.275,4.275,0,0,1,531.066,506.659Zm87.339-145.825a2.9,2.9,0,0,0-2.892-2.892H452.521a2.9,2.9,0,0,0-2.892,2.892v109.9l81.848,34.953a3.217,3.217,0,0,0,2.454.015L618.4,470.655Z"
									transform="translate(427.229 47.177)"
									fill="#3f3d56"
								></path>
								<path
									d="M390.762,440.844V600.682a3.684,3.684,0,0,0,3.68,3.68H686.776a3.685,3.685,0,0,0,3.681-3.68V440.844a3.685,3.685,0,0,0-3.68-3.68h-.105l-.094.042-61.842,25.658-85.2,35.348a2.664,2.664,0,0,1-2.04-.01l-82.584-35.264-60.359-25.774h-.105A3.684,3.684,0,0,0,390.762,440.844Zm1.052,0a2.637,2.637,0,0,1,2.524-2.629l60.57,25.863,82.169,35.091a3.744,3.744,0,0,0,2.86.016L624.734,464l62.142-25.784a2.635,2.635,0,0,1,2.529,2.629V600.682a2.63,2.63,0,0,1-2.629,2.629H394.443a2.63,2.63,0,0,1-2.629-2.629Z"
									transform="translate(421.426 55.235)"
									fill="#3f3d56"
								></path>
								<path
									d="M465.512,395.382h57.836a4.206,4.206,0,0,0,0-8.413H465.512a4.206,4.206,0,1,0,0,8.413Z"
									transform="translate(428.507 50.196)"
									fill="#fff"
								></path>
								<path
									d="M465.544,379.137H493.41a4.206,4.206,0,0,0,0-8.413H465.544a4.206,4.206,0,0,0,0,8.413Z"
									transform="translate(428.51 48.565)"
									fill="#fff"
								></path>
								<path
									d="M487.3,433.608h88.331a4.206,4.206,0,0,0,0-8.413H487.3a4.206,4.206,0,0,0,0,8.413Z"
									transform="translate(430.694 54.033)"
									fill="#fff"
									opacity="0.5"
								></path>
								<path
									d="M487.3,451.287h88.331a4.206,4.206,0,1,0,0-8.412H487.3a4.206,4.206,0,0,0,0,8.413Z"
									transform="translate(430.694 55.808)"
									fill="#fff"
									opacity="0.5"
								></path>
							</g>
							<g transform="translate(239.135)">
								<circle
									cx="39.939"
									cy="39.939"
									r="39.939"
									transform="translate(680.926 671.884)"
									fill="currentColor"
								></circle>
								<path
									d="M556.177,73.934a1.543,1.543,0,0,0-.45,2.9l18.361,9.226,1,20.523a1.545,1.545,0,0,0,2.838.766l24.83-38.272a1.546,1.546,0,0,0-1.541-2.369l-45.047,7.208Zm19.631,9.541-14.415-7.244,36.893-5.91-20.343,31.344-.793-16.118,10.748-7a1.237,1.237,0,1,0-1.351-2.072l-10.748,7Z"
									transform="translate(139.947 630.394)"
									fill="#fff"
									fillRule="evenodd"
								></path>
							</g>
							<g transform="translate(645.466 646.622)">
								<path
									d="M224.694,123.086a39.939,39.939,0,1,0,39.937,39.939h0a39.939,39.939,0,0,0-39.939-39.939Zm0,11.981a11.981,11.981,0,1,1-11.981,11.981h0a11.981,11.981,0,0,1,11.981-11.981Zm0,57.68a29.1,29.1,0,0,1-23.963-12.789c.192-7.988,15.976-12.385,23.963-12.385s23.771,4.4,23.963,12.385a29.142,29.142,0,0,1-23.963,12.789Z"
									transform="translate(-74.569 -97.824)"
									fill="currentColor"
								></path>
							</g>
							<g transform="translate(63.517)">
								<circle
									cx="39.939"
									cy="39.939"
									r="39.939"
									transform="translate(1020.955 671.884)"
									fill="currentColor"
								></circle>
								<g transform="translate(-140.988 64.501)">
									<path
										d="M545.017,221.925V195.34a15.041,15.041,0,0,0-30.074-.662h3.31a11.747,11.747,0,0,1,11.721-11.287h.172a11.756,11.756,0,0,1,11.563,11.926v26.822a7.879,7.879,0,0,1-7.867,7.774h-.1a7.882,7.882,0,0,1-7.772-7.985l.018-26.406a3.964,3.964,0,1,1,7.928-.026v7.672a1.655,1.655,0,1,0,3.31,0v-7.7a7.272,7.272,0,1,0-14.545.025l-.017,26.413a11.191,11.191,0,0,0,11.041,11.313h.138a11.194,11.194,0,0,0,11.175-11.051C545.018,222.084,545.018,222,545.017,221.925Z"
										transform="translate(672.318 440.728)"
										fill="#fff"
									></path>
									<circle
										cx="3.904"
										cy="3.904"
										r="3.904"
										transform="translate(1202.3 659.185)"
										fill="#fff"
									></circle>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div className="col-6">
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="Budi"
						/>
						<label htmlFor="floatingInput">Name</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>

					<div className="form-floating">
						<textarea
							className="form-control"
							placeholder="Leave a comment here"
							id="floatingTextarea2"
							style={{ height: "100px" }}
						></textarea>
						<label htmlFor="floatingTextarea2">Comments</label>
					</div>
				</div>
			</div>
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<a
						href="/"
						className="d-flex align-items-center mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
						aria-label="Bootstrap"
					>
						<i
							className="fa-solid fa-book fa-2xl"
							style={{ color: "#0d6efd" }}
						></i>
						<span className="ms-1 fs-4">BookStore</span>
					</a>
					<span className="mb-3 mb-md-0 text-body-secondary">
						© 2025 Cortisoal
					</span>
				</div>
				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a className="text-body-secondary" href="#" aria-label="Instagram">
							<i className="fa-brands fa-instagram"></i>
						</a>
					</li>
					<li className="ms-3">
						<a className="text-body-secondary" href="#" aria-label="Facebook">
							<i className="fa-brands fa-linkedin"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
