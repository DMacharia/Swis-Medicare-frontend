import Rev1 from "../images/rev1.png";
import Rev2 from "../images/rev2.png";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h3 className="services-header">Testimonials</h3>
      <div className="test-conts">
        <span className="test-cards">
          <span className="test-cards-image">
            <img src={Rev1} alt="profile" />
          </span>
          <span className="test-cards-review">
            <p>
            I had an outstanding experience at Swis-medicare. The healthcare services provided were top-notch, and the staff were incredibly professional, knowledgeable and compassionate. I felt well taken care of. I highly recommend Swis-medicare to anyone in need of medical services.
            </p>
          </span>
          <span className="test-cards-rating">
            <i>Mark Okumu</i>
          </span>
        </span>
        <span className="test-cards">
          <span className="test-cards-image">
            <img src={Rev2} alt="profile" />
          </span>
          <span className="test-cards-review">
            <p>
            I was thoroughly impressed with the level of care I received at Swis-medicare. The staff were friendly and attentive, and the facilities were clean and well-equipped. I felt comfortable and well-informed throughout my visit. I would highly recommend Swis-medicare to anyone in need of medical attention.
            </p>
          </span>
          <span className="test-cards-rating">
            <i>Sheilah Chukua</i>
          </span>
        </span>
      </div>
    </section>
  );
}
