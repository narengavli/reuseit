import Navbar from "./navigation/navbar"
import Footer from "./navigation/footer"

export default function ShopLayout({ children }) {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}
