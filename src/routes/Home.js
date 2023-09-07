import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HeroImg from "../assets/Velang3.jpeg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
