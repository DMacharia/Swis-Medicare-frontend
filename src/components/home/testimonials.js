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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ullamcorper et quam et tempus. Aenean ultrices varius
              justo, faucibus pellentesque dui porttitor quis. Phasellus
              scelerisque turpis at purus dictum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ullamcorper et quam et tempus. Aenean ultrices varius
              justo, faucibus pellentesque dui porttitor quis. Phasellus
              scelerisque turpis at purus dictum.
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
