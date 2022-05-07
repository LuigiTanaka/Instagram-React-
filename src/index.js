import ReactDOM from "react-dom";
import Topo from "./Topo";
import Container from "./Container";
import BarraInferior from "./BarraInferior";

function App() {
    return (
        <div>
            <Topo />
            <Container />
            <BarraInferior />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));