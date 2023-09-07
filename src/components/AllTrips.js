import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/NecklacePoint1.jpg";
import Trip2 from "../assets/SandhanValley1.jpg";
import Trip3 from "../assets/Kelavli1.jpg";
import Trip4 from "../assets/Lingmala2.jpg";
import Trip5 from "../assets/Vajrai1.jpg";
import Trip6 from "../assets/sinhagad1.jpg";
import Trip7 from "../assets/Panhala1.jpg";
import Trip8 from "../assets/Janjira1.jpg";

function AllTrips() {
  return (
    <div className="trip">
      <h1>Forts</h1>
      <p>You can discover unique destinations</p>

      <div className="tripcard">
        <TripData
          image={Trip6}
          heading="Sinhagad"
          text="Embark on an unforgettable journey to Sinhagad, Maharashtra, where the heroic legacy of Subhedar Tanaji Malusare comes alive. Explore the ancient fortress, soak in sweeping vistas, and relive history's valor. Savor local flavors, enveloped by cool mountain breezes. This destination weaves together heritage, nature, and the spirit of Tanaji Malusare's bravery."
        />

        <TripData
          image={Trip7}
          heading="Panhala"
          text="Step into the heroic realm of Panhala, Maharashtra. Roam the historic fortress where Baji Prabhu Deshpande and the Bandal Army scripted their saga of bravery. Immerse in panoramic vistas, delve into stories of valor, and savor the cultural richness. A captivating blend of history, courage, and scenic beauty awaits."
        />

        <TripData
          image={Trip8}
          heading="Janjira"
          text="Embark on an exotic voyage to Janjira, a captivating island fortress in Maharashtra. Immerse in its maritime legacy as you explore the impregnable walls that once safeguarded dynasties. Enjoy sea breezes, uncover tales of resilience, and relish the coastal charm. A journey into history and coastal allure awaits."
        />
      </div>

      <h1>Waterfalls</h1>
      <p>You can discover unique destinations</p>
      <div className="tripcard">
        <TripData
          image={Trip4}
          heading="Lingmala Waterfall"
          text="Discover the enchantment of Lingmala Waterfall in Mahabaleshwar, Maharashtra. Immerse yourself in nature's symphony as crystal-clear waters gracefully tumble down lush hills during the monsoon. Accessible tiers offer relaxation, perfect for picnics and serene strolls. A photographer's paradise awaits, capturing moments of awe amid the verdant Western Ghats."
        />

        <TripData
          image={Trip5}
          heading="Vajrai Waterfall"
          text="
          Embark on a mesmerizing journey to Vajrai Waterfall in Satara, Maharashtra. Amidst emerald landscapes, experience the joy of witnessing the tallest waterfall in India. During the monsoon, Vajrai's cascading beauty enchants all, offering an unforgettable escape into nature's grandeur. A must-visit destination for those seeking awe-inspiring landscapes and tranquility."
        />

        <TripData
          image={Trip3}
          heading="Kelavli Waterfall"
          text="Kelavali waterfall is a popular tourist attraction located in Satara district in the state of Maharashtra, India. The waterfall is situated near the village of Kelavali and is approximately 32 kilometers from the city of Satara. The waterfall is surrounded by lush greenery and offers a picturesque view of the surrounding hills and valleys."
        />
      </div>

      <h1>Offbeat Locations</h1>
      <p>You can discover unique destinations</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Necklace Point"
          text="Hillside lookout over a horseshoe-shaped river bend, surrounded by thick foliage in monsoon season."
        />

        <TripData
          image={Trip2}
          heading="Sandhan Valley"
          text="Sandhan Valley, 'Valley of Shadows,' Maharashtra, captivates with its narrow gorge, towering rock walls, and seasonal water streams. Trekking here involves rappelling, adding to the adventure in its stunning natural setting."
        />

        <TripData
          image={Trip3}
          heading="Shivtharghal"
          text="Nestled in Maharashtra's embrace, Shivtharghal is a serene haven for seekers of tranquility. Discover ancient rock carvings, a testament to history's touch, amid lush surroundings. The murmuring river, sacred temples, and verdant landscapes create a soul-soothing escape. Immerse in nature's embrace and relish the whispers of the past."
        />
      </div>
    </div>
  );
}

export default AllTrips;
