import Header from "./components/Header.jsx";
import RestoreScene from "./components/RestoreScene.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        К содержанию
      </a>
      <Header />
      <main>
        <RestoreScene />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
