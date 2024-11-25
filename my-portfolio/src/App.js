import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div class="wrapper">
          <section id="home" className="section home">
            <h1>Welcome to My Kittenville!</h1>
            <p>Make sure you leave your shoes at the door or i'LL HISS.</p>
        </section>
        </div>

        <div class="wrapper">
          <section id="about" className="section about">
            <h2>About Me</h2>
            <p>Here’s some information about KITTENS</p>
          </section>
        </div>
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Feel free to reach out to me via meowing loudly</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 kittenville. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
