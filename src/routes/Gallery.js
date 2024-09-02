import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Dd.jpg";

import Trip from "../Components/Trip";

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Studio-Gallery"
        text="eyelash extensions and lash lifts are transformative beauty treatments that can enhance your natural beauty, 
        save you time, and elevate your confidence."
      />

      <Trip />
    </>
  );
}
export default Gallery;
