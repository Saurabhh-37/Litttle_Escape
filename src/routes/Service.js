import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/Veruli1.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import AllTrips from "../components/AllTrips";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <AllTrips />
      <Footer />
    </>
  );
}

export default Service;
