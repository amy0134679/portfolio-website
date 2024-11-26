import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <button class="navButton" type="homeButton">Home</button>
          <button class="navButton" type="aboutButton">About</button>
          <button class="navButton" type="contactButton">Contact</button>

        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div class="wrapper">
          <section id="home" className="section home">
            <h1>Welcome to My Kittenville!</h1>
            <p>Make sure you leave your shoes at the door or i'LL HISS.</p>
            <h2>About Me</h2>
            <p>Here’s some information about KITTENS</p>
        </section>
        </div>

        <div class="wrapper">
          <section id="projects" className="section projects">
            <h2>Learn about the projects I've worked on!</h2>
            <p>Here’s some information about KITTENS</p>
          </section>
        </div>

        <div class="wrapper">
          <section id="contact" className="section contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me via meowing loudly</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 kittenville. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
