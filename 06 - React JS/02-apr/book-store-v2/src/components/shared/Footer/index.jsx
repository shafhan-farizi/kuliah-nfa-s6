export default function Footer() {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<div className="col-md-4 d-flex align-items-center">
				<a
					href="/"
					className="d-flex align-items-center mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
					aria-label="Bootstrap"
				>
					<i className="fa-brands fa-leanpub" style={{ color: "#c42786" }}></i>
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
	);
}
