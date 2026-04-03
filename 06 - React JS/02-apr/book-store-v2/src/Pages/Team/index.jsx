import Header from "../../components/shared/Header";
import Team from "../../components/shared/Team";
import Footer from "../../components/shared/Footer";

export default function Teams() {
	return (
		<>
			<Header />
			<main className="flex-grow-1">
				<Team />
			</main>
			<Footer />
		</>
	);
}
