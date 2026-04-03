import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import Contact from "../../components/shared/Contact";

export default function Contacts() {
    return (
        <>
            <Header />
            <main className="flex-grow-1">
                <Contact />
            </main>
            <Footer />
        </>
    );
}
