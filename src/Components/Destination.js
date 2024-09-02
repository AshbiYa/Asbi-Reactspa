import DestinationData from "../Components/DestinationData";
import "./DestinationStyles.css";
import Book1 from "../assets/Ee.jpg";
import Book2 from "../assets/Dd.jpg";
import Book3 from "../assets/Bb.jpg";
import Book4 from "../assets/Aa.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Perfect-Eyelashes</h1>
      <p>
        The Master of our studio are certified and experience,which ensure high
        Quality performance of our servive.
      </p>

      <DestinationData
        className="first-des"
        heading="Lashes-Extend"
        text="the more things you will know. The more that you learn, the more
      places you'll go.” le most good book introduction examples are
      brief, Lamott uses her storytelling expertise to hook the reader,
      identify their pain point, and establish her own credibility. And
      she’s Anne Lamott, so she can get by with a bit longer of an"
        img1={Book1}
        img2={Book2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Lift&Tint"
        text="The purpose of a book introduction is to engage the reader 
      and get them to read the book.Your book introduction is like a video thumbnail or the key photo on a live image—why do influencers spend time finding the perfect graphic? To engage their audience and pull them into their content. 
      The same goes for writers and book introductions. Happy writing!"
        img2={Book3}
        img1={Book4}
      />
    </div>
  );
};
export default Destination;
