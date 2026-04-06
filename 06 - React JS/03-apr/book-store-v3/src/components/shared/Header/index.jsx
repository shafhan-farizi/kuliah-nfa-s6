import { Link, NavLink } from "react-router";

export default function Header() {
	return (
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
			<div className="col-md-3 mb-2 mb-md-0">
				<a
					href="/"
					className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
				>
					<i className="fa-brands fa-leanpub" style={{color: '#c42786'}}></i>
					<span className="ms-1 fs-4">BookStore</span>
				</a>
			</div>
			<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`nav-link px-2 primary-color ${isActive ? "link-secondary" : ""}`
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/books"
						className={({ isActive }) =>
							`nav-link px-2 primary-color ${isActive ? "link-secondary" : ""}`
						}
					>
						Book
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/teams"
						className={({ isActive }) =>
							`nav-link px-2 primary-color ${isActive ? "link-secondary" : ""}`
						}
					>
						Team
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contacts"
						className={({ isActive }) =>
							`nav-link px-2 primary-color ${isActive ? "link-secondary" : ""}`
						}
					>
						Contact
					</NavLink>
				</li>
			</ul>
			<div className="col-md-3 text-end">
				<Link to="/login">
					<button type="button" className="btn btn-outline-primary me-2">
						Login
					</button>
				</Link>
				<Link to="/register">
					<button type="button" className="btn btn-primary">
						Sign-up
					</button>
				</Link>
			</div>
		</header>
	);
}
