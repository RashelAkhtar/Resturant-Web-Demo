import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Bella Vista</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Menu</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="reserve-btn">Reserve Table</button>
      </nav>
    </header>
  );
}

export default Header;

