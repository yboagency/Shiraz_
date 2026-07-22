import Image from "next/image";

export default function Reservation() {
  return (
    <div className="panel panel--dark" id="reservation">
      <section className="reservation" id="booking-form">
        <div className="reservation-left reveal">
          <picture
            className="reservation-left-img"
            style={{ position: "absolute", inset: 0, display: "block" }}
          >
            <Image
              src="/pictures/reservation.webp"
              alt="Dining interior"
              loading="lazy"
              fill
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </picture>
          <div className="reservation-left-overlay" />
          <div className="reservation-left-content">
            <p className="script-title">Book a table</p>
            <h2>Reservation</h2>
          </div>
        </div>
        <div className="reservation-right reveal">
          <div className="reservation-form">
            <div className="reservation-form-header">
              <h3>Book a table</h3>
              <p>
                Our dining atmosphere is inspired by traditional afghan seating.
                We have a selection of partitioned floor seating available or
                alternatively table seating with afghan decor.
              </p>
            </div>
            <div className="phone-reserve-block">
              <p className="phone-reserve-label">Reserve by phone</p>
              <a href="tel:02085690777" className="phone-reserve-number">
                020 8569 0777
              </a>
              <a
                href="tel:02085690777"
                className="pointybtn pointybtn--fill phone-reserve-btn"
              >
                Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
