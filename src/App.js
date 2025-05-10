import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <h1>Assignment 1</h1>
        <h3>Thomas Nguyen</h3>
      </div>
      <h3>PHYSICS 20B</h3>
    </div>
  );
};

const Question = () => {
  return (
    <h1>
      Should U.S. taxpayers fund expensive space telescopes like JWST while
      there are urgent issues on Earth?
    </h1>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Question />
    </div>
  );
};

export default App;
