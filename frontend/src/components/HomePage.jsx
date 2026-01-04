import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Bella Vista</h1>
          <p className="hero-subtitle">Experience Fine Dining at Its Finest</p>
          <p className="hero-description">
            Indulge in exquisite flavors crafted with passion and served with elegance
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Menu</button>
            <button className="btn btn-secondary">Book a Table</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                For over two decades, Bella Vista has been serving exceptional cuisine
                in an elegant and welcoming atmosphere. Our chefs combine traditional
                techniques with innovative flavors to create unforgettable dining experiences.
              </p>
              <p>
                We source only the finest ingredients, supporting local farmers and
                sustainable practices. Every dish tells a story, and every meal is
                crafted with care and attention to detail.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                {/* <span>Restaurant Interior</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dish Gallery Section */}
      <section id="gallery" className="dish-gallery">
        <div className="container">
          <h2 className="section-title">Our Menu Highlights</h2>
          <p className="gallery-subtitle">A visual feast of our signature dishes</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Signature Pasta</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Prime Ribeye</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Grilled Salmon</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Seafood Platter</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Caesar Salad</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Chocolate Soufflé</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Tiramisu</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="image-overlay">
                  <span className="dish-name">Lobster Thermidor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "An absolutely incredible dining experience! The food was exceptional
                and the service was impeccable. We'll definitely be back!"
              </p>
              <p className="testimonial-author">— Sarah Johnson</p>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The best restaurant in town! Every dish was a masterpiece. The
                ambiance is perfect for a romantic dinner or special celebration."
              </p>
              <p className="testimonial-author">— Michael Chen</p>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Outstanding cuisine and wonderful staff. Bella Vista has become
                our favorite place for special occasions. Highly recommended!"
              </p>
              <p className="testimonial-author">— Emily Rodriguez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Visit Us</h2>
              <div className="info-item">
                <h3>📍 Location</h3>
                <p>123 Culinary Street<br />Food District, City 12345</p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="info-item">
                <h3>🕒 Hours</h3>
                <p>
                  Monday - Thursday: 5:00 PM - 10:00 PM<br />
                  Friday - Saturday: 5:00 PM - 11:00 PM<br />
                  Sunday: 4:00 PM - 9:00 PM
                </p>
              </div>
            </div>
            <div className="contact-form">
              <h2>Make a Reservation</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <input type="time" required />
                </div>
                <div className="form-group">
                  <input type="number" placeholder="Number of Guests" min="1" required />
                </div>
                <button type="submit" className="btn btn-primary">Reserve Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

