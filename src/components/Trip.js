import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/Kalavantin1.jpg";
import Trip2 from "../assets/Rajgad2.jpg";
import Trip3 from "../assets/Vasota1.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Kalavantin Durg"
          text="
          Kalavantin Durg, Maharashtra's pinnacle near Prabalgad Fort, offers a thrilling trek. Steep steps lead to panoramic views of Sahyadri and Mumbai. Historical and unique, it's a magnet for adventurers and photographers."
        />

        <TripData
          image={Trip2}
          heading="Rajgad"
          text="Rajgad Fort, Maharashtra, is a historic hill fort with panoramic views. Once capital of Maratha Empire, it boasts massive walls, temples, and strategic architecture, attracting trekkers and history enthusiasts."
        />

        <TripData
          image={Trip3}
          heading="Vasota"
          text="Vasota, nestled in Maharashtra's Koyna Wildlife Sanctuary, is a captivating hill fort. Accessible by boat across Koyna Lake, it offers a moderate trek through dense forests. Ancient temples and remnants highlight its history, while diverse flora and fauna add natural charm to this remote adventure destination."
        />
      </div>
    </div>
  );
}

export default Trip;
