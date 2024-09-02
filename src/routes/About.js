import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Aa.jpg";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="your beauty store"
        text="lift&tint"
      />
      <Footer />
    </>
  );
}
export default About;
