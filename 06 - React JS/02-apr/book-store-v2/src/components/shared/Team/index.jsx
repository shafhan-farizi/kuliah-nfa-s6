export default function Team() {
	return (
		<>
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
		</>
	);
}
