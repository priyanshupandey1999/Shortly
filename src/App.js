import "./App.css";
import Navbar from "./components/Navbar";
import HeaderContent from "./components/HeaderContent";
import StatisticContent from "./components/StatisticContent";
import BoostContent from "./components/BoostContent";
import MeetDevelopers from "./components/MeetDevelopers";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import ConnectCommunity from "./components/ConnectCommunity";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar />
        </div>
        <HeaderContent />
      </header>
      <section className="statistic-content">
        <StatisticContent />
      </section>
      <section className="meet-developers">
        <MeetDevelopers />
      </section>
      <section className="journey-sections">
        <Journey />
      </section>
      <section className="community-section">
        <ConnectCommunity />
      </section>
      <section className="Boost-content">
        <BoostContent />
      </section>
      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
