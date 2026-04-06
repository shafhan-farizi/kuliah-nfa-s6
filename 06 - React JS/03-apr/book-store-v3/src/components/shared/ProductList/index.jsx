import bookList from "../../../utils/Books";

export default function ProductList() {
	return (
		<>
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
				<div className="container-md">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{bookList.map((book) => (
							<div className="col" key={book.id}>
							<div className="card shadow-sm border-0">
								<div
									className="overflow-hidden"
									style={{ height: "225px", background: "#eee" }}
								>
									<img
										className="h-100 w-100 object-fit-cover"
										src={book.image}
									/>
								</div>
								<div className="card-body">
									<small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>{book.author}</small>
									<h5 className="card-title my-1 text-truncate">{book.title}</h5>
									<p className="card-text text-secondary small mb-3 truncate-overflow">
										{book.description}
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-primary"
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-primary"
											>
												Edit
											</button>
										</div>
										<small className="text-dark fw-bold">{book.year}</small>
									</div>
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
