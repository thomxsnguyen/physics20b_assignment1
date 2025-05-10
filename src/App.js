import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

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

const Intro = () => {
  return (
    <div className="intro">
      <Header />
      <Question />
    </div>
  );
};

const Question = () => {
  return (
    <NavLink to="/toc" className="toc">
      {" "}
      Should U.S. taxpayers fund expensive space telescopes like JWST while
      there are urgent issues on Earth?
    </NavLink>
  );
};

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/topic1" element={<Topic1 />} />
      <Route path="/topic2" element={<Topic2 />} />
      <Route path="/topic3" element={<Topic3 />} />
      <Route path="/Conclusion" element={<Conclusion />} />
    </Routes>
  );
};

const Contents = () => {
  return (
    <div className="contents">
      Table of Contents
      <div className="topics">
        <NavLink to="/topic1">Scientific and Technological Impact</NavLink>
        <NavLink to="/topic2">
          Historical Precedent and Long-Term Vision
        </NavLink>
        <NavLink to="/topic3">Ethics, Cost, and Public Responsibility</NavLink>
        <NavLink to="/conclusion">Conclusion</NavLink>
      </div>
    </div>
  );
};

const Topic1 = () => {
  return <></>;
};

const Topic2 = () => {
  return <></>;
};

const Topic3 = () => {
  return <></>;
};

const Conclusion = () => {
  return <></>;
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App;
