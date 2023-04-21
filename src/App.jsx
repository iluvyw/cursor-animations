import "./App.scss";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <h3 className="brief">Manchester City XI</h3>
      <h3 className="credit">
        Developed by{" "}
        <a href="https://github.com/iluvyw" target="_blank" rel="noreferrer">
          An Pham
        </a>
      </h3>
      <div id="container" className="container">
        <h2 data-video-src="ederson">Ederson</h2>
        <h2 data-video-src="akanji">Akanji</h2>
        <h2 data-video-src="dias">Dias</h2>
        <h2 data-video-src="stones">Stones</h2>
        <h2 data-video-src="ake">Ake</h2>
        <h2 data-video-src="gundogan">Gundogan</h2>
        <h2 data-video-src="rodri">Rodri</h2>
        <h2 data-video-src="bruyne">Bruyne</h2>
        <h2 data-video-src="silva">Silva</h2>
        <h2 data-video-src="haaland">Haaland</h2>
        <h2 data-video-src="grealish">Grealish</h2>
      </div>
      <Cursor />
    </>
  );
}

export default App;
