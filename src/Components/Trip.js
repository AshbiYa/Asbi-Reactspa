import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/Cc.jpg";
import Trip2 from "../assets/Aa.jpg";
import Trip3 from "../assets/Dd.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Studio-Gallery</h1>
      <p>u can discover unique style here</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="EyeLash Extension"
          text="eyelash extensions and lash lifts are transformative beauty treatments that can enhance your natural beauty,
           save you time, and elevate your confidence."
        />

        <TripData
          image={Trip2}
          heading="EyeLash-Lamination"
          text="Lash Lamination or Lift is a Professional Lift For Trendy Curled Lashes. 
          It's like perming your lashes into a lifted, curled state."
        />
        <TripData
          image={Trip3}
          heading="Eyelash-Tinting"
          text="A lash tint is a 15-minute procedure where semi-permanent dye is painted onto 
          the eyelashes to make them appear thicker, darker, and fuller"
        />
      </div>
    </div>
  );
}
export default Trip;
