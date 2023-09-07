import Mountain1 from "../assets/Raireshwar1.jpeg";
import Mountain2 from "../assets/Raireshwar2.jpeg";
import Mountain3 from "../assets/Pratapgad1.jpg";
import Mountain4 from "../assets/Pratapgad3.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a tine frame.</p>

      <DestinationData
        className="first-des"
        heading="Pratapgad"
        text="Pratapgad Fort, perched atop the Sahyadri Mountains in Maharashtra, India, is a historic stronghold that holds great significance. Built in 1656, it commemorates the victory of Maratha warrior Shivaji Maharaj over the Adil Shahi dynasty. The fort's architecture includes massive walls, watchtowers, and a unique layout. The Bhavani Temple and Afzal Khan's tomb are key attractions, reflecting the fort's historical events. Pratapgad's breathtaking views, accessible via a scenic drive, make it a popular tourist and trekking destination. This fort encapsulates Maratha valor, history, and architecture, offering a captivating glimpse into India's past."
        img1={Mountain3}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des"
        heading="Raireshwar"
        text="Raireshwar Fort, nestled in Maharashtra's Sahyadri range, is renowned for its historical and spiritual significance. The site of Chhatrapati Shivaji Maharaj's oath for self-rule, it boasts the revered Raireshwar Temple dedicated to Lord Shiva. Trekkers are drawn by its moderate trail, revealing lush forests, bastions, and panoramic vistas. The fort's annual celebrations honor Shivaji Maharaj, preserving its cultural heritage. With a blend of history, architecture, and natural beauty, Raireshwar Fort stands as a testament to Maharashtra's captivating past and enduring spirituality."
        img1={Mountain1}
        img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
