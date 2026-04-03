export default function Hero() {
	return (
		<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg h-100">
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
	);
}
