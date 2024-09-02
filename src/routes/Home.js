import Navbar from "../Components/Navbar";

import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import Login from "../Components/Login";

function Home() {
  return (
    <>
      <Navbar />

      <div>
        <Destination />

        <Trip />
        <Login />

        <Footer />
      </div>
    </>
  );
}
export default Home;
