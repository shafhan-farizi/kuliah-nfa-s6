import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";

export default function Book() {
	return (
		<>
			<Header />
			<main className="flex-grow-1">
				<ProductList />
			</main>
			<Footer />
		</>
	);
}
