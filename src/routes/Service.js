import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Ee.jpg";
import Footer from "../Components/Footer";
import Gallery from "../routes/Gallery";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        className="hero-mid" // Change "cName" to "className"
        heroImg={AboutImg}
        title="Service"
        text="Gallery"
      />
      <Gallery />
      <Footer />
    </>
  );
}

export default Service;
