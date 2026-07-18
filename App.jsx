import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h2 className="logo">BMW</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">Models</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="left">
          <h1>BMW M4 Competition</h1>

          <p>
            Feel the power, luxury and innovation of the new BMW generation.
            Designed for drivers who love speed and comfort.
          </p>

          <button>Explore Now</button>
        </div>

        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80"
            alt="BMW"
          />
        </div>
      </section>
    </div>
  );
}

export default App;