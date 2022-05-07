function TopoEsquerda() {
    return (
        <div class="topo-esquerda">
            <ion-icon name="logo-instagram"></ion-icon>
            <div></div>
            <img src="images/logo.png" />
        </div>
    );
}

function TopoMeio() {
    return (
        <div class="topo-meio">
            <h4>Pesquisar</h4>
        </div>
    );
}

function TopoDireita() {
    return (
        <div class="topo-direita">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

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