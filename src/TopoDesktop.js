import TopoEsquerda from "./TopoEsquerda";
import TopoMeio from "./TopoMeio";
import TopoDireita from "./TopoDireita";

export default function TopoDesktop() {
    return (
        <div class="topo-desktop">
            <div>
                <TopoEsquerda />
                <TopoMeio />
                <TopoDireita />
            </div>
        </div>
    );
}