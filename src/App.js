import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

export const goToRoute = (navigate, path) => {
  navigate(path);
};

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
    <div className="question-container">
      <NavLink to="/toc" className="question">
        {" "}
        Should U.S. taxpayers fund expensive space telescopes like JWST while
        there are urgent issues on Earth?
      </NavLink>
    </div>
  );
};

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/toc" element={<Contents />} />
      <Route path="/topic1" element={<Topic1 />} />
      <Route path="/topic2" element={<Topic2 />} />
      <Route path="/topic3" element={<Topic3 />} />
      <Route path="/conclusion" element={<Conclusion />} />
    </Routes>
  );
};

const Contents = () => {
  const navigate = useNavigate();
  return (
    <div className="toc-wrapper">
      <div className="contents">
        <p>
          <strong>Table of Contents</strong>
        </p>
        <div className="topics">
          <NavLink to="/topic1" className="topic">
            <strong>I.</strong> Scientific and Technological Impact
          </NavLink>
          <NavLink to="/topic2" className="topic">
            <strong>II.</strong> Historical Precedent and Long-Term Vision
          </NavLink>
          <NavLink to="/topic3" className="topic">
            <strong>III.</strong> Ethics, Cost, and Public Responsibility
          </NavLink>
          <NavLink to="/conclusion" className="topic">
            <strong>IV.</strong> Conclusion
          </NavLink>
          <button onClick={() => goToRoute(navigate, "/")} className="back">
            Back to title
          </button>
        </div>
      </div>
    </div>
  );
};

const Topic1 = () => {
  const navigate = useNavigate();
  return (
    <div className="topic-container">
      <div class="topic-info">
        <h1>Scientific and Technological Impact</h1>
        <p>
          Astronomical observatories like the James Webb Space Telescope are not
          just tools of astronomers but discovery machines that transform our
          understanding of the universe. We can rewind the clock a few hundred
          million years ago since the Big Bang using JWST, and from it we know
          galaxy and star formation. It is applied in the search for
          life-supporting exoplanets as well, analyzing the atmosphere of
          distant worlds for tell-tale signs of conditions conducive to life.
          Besides stimulating human curiosity, the findings also enable us to
          understand our place in the universe. Aside from clean science,
          constructing space telescopes puts a challenge to engineering, optics,
          and computer science. Space technologies developed for JWST, such as
          state-of-the-art infrared sensors and cryogenic refrigeration, often
          end up being used in reengineered forms for real-world, Earth-facing
          applications. Medicine, including medical imaging, and environmental
          monitoring benefit from the same sensor technology, for instance, as
          an spin-off. This proves that space science is funded not just
          creating new knowledge—it creates new tools that make life better on
          Earth as well.
        </p>
        <button
          onClick={() => goToRoute(navigate, "/toc")}
          className="back-button"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

const Topic2 = () => {
  const navigate = useNavigate();
  return (
    <div className="topic-container">
      <div className="topic-info">
        <h1>Historical Precedent and Long-Term Vision</h1>
        <p>
          King Frederick II’s decision to fund Tycho Brahe’s observatory,
          Uraniborg, in the late 16th century is a powerful historical example
          of the long-term value of investing in science. Even though Brahe
          never constructed a comprehensive model of the solar system himself,
          his remarkably precise astronomical observations formed the underlying
          data on which Johannes Kepler later founded his laws of planetary
          motion—laws that would themselves go on to influence Newton's law of
          gravity and the science of modern physics in general. When the Danish
          King invested in it then, he may not have gained an immediate return
          on investment, but his support was critical to advancing humankind's
          understanding of the universe. This is being followed in modern
          investments in large science facilities like the James Webb Space
          Telescope. JWST-style projects will not pay dividends immediately or
          solve the social ills of today, but they extend the boundaries of what
          can be done with physics and technology and in our understanding of
          the universe. As with the return on Brahe's investments, which was
          realized over a period of decades, the payoff from JWST may be enjoyed
          most by future generations. The moral of the tale: visionary
          sponsorship of science—even at great cost—has a tendency to propel
          revolutionary shifts in human knowledge that can affect countless
          aspects of society, from education to innovation.
        </p>
        <button
          onClick={() => goToRoute(navigate, "/toc")}
          className="back-button"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

const Topic3 = () => {
  const navigate = useNavigate();
  return (
    <div className="topic-container">
      <div className="topic-info">
        <h1>Ethics, Cost, and Public Responsibility</h1>
        <p>
          The $16 billion spent on the James Webb Space Telescope appropriately
          also raises questions of ethics regarding priorities, especially given
          global issues like poverty, global warming, and healthcare that
          continue to be underfunded. People contend that so much may possibly
          be better spent fixing actual, real issues on down earth. But it must
          be remembered that science projects like JWST are being funded by a
          relatively small fraction of the federal budget—NASA gets less than
          0.5% of the total U.S. federal spending. Not even reducing funds on
          JWST would dent the budget of the social programs to any appreciable
          degree. And projects like JWST generate public value that borders on
          the non-domestic. The telescope is a product of collaboration between
          NASA, the European Space Agency (ESA), and the Canadian Space Agency
          (CSA), showing what can be done with science when countries
          collaborate. The data it produces is released for free to scientists
          across the globe, allowing scientific progress without exclusions. In
          so doing, the ethical concern is not just the expense, but the value
          of shared knowledge, inspiration, and creativity. Not a frill, public
          science like JWST is a high point in global commitment to exploration,
          discovery, and the incremental betterment of civilization.
        </p>
        <button
          onClick={() => goToRoute(navigate, "/toc")}
          className="back-button"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

const Conclusion = () => {
  const navigate = useNavigate();
  return (
    <div className="topic-container">
      <div className="topic-info">
        <h1>Conclusion</h1>
        <p>
          With such perspectives, it is not hard to find that missions like the
          James Webb Space Telescope are greater than mere scientific discovery
          they are worth—innovation is catalyzed, global cooperation is enabled,
          and knowledge treasures investing legacies are left behind. Even
          though issues like global warming and poverty must take the starring
          roles, the relatively low cost of JWST does not detract from the
          pursuit. It is worthwhile in another way rather. I think that space
          science funding is a wise and good investment that improves society
          today and tomorrow.
        </p>
        <button
          onClick={() => goToRoute(navigate, "/toc")}
          className="back-button"
        >
          Go Back
        </button>
      </div>
    </div>
  );
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
